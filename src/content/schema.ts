import { z } from "zod";

// Every entry in every category satisfies the base schema.
// Category schemas extend it; `Entry` is the discriminated union of all of them.
// Data only: no DOM, no React. Server code, the API and the MCP server import this.

const kebab = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "must be kebab-case");

export const CATEGORY_IDS = [
  "mechanisms",
  "knots",
  "units",
  "fieldcraft",
  "first-aid",
  "building",
  "garden",
  "home",
  "workshop",
] as const;
export const CategoryId = z.enum(CATEGORY_IDS);
export type CategoryId = z.infer<typeof CategoryId>;

const Step = z.object({ caption: z.string().min(1) });
/** A compare-at-a-glance row: a type or term and when/why you'd use it. */
const RefRow = z.object({ term: z.string().min(1), detail: z.string().min(1) });

const base = {
  id: kebab,
  title: z.string().min(1),
  aka: z.array(z.string()).optional(),
  summary: z.string().min(1),
  key: z.string().optional(),
  body: z.array(z.string()).optional(),
  uses: z.array(z.string()).optional(),
  tags: z.array(kebab).optional(),
  related: z.array(kebab).optional(),
  refs: z.record(z.string(), z.union([z.string(), z.number()])).optional(),
  sources: z
    .array(
      z.object({
        title: z.string(),
        url: z.string().url().optional(),
        note: z.string().optional(),
      }),
    )
    .optional(),
  status: z.enum(["draft", "reviewed"]),
  order: z.number().optional(),
};

export const MOTION = {
  "rot-rot": { label: "Rotation → Rotation", from: "Rotation", to: "Rotation" },
  "rot-lin": { label: "Rotation → Back & forth", from: "Rotation", to: "Back & forth" },
  "rot-osc": { label: "Rotation → Swing", from: "Rotation", to: "Swing" },
  "rot-int": { label: "Rotation → Stop & go", from: "Rotation", to: "Stop & go" },
  "osc-int": { label: "Swing → Stop & go", from: "Swing", to: "Stop & go" },
  "osc-lin": { label: "Swing → Straight line", from: "Swing", to: "Straight line" },
  "lin-lin": { label: "Back & forth → Back & forth", from: "Back & forth", to: "Back & forth" },
  "lin-rot": { label: "Back & forth → Rotation", from: "Back & forth", to: "Rotation" },
  "osc-rot": { label: "Swing → Rotation", from: "Swing", to: "Rotation" },
} as const;

export const FAMILY = {
  gears: "Gears",
  linkages: "Linkages",
  cams: "Cams",
  belts: "Belts, ropes & chains",
  screws: "Screws & worms",
  indexing: "Stops & indexing",
} as const;

const keys = <T extends object>(o: T) =>
  Object.keys(o) as [keyof T & string, ...(keyof T & string)[]];

export const MechanismEntry = z.object({
  ...base,
  category: z.literal("mechanisms"),
  motion: z.enum(keys(MOTION)),
  family: z.enum(keys(FAMILY)),
  outLabel: z.string(),
});

export const KNOT_KINDS = ["knot", "hitch", "bend", "loop", "lashing"] as const;
export const KnotEntry = z.object({
  ...base,
  category: z.literal("knots"),
  kind: z.enum(KNOT_KINDS),
  strength: z.string().optional(),
  secure: z.string().optional(),
  untie: z.enum(["easy", "hard"]).optional(),
  steps: z.array(Step).min(1),
});

export const Unit = z.object({
  id: kebab,
  name: z.string(),
  symbol: z.string(),
  /** base = value × toBase + offset */
  toBase: z.number().positive(),
  offset: z.number().optional(),
});
export const UnitsEntry = z.object({
  ...base,
  category: z.literal("units"),
  quantity: z.string(),
  units: z.array(Unit).min(2),
  rulesOfThumb: z.array(z.string()).optional(),
});

