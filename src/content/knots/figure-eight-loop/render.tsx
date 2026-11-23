import type { KnotRender, Seg } from "@/renderers/knot/types";
import { firstPoint, lastPoint, mapSegs } from "@/renderers/knot/geometry";
import { Pull, Ring } from "@/renderers/knot/parts";
import eight from "../figure-eight-knot/render";

// The figure-eight knot, shrunk to make room, then the loop through a ring, then the end
// retracing the eight: a parallel strand on the left of the first pass, same over/under.
const first = mapSegs(eight.segs, (x, y) => [x * 0.78 + 8, y * 0.72 + 2]);

/** Shift a path sideways by w: start points along the start normal, end points along the end normal. */
function offset(d: string, w: number): string {
  const nums = (d.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
  const pts: [number, number][] = [];
  for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
  const n = (a: [number, number], b: [number, number]): [number, number] => {
    const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    return [((b[1] - a[1]) / l) * w, (-(b[0] - a[0]) / l) * w];
  };
  const last = pts.length - 1;
  const n0 = n(pts[0], pts[1]);
  const n1 = n(pts[last - 1], pts[last]);
  // Points in the first half of the path follow the start normal, the rest the end normal.
  const moved = pts.map(([x, y], i) => {
    const k = i <= last / 2 ? n0 : n1;
    return [+(x + k[0]).toFixed(1), +(y + k[1]).toFixed(1)];
  });
  let j = 0;
  return d.replace(/(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g, () => moved[j++].join(" "));
}

const second: Seg[] = first.map((s, i) => {
  const d = offset(s.d, -10.5);
  const prev = i > 0 ? offset(first[i - 1].d, -10.5) : "";
  const [ax, ay] = prev ? lastPoint(prev) : [0, 0];
  const [bx, by] = firstPoint(d);
  return { ...s, d, start: i === 0 || Math.hypot(ax - bx, ay - by) > 0.5 };
});

const [ex, ey] = lastPoint(first.at(-1)!.d);
const [fx, fy] = lastPoint(second.at(-1)!.d);
const loop: Seg = {
  d: `M ${ex} ${ey} C ${ex + 10} 196 250 214 262 196 C 274 176 ${fx + 40} 166 ${fx} ${fy}`,
  z: 9,
};

const segs: Seg[] = [...first, loop, ...second];

const render: KnotRender = {
  base: <Ring cx={258} cy={196} r={16} />,
  segs,
  steps: [
    { show: first.length },
    { show: first.length + 1 },
    { show: segs.length },
    { show: segs.length, extra: <Pull d="M 30 124 L 4 124" /> },
  ],
};
export default render;
