import { describe, expect, it } from "vitest";
import { getEntry } from "@/lib/content";
import type { UnitsEntry } from "@/content/schema";
import { convert } from "./units";

const u = (entry: string, id: string) =>
  (getEntry(entry) as UnitsEntry).units.find((x) => x.id === id)!;

describe("convert", () => {
  it("converts by factor", () => {
    expect(convert(1, u("length", "in"), u("length", "mm"))).toBeCloseTo(25.4, 10);
    expect(convert(1, u("length", "mi"), u("length", "ft"))).toBeCloseTo(5280, 6);
    expect(convert(1, u("force", "kgf"), u("force", "lbf"))).toBeCloseTo(2.2046, 3);
  });
  it("converts with an offset", () => {
    const C = u("temperature", "c"),
      F = u("temperature", "f"),
      K = u("temperature", "k");
    expect(convert(100, C, F)).toBeCloseTo(212, 9);
    expect(convert(-40, F, C)).toBeCloseTo(-40, 9);
    expect(convert(0, C, K)).toBeCloseTo(273.15, 9);
    expect(convert(32, F, K)).toBeCloseTo(273.15, 9);
  });
});
