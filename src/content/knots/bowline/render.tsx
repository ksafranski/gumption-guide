import type { KnotRender } from "@/renderers/knot/types";

// Flat on the bench. Standing part runs up off the top; the fixed loop hangs below.
const render: KnotRender = {
  segs: [
    // 0: standing part down into the small loop
    { d: "M 160 6 L 160 96 C 160 118 124 120 124 98 C 124 82 140 74 152 74", z: 2 },
    // 1: working side crosses OVER the standing part and heads down
    { d: "M 152 74 C 164 74 180 80 184 100 L 186 120", z: 6 },
    // 2: the big loop
    { d: "M 186 120 C 190 170 196 226 156 230 C 116 234 112 190 118 160", z: 1 },
    // 3: up into the small loop from underneath (passes under its bottom edge)
    { d: "M 118 160 C 122 132 134 116 142 104", z: 0 },
    // 4: out over the top of the small loop
    { d: "M 142 104 C 148 92 150 70 152 54", z: 7 },
    // 5: around behind the standing part
    { d: "M 152 54 C 154 34 176 30 178 46", z: 1 },
    // 6: back down over the loop's top and into the hole
    { d: "M 178 46 C 180 60 176 82 160 100", z: 8 },
    // 7: out under the bottom of the small loop, beside itself
    { d: "M 160 100 C 152 112 148 130 146 150", z: 0 },
  ],
  steps: [{ show: 2 }, { show: 5 }, { show: 6 }, { show: 8 }, { show: 8 }],
};
export default render;
