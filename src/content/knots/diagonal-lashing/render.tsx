import type { KnotRender, Seg } from "@/renderers/knot/types";
import { CLOVE, mapSegs } from "@/renderers/knot/geometry";
import { Post, Spar } from "@/renderers/knot/parts";

// Front view: upright (x 145–175) behind, crosspiece (y 95–125) in front, crossing at (160, 110).
// Front strands only; each wrap's return runs behind the poles.
const base = (
  <g>
    <Post x={145} w={30} />
    <Spar y={95} h={30} />
  </g>
);

const C = [160, 110] as const;
const r = (n: number) => +n.toFixed(1);
const pt = (u: number, v: number, du: [number, number], dv: [number, number]) =>
  `${r(C[0] + u * du[0] + v * dv[0])} ${r(C[1] + u * du[1] + v * dv[1])}`;
const DOWN: [number, number] = [0.707, 0.707]; // "\" direction
const UP: [number, number] = [0.707, -0.707]; // "/" direction

// 1. Timber hitch along "/": the end twists around the turn near the bottom-left corner.
const hitch: Seg[] = [];
{
  let side = 1;
  let prev = pt(-50, 14, UP, DOWN);
  for (let i = 0; i < 4; i++) {
    const t = -46 + i * 7;
    const next = pt(t + 3.5, -side * 12, UP, DOWN);
    hitch.push({
      d: `M ${prev} C ${pt(t, side * 12, UP, DOWN)} ${pt(t + 3.5, -side * 14, UP, DOWN)} ${next}`,
      z: side > 0 ? 9 : 0,
      start: i === 0,
    });
    prev = next;
    side = -side;
  }
  // around behind the poles, out at the bottom-left, and up the front as the turn
  hitch.push({ d: `M ${prev} C 40 200 90 170 ${pt(-56, 0, UP, DOWN)}`, back: true });
  hitch.push({ d: `M ${pt(-56, 0, UP, DOWN)} L ${pt(56, 0, UP, DOWN)}`, z: 2 });
}

// 2. Wraps: three along "\", then three along "/", returns behind.
const wraps: Seg[] = [];
let at = pt(56, 0, UP, DOWN);
for (const [dir, perp, z] of [
  [DOWN, UP, 3],
  [UP, DOWN, 5],
] as const) {
  for (let i = 0; i < 3; i++) {
    const o = (i - 1) * 11;
    const a = pt(-56, o, dir, perp);
    const b = pt(56, o, dir, perp);
    wraps.push({ d: `M ${at} L ${a}`, back: true });
    wraps.push({ d: `M ${a} L ${b}`, z });
    at = b;
  }
}

// 3. Frapping between the poles (same as the square lashing).
const frap: Seg[] = [
  { d: `M ${at} C 230 60 140 150 122 142`, back: true },
  { d: "M 122 142 C 110 142 100 150 108 152 L 214 152 C 224 152 226 146 218 144", z: 8 },
  { d: "M 218 144 L 106 74", back: true },
  { d: "M 106 74 C 98 72 100 68 108 68 L 216 68", z: 8 },
];

// 4. Clove hitch on the crosspiece, right of the wraps.
const finish = mapSegs(CLOVE, (x, y) => [228 + (y - 56) * 0.42, 95 + (x - 140) * 0.75]).map(
  (s, i) => {
    if (i === 0)
      return {
        ...s,
        d: s.d.replace(/^M [\d.-]+ [\d.-]+ L/, "M 216 68 C 230 68 241.4 60 241.4 70 L"),
      };
    if (i === 4) return { ...s, d: s.d.replace(/L [\d.-]+ [\d.-]+$/, "L 264.1 206") };
    return s;
  },
);

const segs = [
  ...hitch,
  ...wraps,
  ...frap,
  ...finish.map((s) => (s.back ? s : { ...s, z: (s.z ?? 0) + 20 })),
];
const a = hitch.length;
const b = a + wraps.length;
const c = b + frap.length;

const render: KnotRender = {
  base,
  segs,
  steps: [{ show: a }, { show: b }, { show: c }, { show: segs.length }],
};
export default render;
