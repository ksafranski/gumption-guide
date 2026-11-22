// Human labels for facet values. Pure.
import { FAMILY, MOTION, type Entry } from "@/content/schema";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function facetValue(e: Entry, field: string): string | undefined {
  const v = (e as Record<string, unknown>)[field];
  return typeof v === "string" ? v : undefined;
}

export function facetLabel(field: string, value: string): string {
  if (field === "motion") return MOTION[value as keyof typeof MOTION]?.label ?? value;
  if (field === "family") return FAMILY[value as keyof typeof FAMILY] ?? value;
  return cap(value);
}

/** Short badges shown on an entry page. */
export function entryBadges(e: Entry): string[] {
  switch (e.category) {
    case "mechanisms":
      return [MOTION[e.motion].label, FAMILY[e.family]];
    case "knots":
      return [cap(e.kind), ...(e.untie ? [`Unties ${e.untie}`] : [])];
    case "units":
      return [cap(e.quantity)];
    case "fieldcraft":
      return [cap(e.difficulty)];
  }
}
