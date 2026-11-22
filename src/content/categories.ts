import type { CategoryId } from "./schema";

export type RendererId = "mechanism" | "knot" | "units" | "article";

export type Category = {
  id: CategoryId;
  title: string;
  /** Short label for nav and stamps. */
  short: string;
  blurb: string;
  order: number;
  /** Fields on the entry that drive index-page filters. */
  facets: { field: string; label: string }[];
  renderer: RendererId;
};

// Adding a category = an entry here + a content folder (+ a renderer, or reuse one).
export const CATEGORIES: Category[] = [
  {
    id: "mechanisms",
    title: "Mechanisms",
    short: "Mech",
    blurb: "How one motion becomes another. Gears, linkages, cams, belts.",
    order: 1,
    facets: [
      { field: "motion", label: "Motion" },
      { field: "family", label: "Family" },
    ],
    renderer: "mechanism",
  },
  {
    id: "knots",
    title: "Knots & Lashings",
    short: "Knots",
    blurb: "Tie it, load it, untie it. Hitches, loops, bends and lashings.",
    order: 2,
    facets: [{ field: "kind", label: "Type" }],
    renderer: "knot",
  },
  {
    id: "units",
    title: "Units & Measures",
    short: "Units",
    blurb: "Conversions and the rules of thumb that get you close enough.",
    order: 3,
    facets: [],
    renderer: "units",
  },
  {
    id: "fieldcraft",
    title: "Fieldcraft",
    short: "Field",
    blurb: "Outdoor basics. Fire, direction, leaving the place as you found it.",
    order: 4,
    facets: [{ field: "difficulty", label: "Difficulty" }],
    renderer: "article",
  },
];

export const categoryById = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  CategoryId,
  Category
>;
