import type { KnotRender } from "@/renderers/knot/types";
import { Pull } from "@/renderers/knot/parts";

// Flat on the bench. Standing part runs up off the top; the fixed loop hangs below.
// The small loop ("hole") sits left of the standing part, around (148, 102).
const render: KnotRender = {
  segs: [
    // 0: standing part down, curling left and up into the small loop
    {
      d: "M 190 0 L 190 118 C 190 142 172 150 152 150 C 130 150 118 132 118 112 C 118 92 134 80 152 80 C 166 80 178 84 186 88",
      z: 3,
    },
    // 1: working side crosses OVER the standing part, then heads down
    { d: "M 186 88 C 198 94 212 100 218 116 L 222 150", z: 6 },
    // 2: the fixed loop
    { d: "M 222 150 C 228 200 210 234 168 234 C 124 234 100 206 104 170", z: 1 },
    // 3: up into the hole, passing under its lower edge
    { d: "M 104 170 C 110 156 128 150 140 140", z: 0 },
    // 4: out over its upper edge
    { d: "M 140 140 C 146 120 150 100 156 70", z: 7 },
    // 5: around behind the standing part
    { d: "M 156 70 C 158 50 176 38 196 40 C 214 42 218 60 210 72", z: 2 },
    // 6: back over the standing part and down into the hole
    { d: "M 210 72 C 204 86 190 104 172 116", z: 8 },
    // 7: out under the lower edge, beside its upward part
    { d: "M 172 116 C 168 132 164 146 160 172", z: 0 },
  ],
  steps: [
    { show: 2 },
    { show: 5 },
    { show: 6 },
    { show: 8 },
    {
      show: 8,
      extra: (
        <g>
          <Pull d="M 212 30 L 212 4" />
          <Pull d="M 240 196 L 244 228" />
        </g>
      ),
    },
  ],
};
export default render;
