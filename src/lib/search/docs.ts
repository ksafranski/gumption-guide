// Builds the serializable search index from entries. Pure data in, pure data out.
import { categoryById } from "@/content/categories";
import { FAMILY, MOTION, type Entry } from "@/content/schema";

export type SearchDoc = {
  id: string;
  category: string;
  categoryTitle: string;
  title: string;
  aka: string[];
  summary: string;
  href: string;
  draft: boolean;
  fields: Record<string, string[]>;
};

function facets(e: Entry): Record<string, string[]> {
  switch (e.category) {
    case "mechanisms":
      return { motion: [MOTION[e.motion].label], family: [FAMILY[e.family]] };
    case "knots":
      return { kind: [e.kind] };
    case "units":
      return { kind: [e.quantity], unit: e.units.flatMap((u) => [u.name, u.symbol]) };
    case "fieldcraft":
      return { kind: [e.difficulty] };
  }
}

export function buildSearchDocs(entries: Entry[]): SearchDoc[] {
  return entries.map((e) => {
    const cat = categoryById[e.category];
    const steps = "steps" in e && e.steps ? e.steps.map((s) => s.caption) : [];
    return {
      id: e.id,
      category: e.category,
      categoryTitle: cat.title,
      title: e.title,
      aka: e.aka ?? [],
      summary: e.summary,
      href: `/${e.category}/${e.id}`,
      draft: e.status === "draft",
      fields: {
        title: [e.title],
        aka: e.aka ?? [],
        use: e.uses ?? [],
        tag: (e.tags ?? []).flatMap((t) => [t, t.replace(/-/g, " ")]),
        category: [e.category, cat.title],
        ...facets(e),
        key: e.key ? [e.key] : [],
        summary: [e.summary],
        body: [...(e.body ?? []), ...steps],
      },
    };
  });
}
