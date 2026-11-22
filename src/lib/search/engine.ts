// Search engine: field-weighted, word-prefix regex matching with synonyms and typo correction.
// Ported from the 507 Movements app. Pure: works in the browser, on the server, or in an MCP tool.
//
// Query syntax
//   crank slider        every word must match (word-prefix, any field)
//   "straight line"     exact phrase
//   use:engine          restrict a word to a field (title, aka, use, tag, category, motion, family, kind)
//   category:knots      only one category      tag:mechanical-advantage   only one tag
//   /gear|belt/         raw regular expression (case-insensitive)
import type { SearchDoc } from "./docs";

const escRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Terms people search for → words the catalog uses.
const SYN: Record<string, string[]> = {
  reciproc: ["back & forth", "back and forth", "slider", "piston"],
  linear: ["back & forth", "straight", "slider", "rack"],
  oscillat: ["swing", "rock"],
  rocker: ["swing", "rock"],
  intermit: ["stop & go", "index", "step"],
  indexing: ["stop & go", "step"],
  rotary: ["rotation", "turn"],
  rotat: ["rotation", "turn"],
  cog: ["gear"],
  sprocket: ["gear", "belt"],
  chain: ["belt"],
  pulley: ["belt", "block"],
  epicycl: ["planetary"],
  reduc: ["ratio", "slow"],
  revers: ["opposite", "reverse"],
  straight: ["straight line", "straight-line"],
  clutch: ["ratchet", "one way"],
  "one-way": ["ratchet", "one way"],
  force: ["torque", "toggle", "lever"],
  leverage: ["lever", "force", "mechanical advantage"],
  ellipse: ["ellips", "oval"],
  // knots & outdoors
  rope: ["knot", "hitch", "line", "cord"],
  tie: ["knot", "hitch", "lashing"],
  tarp: ["taut", "ridgeline", "guy"],
  tent: ["guy", "taut", "stake"],
  campfire: ["fire"],
  compass: ["north", "direction"],
  navigat: ["north", "direction"],
  // units
  convert: ["unit"],
  metric: ["metre", "meter", "kilogram", "newton", "celsius"],
  imperial: ["inch", "foot", "pound", "fahrenheit"],
  weight: ["mass", "force"],
  heat: ["temperature"],
};

const WEIGHT: Record<string, number> = {
  title: 10,
  aka: 7,
  use: 5,
  tag: 5,
  motion: 4,
  family: 4,
  kind: 4,
  unit: 4,
  category: 3,
  key: 2,
  summary: 2,
  body: 1,
};
const FIELD: Record<string, string> = {
  title: "title",
  name: "title",
  aka: "aka",
  alias: "aka",
  use: "use",
  uses: "use",
  tag: "tag",
  tags: "tag",
  category: "category",
  cat: "category",
  in: "category",
  motion: "motion",
  family: "family",
  type: "kind",
  kind: "kind",
  unit: "unit",
};

export type Token = { field: string | null; re: RegExp; word: boolean };
export type Result = { doc: SearchDoc; score: number; label: string; kind: string };
export type RunResult = { toks?: Token[]; results: Result[]; corrected?: string; error?: string };

function termRe(val: string): Omit<Token, "field"> {
  const alts = new Set([val]);
  let stem = val.replace(/(ings?|es|s)$/, "");
  if (stem.length >= 3) alts.add(stem);
  else stem = val;
  if (val.length >= 3) {
    for (const [k, v] of Object.entries(SYN))
      if (k.startsWith(stem) || val.startsWith(k)) v.forEach((x) => alts.add(x));
  }
  const src = [...alts]
    .sort((a, b) => b.length - a.length)
    .map((a) => escRe(a).replace(/[\s-]+/g, "[\\s-]+"))
    .join("|");
  return { re: new RegExp(`(?:^|[^\\p{L}\\p{N}])(${src})`, "iu"), word: true };
}