export const FieldcraftEntry = z.object({
  ...base,
  category: z.literal("fieldcraft"),
  difficulty: z.enum(["easy", "moderate", "hard"]),
  gear: z.array(z.string()).optional(),
  steps: z.array(Step).optional(),
  safety: z.array(z.string()).optional(),
});

export const FirstAidEntry = z.object({
  ...base,
  category: z.literal("first-aid"),
  gear: z.array(z.string()).optional(),
  steps: z.array(Step).min(1),
  /** When to call emergency services or get medical care. */
  getHelp: z.array(z.string()).min(1),
});

export const BUILDING_KINDS = ["fastener", "framing", "material", "technique"] as const;
export const BuildingEntry = z.object({
  ...base,
  category: z.literal("building"),
  kind: z.enum(BUILDING_KINDS),
  difficulty: z.enum(["easy", "moderate", "hard"]).optional(),
  /** Types or terms compared at a glance. */
  reference: z.array(RefRow).optional(),
  gear: z.array(z.string()).optional(),
  steps: z.array(Step).optional(),
  safety: z.array(z.string()).optional(),
});

export const GARDEN_KINDS = ["soil", "planting", "care", "climate", "pests"] as const;
export const GardenEntry = z.object({
  ...base,
  category: z.literal("garden"),
  kind: z.enum(GARDEN_KINDS),
  /** When in the year this applies, in plain words. */
  season: z.string().optional(),
  reference: z.array(RefRow).optional(),
  gear: z.array(z.string()).optional(),
  steps: z.array(Step).optional(),
  safety: z.array(z.string()).optional(),
});

export const HOME_KINDS = ["electrical", "plumbing", "repair"] as const;
export const HomeEntry = z.object({
  ...base,
  category: z.literal("home"),
  kind: z.enum(HOME_KINDS),
  difficulty: z.enum(["easy", "moderate", "hard"]).optional(),
  reference: z.array(RefRow).optional(),
  gear: z.array(z.string()).optional(),
  steps: z.array(Step).optional(),
  safety: z.array(z.string()).optional(),
});

export const WORKSHOP_KINDS = ["joinery", "electronics", "finishing"] as const;
export const WorkshopEntry = z.object({
  ...base,
  category: z.literal("workshop"),
  kind: z.enum(WORKSHOP_KINDS),
  difficulty: z.enum(["easy", "moderate", "hard"]).optional(),
  reference: z.array(RefRow).optional(),
  gear: z.array(z.string()).optional(),
  steps: z.array(Step).optional(),
  safety: z.array(z.string()).optional(),
});

export const Entry = z.discriminatedUnion("category", [
  MechanismEntry,
  KnotEntry,
  UnitsEntry,
  FieldcraftEntry,
  FirstAidEntry,
  BuildingEntry,
  GardenEntry,
  HomeEntry,
  WorkshopEntry,
]);

export type Entry = z.infer<typeof Entry>;
export type MechanismEntry = z.infer<typeof MechanismEntry>;
export type KnotEntry = z.infer<typeof KnotEntry>;
export type UnitsEntry = z.infer<typeof UnitsEntry>;
export type FieldcraftEntry = z.infer<typeof FieldcraftEntry>;
export type FirstAidEntry = z.infer<typeof FirstAidEntry>;
export type BuildingEntry = z.infer<typeof BuildingEntry>;
export type GardenEntry = z.infer<typeof GardenEntry>;
export type HomeEntry = z.infer<typeof HomeEntry>;
export type WorkshopEntry = z.infer<typeof WorkshopEntry>;
export type Unit = z.infer<typeof Unit>;
export type EntryOf<C extends CategoryId> = Extract<Entry, { category: C }>;

/** Validate an entry against the schema. Throws with the entry id in the message. */
export function defineEntry<const E extends z.input<typeof Entry>>(e: E): E & Entry {
  const r = Entry.safeParse(e);
  if (!r.success) {
    const id = (e as { id?: string }).id ?? "(no id)";
    throw new Error(`Invalid entry "${id}":\n${z.prettifyError(r.error)}`);
  }
  return r.data as E & Entry;
}
