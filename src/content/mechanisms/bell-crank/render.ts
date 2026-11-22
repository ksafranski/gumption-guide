// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, sqrt } = Math;

const BC = (t: number) => {
  const P = { x: 200, y: 165 },
    r = 70,
    L = 80,
    f = 0.4 * sin(t);
  const A = { x: P.x + r * sin(f), y: P.y - r * cos(f) };
  const B = { x: P.x + r * cos(f), y: P.y + r * sin(f) };
  return {
    P,
    A,
    B,
    si: A.x - sqrt(L * L - (A.y - 95) ** 2),
    so: B.y + sqrt(L * L - (B.x - 270) ** 2),
  };
};

const render: MechanismRender = {
  draw(d, t) {
    const { P, A, B, si, so } = BC(t);
    d.hatch(55, 82, 115, -1);
    d.hatch(55, 108, 115, 1);
    d.vhatch(257, 200, 90, -1);
    d.vhatch(283, 200, 90, 1);
    d.box(si, 95, 34, 24, 0, d.IN());
    d.box(270, so, 24, 34, 0, d.OUT());
    d.bar(si, 95, A.x, A.y, { width: 8 });
    d.bar(B.x, B.y, 270, so, { width: 8 });
    d.bar(P.x, P.y, A.x, A.y, { width: 14 });
    d.bar(P.x, P.y, B.x, B.y, { width: 14 });
    d.circle(P.x, P.y, 6.5, { fill: d.C.part, stroke: null });
    d.ground(P.x, P.y);
    d.pin(si, 95);
    d.pin(A.x, A.y);
    d.pin(B.x, B.y);
    d.pin(270, so);
  },
  output: (t) => -BC(t).so,
};
export default render;
