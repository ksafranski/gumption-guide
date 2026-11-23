import type { KnotRender } from "@/renderers/knot/types";
import { Pull } from "@/renderers/knot/parts";

// Flat on the bench. Rope A's bight opens left (legs y 96 / 144, bend at the right).
// Rope B's bight opens right; its bend wraps outside A's legs, its legs run inside A's bight.
// B's bend lies over both A legs and A's bend lies under both B legs: a reef, not a granny.
const render: KnotRender = {
  segs: [
    // 0-4: rope A
    { d: "M 10 96 L 140 96", z: 1 },
    { d: "M 140 96 L 190 96", z: 6 },
    { d: "M 190 96 C 236 96 236 144 190 144", z: 1 },
    { d: "M 190 144 L 140 144", z: 6 },
    { d: "M 140 144 L 10 144", z: 1 },
    // 5-9: rope B, from the right
    { d: "M 310 110 L 176 110", z: 7, start: true },
    { d: "M 176 110 C 160 110 156 82 140 82", z: 0 },
    { d: "M 140 82 C 96 82 96 158 140 158", z: 8 },
    { d: "M 140 158 C 156 158 160 130 176 130", z: 0 },
    { d: "M 176 130 L 310 130", z: 7 },
  ],
  steps: [
    { show: 5 },
    { show: 7 },
    { show: 8 },
    {
      show: 10,
      extra: (
        <g>
          <Pull d="M 40 170 L 10 170" />
          <Pull d="M 280 160 L 310 160" />
        </g>
      ),
    },
  ],
};
export default render;
