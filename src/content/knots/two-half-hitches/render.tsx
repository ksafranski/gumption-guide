import type { KnotRender, Seg } from "@/renderers/knot/types";
import { CLOVE, mapSegs } from "@/renderers/knot/geometry";
import { Post, Pull } from "@/renderers/knot/parts";

// Front view. Post on the left; the standing part runs off to the right at y=100.
// The two half hitches are a clove hitch tied around the standing part itself.
const turn: Seg[] = [
  // 0: standing part, across the front of the post
  { d: "M 318 100 L 48 100 C 38 100 32 106 34 112", z: 0 },
  // 1: around behind the post
  { d: "M 34 112 L 74 120", back: true },
  // 2: out and along under the standing part
  { d: "M 74 120 C 120 126 178.8 190 178.8 150", z: 1 },
];

const hitches = mapSegs(CLOVE, (x, y) => [150 + (y - 56) * 0.9, 100 - (x - 160) * 0.9]).map(
  (s, i): Seg => {
    const z = s.back ? s.z : (s.z ?? i) + 10;
    if (i === 0) return { ...s, z, d: s.d.replace(/^M [\d.-]+ [\d.-]+ L/, "M 178.8 150 L") };
    return { ...s, z };
  },
);

const segs = [...turn, ...hitches];

const render: KnotRender = {
  base: <Post x={36} w={36} />,
  segs,
  steps: [
    { show: 3 },
    { show: 6 },
    { show: segs.length },
    { show: segs.length, extra: <Pull d="M 270 86 L 312 86" /> },
  ],
};
export default render;
