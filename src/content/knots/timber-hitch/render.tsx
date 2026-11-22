import type { KnotRender } from "@/renderers/knot/types";
import { Spar } from "@/renderers/knot/parts";

// Front view of a log. Standing part leaves to the right.
const twist = (x: number) =>
  `M ${x} 146 C ${x + 4} 160 ${x + 18} 160 ${x + 16} 146 C ${x + 14} 132 ${x + 6} 124 ${x + 12} 116`;

const render: KnotRender = {
  base: <Spar y={98} h={48} />,
  segs: [
    // 0: standing part comes in from the right and goes over the top of the log
    { d: "M 308 70 C 240 70 160 76 120 98", z: 4 },
    // 1: behind the log, coming out under the bottom
    { d: "M 120 98 C 112 110 112 136 118 150", back: true },
    // 2: up the front and around the standing part
    { d: "M 118 150 C 124 160 140 152 142 132 L 146 86 C 148 70 166 70 166 84", z: 2 },
    // 3: back down to the log, starting the twists along the turn
    { d: "M 166 84 C 166 96 140 104 132 116 C 126 126 126 140 130 146", z: 6 },
    // 4-6: twists
    { d: twist(130), z: 7 },
    { d: twist(146), z: 8 },
    { d: twist(162), z: 9 },
  ],
  steps: [{ show: 2 }, { show: 3 }, { show: 7 }, { show: 7 }],
};
export default render;
