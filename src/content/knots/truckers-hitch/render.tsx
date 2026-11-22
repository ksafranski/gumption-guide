import type { KnotRender } from "@/renderers/knot/types";
import { Anchor, Label, Pull, Ring } from "@/renderers/knot/parts";

// Side view: load above, anchor ring below.
const base = (
  <g>
    <rect x={70} y={4} width={120} height={22} rx={3} className="k-band" />
    <Label x={100} y={19}>
      Load
    </Label>
    <Anchor x={150} y={228} w={120} />
    <Ring cx={150} cy={212} r={12} />
  </g>
);

const render: KnotRender = {
  base,
  segs: [
    // 0: standing part from the load down to the loop
    { d: "M 120 26 L 120 96", z: 1 },
    // 1: the fixed loop sticking out to the right
    {
      d: "M 120 96 C 120 112 126 116 150 110 C 172 104 176 84 158 82 C 140 80 126 92 122 108 L 120 124",
      z: 2,
    },
    // 2: down to and around the ring
    { d: "M 120 124 L 136 206 C 140 222 162 224 164 208", z: 3 },
    // 3: back up through the loop
    { d: "M 164 208 L 162 92", z: 0 },
    // 4: down to your hand
    { d: "M 162 92 C 166 84 176 86 182 96 L 214 200", z: 4 },
    // 5: locking half hitches around both strands
    {
      d: "M 214 200 L 200 156 C 196 144 170 146 166 150 C 160 156 176 166 196 160 C 206 156 196 136 172 140",
      z: 5,
    },
  ],
  steps: [
    { show: 2 },
    { show: 5 },
    { show: 5, extra: <Pull d="M 232 150 L 240 214" /> },
    { show: 6 },
  ],
};
export default render;
