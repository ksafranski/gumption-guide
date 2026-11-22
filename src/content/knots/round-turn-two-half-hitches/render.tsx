import type { KnotRender, Seg } from "@/renderers/knot/types";
import { CLOVE, mapSegs } from "@/renderers/knot/geometry";
import { Post, Pull } from "@/renderers/knot/parts";

// Front view. Post on the left; the standing part runs off to the right at y=100.
// Two full turns around the post, then two half hitches (a clove on the standing part).
const turn: Seg[] = [
  // 0: standing part, across the front of the post
  { d: "M 318 100 L 52 100 C 40 100 32 104 34 108", z: 0 },
  // 1: behind the post
  { d: "M 34 108 L 74 114", back: true },
  // 2: around and across the front again
  { d: "M 74 114 C 82 116 80 124 70 124 L 50 124 C 40 124 32 128 34 132", z: 1 },
  // 3: behind again
  { d: "M 34 132 L 74 138", back: true },
  // 4: out and along under the standing part
  { d: "M 74 138 C 120 146 178.8 196 178.8 150", z: 2 },
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
    { show: 5 },
    { show: 8 },
    { show: segs.length },
    { show: segs.length, extra: <Pull d="M 270 86 L 312 86" /> },
  ],
};
export default render;
