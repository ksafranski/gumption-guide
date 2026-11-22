// Renders every entry as compact plain text for the "ask" prompt. Pure: no React, no I/O.
// The output must be byte-stable for a given set of entries, because it sits in the
// prompt-cached prefix; any change to it invalidates the cache.
import { categoryById } from "@/content/categories";
import { FAMILY, MOTION, type Entry } from "@/content/schema";

// Fields that are routing, bookkeeping or rendered elsewhere, not knowledge.
const SKIP = new Set(["id", "category", "title", "related", "refs", "sources", "status", "order"]);

const label = (k: string) => k.replace(/([A-Z])/g, " $1").toLowerCase();

function value(k: string, v: unknown): string | null {
  if (v == null) return null;
  if (k === "motion") return MOTION[v as keyof typeof MOTION]?.label ?? String(v);
  if (k === "family") return FAMILY[v as keyof typeof FAMILY] ?? String(v);
  if (typeof v !== "object") return String(v);
  if (!Array.isArray(v)) return JSON.stringify(v);
  if (!v.length) return null;
  // Short plain lists (aka, tags) read fine inline and cost fewer tokens.
  if (v.every((x) => typeof x === "string" && x.length <= 40)) return v.join(", ");
  const lines = v.map((item, i) => {
    if (typeof item !== "object" || item === null) return `- ${item}`;
    const o = item as Record<string, unknown>;
    if ("caption" in o) return `${i + 1}. ${o.caption}`;
    if ("term" in o) return `- ${o.term}: ${o.detail}`;
    if ("symbol" in o) {
      const off = o.offset ? ` + ${o.offset}` : "";
      return `- ${o.name} (${o.symbol}) = ${o.toBase} base${off}`;
    }
    return `- ${JSON.stringify(o)}`;
  });
  return "\n" + lines.join("\n");
}

/** `article` is the entry's long-form MDX body as plain text, if it has one. */
export function entryText(e: Entry, article?: string): string {
  const head = `<entry id="${e.id}" section="${categoryById[e.category].title}" title="${e.title}"${
    e.status === "draft" ? ' unreviewed="true"' : ""
  }>`;
  const body = Object.entries(e)
    .filter(([k]) => !SKIP.has(k))
    .map(([k, v]) => {
      const s = value(k, v);
      return s == null ? null : `${label(k)}:${s.startsWith("\n") ? "" : " "}${s}`;
    })
    .filter(Boolean);
  if (article) body.push(`article:\n${article}`);
  if (e.related?.length) body.push(`see also: ${e.related.join(", ")}`);
  return [head, ...body, "</entry>"].join("\n");
}

/** All entries, ordered by section then id so the text never reshuffles between builds. */
export function buildCorpus(entries: Entry[], articles: Record<string, string> = {}): string {
  return [...entries]
    .sort((a, b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id))
    .map((e) => entryText(e, articles[e.id]))
    .join("\n\n");
}
