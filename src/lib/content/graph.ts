// Pure content-graph functions. No React, no DOM.
import type { CategoryId, Entry } from "@/content/schema";

export type Graph = {
  all: Entry[];
  byId: Map<string, Entry>;
  backlinks: Map<string, string[]>;
  byTag: Map<string, Entry[]>;
  warnings: string[];
};

/** Build the graph. Throws on duplicate ids or `related` ids that don't exist. */
export function buildGraph(entries: Entry[]): Graph {
  const errors: string[] = [];
  const warnings: string[] = [];
  const byId = new Map<string, Entry>();

  for (const e of entries) {
    if (byId.has(e.id))
      errors.push(`Duplicate id "${e.id}" (${byId.get(e.id)!.category} and ${e.category})`);
    else byId.set(e.id, e);
  }

  const backlinks = new Map<string, string[]>();
  for (const e of entries) {
    for (const r of e.related ?? []) {
      if (!byId.has(r)) errors.push(`"${e.id}" relates to missing id "${r}"`);
      else if (r === e.id) errors.push(`"${e.id}" relates to itself`);
      else backlinks.set(r, [...(backlinks.get(r) ?? []), e.id]);
    }
  }
  if (errors.length) throw new Error(`Content graph invalid:\n  ${errors.join("\n  ")}`);

  const byTag = new Map<string, Entry[]>();
  for (const e of entries) for (const t of e.tags ?? []) byTag.set(t, [...(byTag.get(t) ?? []), e]);

  for (const e of entries) {
    if (!e.related?.length && !backlinks.get(e.id)?.length) warnings.push(`orphan entry "${e.id}"`);
  }
  for (const [t, list] of byTag)
    if (list.length === 1) warnings.push(`single-use tag "${t}" (${list[0].id})`);

  return { all: entries, byId, backlinks, byTag, warnings };
}

const sortEntries = (a: Entry, b: Entry) =>
  (a.order ?? Infinity) - (b.order ?? Infinity) || a.title.localeCompare(b.title);

export const queries = (g: Graph) => ({
  getAllEntries: () => g.all,
  getEntry: (id: string) => g.byId.get(id),
  getByCategory: (cat: CategoryId) => g.all.filter((e) => e.category === cat).sort(sortEntries),
  getByTag: (tag: string) => [...(g.byTag.get(tag) ?? [])].sort(sortEntries),
  getAllTags: () => [...g.byTag.keys()].sort(),
  getBacklinks: (id: string) => (g.backlinks.get(id) ?? []).map((b) => g.byId.get(b)!),
  /** Explicit related, then backlinks, then tag neighbours ranked by shared tags. */
  getRelated(id: string, limit = 8): Entry[] {
    const e = g.byId.get(id);
    if (!e) return [];
    const out: string[] = [];
    const push = (x: string) => x !== id && !out.includes(x) && out.push(x);
    (e.related ?? []).forEach(push);
    (g.backlinks.get(id) ?? []).forEach(push);
    const shared = new Map<string, number>();
    for (const t of e.tags ?? [])
      for (const n of g.byTag.get(t) ?? []) shared.set(n.id, (shared.get(n.id) ?? 0) + 1);
    [...shared.entries()].sort((a, b) => b[1] - a[1]).forEach(([x]) => push(x));
    return out.slice(0, limit).map((x) => g.byId.get(x)!);
  },
});
