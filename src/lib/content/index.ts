// Content access for routes, API and (later) the MCP server. No React.
import { generated } from "@/content/_generated/entries";
import type { Entry } from "@/content/schema";
import { buildGraph, queries } from "./graph";

for (const g of generated) {
  if (g.entry.id !== g.folder || g.entry.category !== g.dir) {
    throw new Error(
      `Entry folder ${g.dir}/${g.folder} holds id "${g.entry.id}" in category "${g.entry.category}"`,
    );
  }
}

const graph = buildGraph(generated.map((g) => g.entry as Entry));
if (graph.warnings.length && process.env.NODE_ENV !== "test") {
  console.warn(`[content] ${graph.warnings.length} warning(s):\n  ${graph.warnings.join("\n  ")}`);
}

export const {
  getAllEntries,
  getEntry,
  getByCategory,
  getByTag,
  getAllTags,
  getBacklinks,
  getRelated,
} = queries(graph);

export { buildGraph, queries };
import { buildSearchDocs } from "@/lib/search/docs";

/** Serializable search index for the client. */
export const getSearchIndex = () => buildSearchDocs(getAllEntries());
