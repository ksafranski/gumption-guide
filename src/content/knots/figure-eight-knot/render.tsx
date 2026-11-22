import type { KnotRender } from "@/renderers/knot/types";
import { Pull } from "@/renderers/knot/parts";

// Flat on the bench. Standing part enters left. The loop rises on the right; the end
// wraps around behind the standing part, then comes back down through the loop.
const render: KnotRender = {
  segs: [
    // 0: standing part, over the end where it wraps behind
    { d: "M 10 140 L 125 140", z: 5 },
    // 1: under the descending side of the loop
    { d: "M 125 140 L 175 140", z: 0 },
    // 2: over the end where it leaves, then curling up
    { d: "M 175 140 L 215 140 C 245 140 255 110 245 85", z: 6 },
    // 3: over the top of the loop
    { d: "M 245 85 C 235 50 170 45 155 70", z: 3 },
    // 4: down, under the end where it comes back in
    { d: "M 155 70 L 152 115", z: 1 },
    // 5: down over the standing part
    { d: "M 152 115 L 150 165", z: 7 },
    // 6: around the bottom
    { d: "M 150 165 C 148 200 100 200 100 170", z: 2 },
    // 7: up behind the standing part
    { d: "M 100 170 L 100 112", z: 0 },
    // 8: over the top and back toward the loop
    { d: "M 100 112 C 100 82 125 80 145 90", z: 4 },
    // 9: over the side of the loop, into it
    { d: "M 145 90 L 175 112", z: 8 },
    // 10: down and out under the standing part
    { d: "M 175 112 C 188 122 196 132 202 150 L 214 210", z: -1 },
  ],
  steps: [
    { show: 6 },
    { show: 8 },
    { show: 11 },
    {
      show: 11,
      extra: (
        <g>
          <Pull d="M 40 160 L 10 160" />
          <Pull d="M 228 196 L 238 228" />
        </g>
      ),
    },
  ],
};
export default render;
