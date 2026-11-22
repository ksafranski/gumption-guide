import type { KnotRender } from "@/renderers/knot/types";
import { Pull, Spar } from "@/renderers/knot/parts";

// Front view of a log. Standing part leaves up and to the right.
// The turn runs up the front of the log at x≈191; the twists wrap around it.
const render: KnotRender = {
  base: <Spar y={110} h={70} />,
  segs: [
    // 0: standing part comes in over the top of the log
    { d: "M 312 40 C 250 44 200 70 176 110", z: 4 },
    // 1: down behind the log
    { d: "M 176 110 C 170 130 170 160 174 180", back: true },
    // 2: out under the bottom and up the front: the turn
    { d: "M 174 180 C 176 194 190 194 190 180 L 192 120 C 192 108 193 100 194 92", z: 1 },
    // 3: under the standing part...
    { d: "M 194 92 C 196 80 204 68 218 66", z: 2 },
    // 4: ...and back over it
    { d: "M 218 66 C 234 66 234 88 212 96", z: 6 },
    // 5-8: twists around the turn: over, under, over, under
    { d: "M 212 96 C 214 112 200 120 186 125 C 176 128 172 132 176 136", z: 7 },
    { d: "M 176 136 C 180 142 204 138 206 146", z: 0 },
    { d: "M 206 146 C 208 154 178 152 176 160", z: 7 },
    { d: "M 176 160 C 178 168 204 166 208 174", z: 0 },
  ],
  steps: [
    { show: 3 },
    { show: 5 },
    { show: 9 },
    { show: 9, extra: <Pull d="M 262 30 L 312 24" /> },
  ],
};
export default render;
