import type { KnotRender } from "@/renderers/knot/types";
import { Anchor, Label, Pull, Ring } from "@/renderers/knot/parts";

// Side view: load above, anchor ring below. The loop works as a pulley.
const base = (
  <g>
    <rect x={40} y={4} width={150} height={22} rx={3} className="k-band" />
    <Label x={98} y={19}>
      LOAD
    </Label>
    <Anchor x={152} y={234} w={120} />
    <Ring cx={152} cy={212} r={12} />
  </g>
);
// Front half of the ring, drawn over the rope so the rope runs through it.
const ringFront = <path d="M 140 212 A 12 12 0 0 0 164 212" className="k-ringfront" />;

const render: KnotRender = {
  base,
  segs: [
    // 0: standing part down from the load
    { d: "M 110 26 L 110 100", z: 1 },
    // 1: fixed loop out to the right, crossing back over the standing part
    { d: "M 110 100 C 112 116 150 116 168 96 C 182 80 166 58 142 60 C 124 62 116 70 110 80", z: 3 },
    // 2: on down toward the anchor
    { d: "M 110 80 C 104 90 98 96 98 110 L 98 120", z: 3 },
    // 3: down and through the ring
    { d: "M 98 120 L 138 200 C 140 226 164 226 166 206", z: 2 },
    // 4: up, passing under the loop's lower edge
    { d: "M 166 206 L 150 116", z: 1 },
    // 5: over its upper edge, then down to your hand
    { d: "M 150 116 L 146 76 C 144 56 172 52 182 70 L 236 196", z: 6 },
    // 6: lock off: the tail comes back up...
    { d: "M 236 196 C 240 180 240 160 232 144", z: 5 },
    // 7-8: half hitch: over both strands, back under them and under itself
    { d: "M 232 144 C 226 136 200 136 150 136 C 136 136 136 151 148 151", z: 8 },
    { d: "M 148 151 L 248 152 C 260 152 262 168 250 170", z: -1 },
    // 9-10: second half hitch
    { d: "M 250 170 L 150 172 C 136 172 136 187 148 187", z: 8 },
    { d: "M 148 187 L 246 188 C 256 190 258 202 266 212", z: -1 },
  ],
  steps: [
    { show: 3 },
    { show: 6, extra: ringFront },
    {
      show: 6,
      extra: (
        <g>
          {ringFront}
          <Pull d="M 256 150 L 270 206" />
        </g>
      ),
    },
    { show: 11, extra: ringFront },
  ],
};
export default render;
