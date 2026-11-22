import type { KnotRender, Seg } from "@/renderers/knot/types";
import { CLOVE, mapSegs } from "@/renderers/knot/geometry";
import { Post } from "@/renderers/knot/parts";

// Front view: two upright poles side by side (x 112–152 and 168–208).
const base = (
  <g>
    <Post x={112} w={40} />
    <Post x={168} w={40} />
  </g>
);

// 1. Clove hitch on the left pole, below the wraps; its end runs up the left side.
const start = mapSegs(CLOVE.slice(0, 4), (x, y) => [
  x < 60 ? 60 : 112 + (x - 140),
  170 + (y - 56) * 0.52,
]);
start.push({ d: "M 110 214.7 C 98 212 98 160 110 148", z: 2 });

// 2. Wraps around both poles, working upward.
const wraps: Seg[] = [];
for (let i = 0; i < 5; i++) {
  const y = 148 - 12 * i;
  wraps.push(
    { d: `M 110 ${y} L 210 ${y - 4}`, z: 3 },
    { d: `M 210 ${y - 4} L 110 ${y - 12}`, back: true },
  );
}

// 3. Frapping: two turns down the gap between the poles, around the wraps.
const frap: Seg[] = [
  { d: "M 110 88 C 120 80 150 76 156 84", z: 6 },
  { d: "M 156 84 L 156 156", z: 8 },
  { d: "M 156 156 L 164 84", back: true },
  { d: "M 164 84 L 164 156", z: 8 },
  { d: "M 164 156 L 160 44", back: true },
];

// 4. Clove hitch on the right pole, above the wraps.
const finish = mapSegs(CLOVE, (x, y) => [168 + (x - 140), 20 + (y - 56) * 0.52]).map((s, i) => {
  const z = s.back ? s.z : (s.z ?? i) + 20;
  if (i === 0)
    return {
      ...s,
      z,
      d: s.d.replace(/^M [\d.-]+ [\d.-]+ L/, "M 160 44 C 162 38 166 36.6 172 36.6 L"),
    };
  return { ...s, z };
});

const segs = [...start, ...wraps, ...frap, ...finish];
const a = start.length;
const b = a + wraps.length;
const c = b + frap.length;

const render: KnotRender = {
  base,
  segs,
  steps: [{ show: a }, { show: b }, { show: c }, { show: segs.length }],
};
export default render;
