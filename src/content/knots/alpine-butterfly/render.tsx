import type { KnotRender } from "@/renderers/knot/types";
import { Pull } from "@/renderers/knot/parts";

// Flat on the bench, finished shape from the twist method. Standing parts leave left and right
// along the bottom; they cross at C1 (≈160,172). Above, the strands cross again at C2 (≈162,97).
// The upper eye was folded down in front (over the strands near C2), through the lower eye,
// and out behind the C1 crossing to hang below as the loop.
const render: KnotRender = {
  segs: [
    // 0-1: left standing part, over the left loop leg, then over the right part at C1
    { d: "M 10 200 C 70 200 120 192 150 178", z: 6 },
    { d: "M 150 178 C 170 168 200 152 200 122", z: 6 },
    // 2: up and left, under the right loop leg and under the other strand at C2
    { d: "M 200 122 C 186 104 166 100 152 90", z: 2 },
    // 3: a tight turn (the folded-down eye)...
    { d: "M 152 90 C 148 78 140 72 140 86", z: 3 },
    // 4-5: ...down in front, then behind both standing parts
    { d: "M 140 86 L 140 150", z: 7 },
    { d: "M 140 150 L 140 192", z: 0 },
    // 6: the loop
    { d: "M 140 192 C 140 236 180 236 180 192", z: 3 },
    // 7-8: up behind both standing parts, then in front
    { d: "M 180 192 L 180 150", z: 0 },
    { d: "M 180 150 L 180 86", z: 7 },
    // 9: the other turn of the folded eye
    { d: "M 180 86 C 180 72 172 78 168 90", z: 3 },
    // 10: down and left over C2
    { d: "M 168 90 C 160 102 130 112 115 135", z: 5 },
    // 11-12: around to C1, under the left part, out to the right
    { d: "M 115 135 C 110 150 128 162 148 168", z: 5 },
    { d: "M 148 168 C 180 180 240 200 310 200", z: 5 },
  ],
  steps: [
    { show: 4 },
    { show: 6 },
    { show: 10 },
    {
      show: 13,
      extra: (
        <g>
          <Pull d="M 40 214 L 10 214" />
          <Pull d="M 280 214 L 310 214" />
          <Pull d="M 196 222 L 196 238" />
        </g>
      ),
    },
  ],
};
export default render;