export function parse(q: string): Token[] | { error: string } | null {
  q = q.trim();
  if (!q) return null;
  const raw = q.match(/^\/(.+)\/([gimsuy]*)$/);
  if (raw) {
    try {
      const flags = raw[2].replace("g", "") + (raw[2].includes("i") ? "" : "i");
      return [{ field: null, re: new RegExp(raw[1], flags), word: false }];
    } catch {
      return { error: "Invalid regular expression" };
    }
  }
  const toks: Token[] = [];
  const rx = /([a-z]+):("[^"]*"?|\S+)|"([^"]*)"?|(\S+)/gi;
  let t: RegExpExecArray | null;
  while ((t = rx.exec(q))) {
    let field: string | null = null;
    let val: string;
    if (t[1] && FIELD[t[1].toLowerCase()]) {
      field = FIELD[t[1].toLowerCase()];
      val = t[2].replace(/"/g, "");
    } else val = t[3] ?? t[4] ?? `${t[1]} ${t[2]}`;
    val = val
      .toLowerCase()
      .replace(/[^\p{L}\p{N}&'\- ]/gu, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (val) toks.push({ field, ...termRe(val) });
  }
  return toks.length ? toks : null;
}

function score(doc: SearchDoc, toks: Token[]) {
  let total = 0;
  for (const tok of toks) {
    let best = 0;
    for (const [f, vals] of Object.entries(doc.fields)) {
      if (tok.field && tok.field !== f) continue;
      const w = WEIGHT[f] ?? 1;
      if (w > best && vals.some((v) => tok.re.test(v))) best = w;
    }
    if (!best) return 0;
    total += best;
  }
  return total;
}

function dist(a: string, b: string, max: number) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  let pp: number[] | null = null;
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (pp && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
        cur[j] = Math.min(cur[j], pp[j - 2] + 1);
    }
    pp = prev;
    prev = cur;
  }
  return prev[b.length];
}

export function createSearch(docs: SearchDoc[]) {
  const vocab = [
    ...new Set(
      docs
        .flatMap((d) => Object.values(d.fields).flat())
        .flatMap((s) => s.toLowerCase().split(/[^\p{L}]+/u))
        .filter((w) => w.length >= 4),
    ),
  ];

  /** Replace words that match nothing with the closest catalog word. */
  function correct(q: string): string | null {
    let changed = false;
    const out = q.replace(/(?<!\p{L})\p{L}{4,}(?![\p{L}:])/gu, (w) => {
      const lw = w.toLowerCase();
      if (vocab.some((v) => v.startsWith(lw))) return w;
      const max = lw.length >= 7 ? 2 : 1;
      let best: string | null = null;
      let bd = max + 1;
      for (const v of vocab) {
        const d = dist(lw, v.slice(0, Math.max(lw.length, Math.min(v.length, lw.length + 1))), max);
        if (d < bd) {
          bd = d;
          best = v;
        }
      }
      if (best) {
        changed = true;
        return best;
      }
      return w;
    });
    return changed ? out : null;
  }

  function run(q: string, fuzzy = true): RunResult | null {
    const toks = parse(q);
    if (!toks) return null;
    if ("error" in toks) return { error: toks.error, results: [] };
    if (fuzzy && !q.trim().startsWith("/")) {
      const first = run(q, false)!;
      if (first.results.length) return first;
      const fixed = correct(q);
      if (fixed) {
        const r = run(fixed, false)!;
        if (r.results.length) return { ...r, corrected: fixed };
      }
      return first;
    }
    const lq = q.trim().toLowerCase();
    const results: Result[] = [];
    for (const doc of docs) {
      let s = score(doc, toks);
      if (!s) continue;
      if (doc.title.toLowerCase().startsWith(lq)) s += 25;
      else if (doc.aka.some((a) => a.toLowerCase().startsWith(lq))) s += 15;
      let label = doc.title;
      let kind = "title";
      let hits = -1;
      for (const f of ["title", "aka", "use"]) {
        for (const v of doc.fields[f] ?? []) {
          const h = toks.filter((tk) => (!tk.field || tk.field === f) && tk.re.test(v)).length;
          if (h > hits) {
            hits = h;
            label = v;
            kind = f;
          }
        }
      }
      results.push({ doc, score: s, label, kind });
    }
    results.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title));
    return { toks, results };
  }

  return { run, docs };
}

/** Character ranges in `str` matched by the query terms (for highlighting). */
export function ranges(str: string, toks: Token[] = []): [number, number][] {
  const out: [number, number][] = [];
  for (const tk of toks) {
    const g = new RegExp(tk.re.source, tk.re.flags.includes("g") ? tk.re.flags : tk.re.flags + "g");
    let m: RegExpExecArray | null;
    while ((m = g.exec(str))) {
      if (!m[0].length) {
        g.lastIndex++;
        continue;
      }
      const s = tk.word ? m.index + m[0].length - m[1].length : m.index;
      out.push([s, m.index + m[0].length]);
    }
  }
  out.sort((a, b) => a[0] - b[0]);
  const merged: [number, number][] = [];
  for (const r of out) {
    const l = merged[merged.length - 1];
    if (l && r[0] <= l[1]) l[1] = Math.max(l[1], r[1]);
    else merged.push(r);
  }
  return merged;
}

/** Group results by category, keeping rank order within each group. */
export function groupByCategory(results: Result[]) {
  const groups = new Map<string, { title: string; items: Result[] }>();
  for (const r of results) {
    const g = groups.get(r.doc.category) ?? { title: r.doc.categoryTitle, items: [] };
    g.items.push(r);
    groups.set(r.doc.category, g);
  }
  return [...groups.entries()].map(([id, g]) => ({ id, ...g }));
}

/** Stable-sort results so the given category comes first (the section the reader is in). */
export function preferCategory(results: Result[], category: string | null | undefined) {
  if (!category) return results;
  const mine = results.filter((r) => r.doc.category === category);
  return mine.length ? [...mine, ...results.filter((r) => r.doc.category !== category)] : results;
}
