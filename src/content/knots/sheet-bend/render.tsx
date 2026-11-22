import type { KnotRender } from "@/renderers/knot/types";
import { Pull } from "@/renderers/knot/parts";

// Flat on the bench. The bight (first rope) has both legs running off the bottom; its bend
// wraps the second rope, which comes in from the top, nips both legs, and tucks under itself.
// Same layout as the bowline: a sheet bend is a bowline with its loop cut.
const render: KnotRender = {
  segs: [
    // 0-5: the bight. First leg up from the bottom...
    { d: "M 98 240 C 100 210 102 190 104 170", z: 0 },
    { d: "M 104 170 C 110 156 128 150 140 140", z: 0 },
    { d: "M 140 140 C 146 120 150 100 156 70", z: 7 },
    // ...the bend...
    { d: "M 156 70 C 158 50 176 38 196 40 C 214 42 218 60 210 72", z: 2 },
    // ...and the second leg back down.
    { d: "M 210 72 C 204 86 190 104 172 116", z: 8 },
    { d: "M 172 116 C 168 140 164 190 162 240", z: 0 },
    // 6-7: second rope, in from the top through the bight
    { d: "M 190 0 L 190 118", z: 3, start: true },
    // around behind both legs
    {
      d: "M 190 118 C 190 142 172 150 152 150 C 130 150 118 132 118 112 C 118 92 134 80 152 80 C 166 80 178 84 186 88",
      z: 3,
    },
    // 8: tucked under itself, out beside the bight
    { d: "M 186 88 C 198 94 212 100 218 116 L 222 150", z: 6 },
  ],
  steps: [
    { show: 6 },
    { show: 7 },
    { show: 8 },
    {
      show: 9,
      extra: (
        <g>
          <Pull d="M 206 30 L 206 4" />
          <Pull d="M 130 222 L 130 238" />
        </g>
      ),
    },
  ],
};
export default render;
