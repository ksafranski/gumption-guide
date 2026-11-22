import type { KnotRender } from "@/renderers/knot/types";
import { Pull } from "@/renderers/knot/parts";

// Flat on the bench. Standing part enters left; the loop rises to the right; the end
// comes up through the loop and leaves up and to the left.
const render: KnotRender = {
  segs: [
    // 0: standing part, over the descending side of the loop
    { d: "M 10 150 L 160 150", z: 5 },
    // 1: on to the right (under the end where it comes up), then curling up
    { d: "M 160 150 L 205 150 C 240 150 252 120 242 95", z: 0 },
    // 2: over the top of the loop
    { d: "M 242 95 C 232 66 170 60 150 78", z: 3 },
    // 3: down, over the end
    { d: "M 150 78 L 146 120", z: 6 },
    // 4: down under the standing part
    { d: "M 146 120 L 142 185", z: -1 },
    // 5: round the bottom
    { d: "M 142 185 C 140 215 190 220 192 185", z: 2 },
    // 6: up over the standing part, into the loop
    { d: "M 192 185 L 190 120", z: 7 },
    // 7: out under the side of the loop
    { d: "M 190 120 C 180 106 165 103 130 98 L 96 92", z: -2 },
  ],
  steps: [
    { show: 5 },
    { show: 8 },
    {
      show: 8,
      extra: (
        <g>
          <Pull d="M 40 170 L 10 170" />
          <Pull d="M 96 76 L 66 70" />
        </g>
      ),
    },
  ],
};
export default render;
