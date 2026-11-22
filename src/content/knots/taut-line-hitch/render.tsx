import type { KnotRender, Seg } from "@/renderers/knot/types";
import { CLOVE, mapSegs } from "@/renderers/knot/geometry";
import { Post, Pull } from "@/renderers/knot/parts";

// Front view. Stake on the left; the standing part runs off to the right at y=100.
// A rolling hitch on the standing part: a clove with one extra turn on the stake side.
const turn: Seg[] = [
  { d: "M 318 100 L 48 100 C 38 100 32 106 34 112", z: 0 },
  { d: "M 34 112 L 74 120", back: true },
  { d: "M 74 120 C 120 126 194.8 190 194.8 150", z: 1 },
];

const f =
  (dx: number) =>
  (x: number, y: number): [number, number] => [150 + (y - 56) * 0.9 + dx, 100 - (x - 160) * 0.9];
const raise = (s: Seg, i: number): Seg => (s.back ? s : { ...s, z: (s.z ?? i) + 10 });
const near = mapSegs(CLOVE.slice(0, 2), f(16)).map(raise);
near[0] = { ...near[0], d: near[0].d.replace(/^M [\d.-]+ [\d.-]+ L/, "M 194.8 150 L") };
const far = mapSegs(CLOVE.slice(1), f(0)).map((s, i) => raise(s, i + 1));

const hitch: Seg[] = [
  // first turn
  ...near,
  // second turn, one step closer to the stake
  { d: "M 176.8 119.8 C 172 108 170 90 168 84 C 166 76 162 76 160.8 80.2", z: 12 },
  far[0],
  // across the turns, and the outside hitch
  ...far.slice(1),
];

const segs = [...turn, ...hitch];

const render: KnotRender = {
  base: <Post x={36} w={36} />,
  segs,
  steps: [
    { show: 3 },
    { show: 7 },
    { show: segs.length },
    { show: segs.length, extra: <Pull d="M 270 86 L 312 86" /> },
  ],
};
export default render;
