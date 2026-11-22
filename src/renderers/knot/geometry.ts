// Shared knot geometry helpers. Paths use absolute M/L/C commands with "x y" pairs.
import type { Seg } from "./types";

/** Map every "x y" pair in a path through f. */
export function xf(d: string, f: (x: number, y: number) => [number, number]): string {
  return d.replace(/(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g, (_, a, b) =>
    f(+a, +b)
      .map((n) => +n.toFixed(1))
      .join(" "),
  );
}

export const mapSegs = (segs: Seg[], f: (x: number, y: number) => [number, number]): Seg[] =>
  segs.map((s) => ({ ...s, d: xf(s.d, f) }));

/**
 * Clove hitch on a vertical post (x 140–180), front view.
 * Standing part enters left at y=88; the end exits right at y=142, under the crossing turn.
 */
export const CLOVE: Seg[] = [
  { d: "M 12 88 L 176 88 C 190 88 192 72 182 68" },
  { d: "M 182 68 L 142 56 C 130 54 128 66 138 68", back: true },
  { d: "M 138 68 C 144 66 148 72 150 78 L 172 150 C 175 160 188 160 184 150", z: 9 },
  { d: "M 184 150 L 142 134 C 130 130 128 142 138 142", back: true },
  { d: "M 138 142 L 300 142", z: 5 },
];
