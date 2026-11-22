// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { cos, sin } = Math;

const CAM = (() => {
  const O = { x: 200, y: 208 };
  const prof = (a: number) => 44 + 30 * Math.pow((1 + cos(a)) / 2, 2);
  const lift = (t: number) => {
    let h = 0;
    for (let i = 0; i < 180; i++) {
      const a = (i / 180) * TAU;
      h = Math.max(h, -prof(a) * sin(a + t));
    }
    return h;
  };
  return { O, prof, lift };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { O, prof, lift } = CAM;
    const fy = O.y - lift(t);
    d.box(180, 82, 14, 26, 0, { fill: d.C.part, stroke: d.C.ground });
    d.box(220, 82, 14, 26, 0, { fill: d.C.part, stroke: d.C.ground });
    d.box(200, fy - 64, 14, 112, 0, d.OUT());
    d.box(200, fy - 5, 84, 10, 0, d.OUT());
    const pts = [];
    for (let i = 0; i < 120; i++) {
      const a = (i / 120) * TAU;
      pts.push([O.x + prof(a) * cos(a + t), O.y + prof(a) * sin(a + t)]);
    }
    d.poly(pts, d.IN());
    d.circle(O.x + 50 * cos(t), O.y + 50 * sin(t), 2.6, { fill: d.C.input, stroke: null });
    d.pin(O.x, O.y, 5);
  },
  output: (t) => CAM.lift(t),
};
export default render;
