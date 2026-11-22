import type { KnotRender } from "@/renderers/knot/types";
import { Post, Spar } from "@/renderers/knot/parts";

// Front view: upright behind, crosspiece in front.
const base = (
  <g>
    <Post x={140} w={40} />
    <Spar y={100} h={40} />
  </g>
);

const wrap = (i: number) => {
  const x = 126 + i * 7;
  return `M ${x} 146 L ${x + 2} 94`;
};

const render: KnotRender = {
  base,
  segs: [
    // 0: clove hitch on the upright below the crosspiece
    {
      d: "M 40 176 L 176 176 C 188 176 188 162 178 160 L 142 162 C 134 164 140 172 150 168 L 190 166 L 210 172",
      z: 1,
    },
    // 1-4: wraps (shown as bands over the crosspiece, left and right of the upright)
    { d: `${wrap(0)} M 186 94 L 188 146` },
    { d: `${wrap(1)} M 193 94 L 195 146` },
    { d: `${wrap(2)} M 200 94 L 202 146` },
    // 4: frapping turns between the poles
    { d: "M 120 146 C 140 154 180 154 204 146 M 118 94 C 140 86 180 86 206 94", z: 9 },
    // 5: finish clove hitch on the crosspiece
    { d: "M 206 94 C 220 88 236 98 232 112 C 228 126 240 140 252 132 L 300 120", z: 10 },
  ],
  steps: [{ show: 1 }, { show: 4 }, { show: 5 }, { show: 6 }],
};
export default render;
