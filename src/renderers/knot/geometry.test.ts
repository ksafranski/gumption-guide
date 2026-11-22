import { describe, expect, it } from "vitest";
import bowline from "@/content/knots/bowline/render";
import clove from "@/content/knots/clove-hitch/render";
import squareLashing from "@/content/knots/square-lashing/render";
import timber from "@/content/knots/timber-hitch/render";
import truckers from "@/content/knots/truckers-hitch/render";
import overhand from "@/content/knots/overhand-knot/render";
import figureEight from "@/content/knots/figure-eight-knot/render";
import twoHalf from "@/content/knots/two-half-hitches/render";
import sheetBend from "@/content/knots/sheet-bend/render";
import roundTurn from "@/content/knots/round-turn-two-half-hitches/render";
import tautLine from "@/content/knots/taut-line-hitch/render";
import shearLashing from "@/content/knots/shear-lashing/render";
import { endOf, firstPoint, lastPoint, smoothJoints } from "./geometry";

const knots = {
  bowline,
  clove,
  squareLashing,
  timber,
  truckers,
  overhand,
  figureEight,
  twoHalf,
  sheetBend,
  roundTurn,
  tautLine,
  shearLashing,
};

describe("knot geometry", () => {
  it.each(Object.entries(knots))("%s: each segment starts where the last one ended", (_, k) => {
    for (let i = 1; i < k.segs.length; i++) {
      if (k.segs[i].start) continue;
      const [ax, ay] = lastPoint(k.segs[i - 1].d);
      const [bx, by] = firstPoint(k.segs[i].d);
      expect(Math.hypot(ax - bx, ay - by), `seg ${i - 1} -> ${i}`).toBeLessThan(0.5);
    }
  });

  it("smooths a kinked joint into a shared tangent", () => {
    const [a, b] = smoothJoints([
      { d: "M 0 0 C 10 0 20 0 30 0" },
      { d: "M 30 0 C 30 10 30 20 30 30" },
    ]);
    const tin = endOf(a.d).t;
    const m = b.d.match(/C ([\d.-]+) ([\d.-]+)/)!;
    const tout = [+m[1] - 30, +m[2]];
    const l = Math.hypot(tout[0], tout[1]);
    expect(tin[0] * (tout[0] / l) + tin[1] * (tout[1] / l)).toBeCloseTo(1, 2);
  });

  it("leaves hairpin turns alone", () => {
    const segs = [{ d: "M 0 0 C 10 0 20 0 30 0" }, { d: "M 30 0 C 20 0 10 0 0 0" }];
    expect(smoothJoints(segs).map((s) => s.d)).toEqual(segs.map((s) => s.d));
  });
});
