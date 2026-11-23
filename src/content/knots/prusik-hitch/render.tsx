import type { KnotRender, Seg } from "@/renderers/knot/types";
import { Pull } from "@/renderers/knot/parts";

// Front view. The main rope hangs vertically (x 148–172). The loop's legs come out of the
// middle of the wraps and hang to a bight below; the bridge crosses at the back.
const base = (
  <g>
    <path d="M 160 0 V 240" stroke="var(--ink)" strokeWidth="26" />
    <path d="M 160 0 V 240" stroke="var(--rope)" strokeWidth="22" />
    <path d="M 160 0 V 240" stroke="var(--rope-lay)" strokeWidth="22" strokeDasharray="2 7" />
  </g>
);

const coil = (y0: number, dir: 1 | -1): Seg[] => {
  // Three turns stepping away from the middle. Front strands cross the rope diagonally.
  const out: Seg[] = [];
  let y = y0;
  for (let i = 0; i < 3; i++) {
    out.push({ d: `M 144 ${y} L 176 ${y + dir * 6}`, back: true });
    out.push({ d: `M 176 ${y + dir * 6} L 144 ${y + dir * 14}`, z: 4 });
    y += dir * 14;
  }
  return out;
};

const up = coil(122, -1); // ends at (144, 80)
const down = coil(162, 1); // starts at (144, 162), ends at (144, 204)

const segs: Seg[] = [
  // 0: left leg up from the bight to the middle
  { d: "M 160 232 C 128 232 128 140 144 122", z: 2 },
  // 1-6: upper wraps
  ...up,
  // 7: the bridge, across the back
  { d: "M 144 80 C 176 72 176 150 144 162", back: true },
  // 8-13: lower wraps (drawn from the middle outward, mirror of the top)
  ...down.map((s) => s),
  // 14: right leg back down to the bight
  { d: "M 144 204 C 186 196 196 232 160 232", z: 2 },
];

const render: KnotRender = {
  base,
  segs,
  steps: [
    { show: 2 },
    { show: 5 },
    { show: 15 },
    { show: 15, extra: <Pull d="M 204 200 L 204 236" /> },
  ],
};
export default render;
