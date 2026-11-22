// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { cos, sin, sqrt, atan2, hypot } = Math;

const FB = (() => {
  const A = { x: 125, y: 215 },
    B = { x: 285, y: 215 },
    a = 40,
    b = 150,
    c = 100;
  const at = (t: number) => {
    const P = { x: A.x + a * cos(t), y: A.y + a * sin(t) };
    const dx = B.x - P.x,
      dy = B.y - P.y,
      dd = hypot(dx, dy);
    const l = (b * b - c * c + dd * dd) / (2 * dd),
      h = sqrt(Math.max(0, b * b - l * l));
    const mx = P.x + (l * dx) / dd,
      my = P.y + (l * dy) / dd;
    const Q = { x: mx + (h * dy) / dd, y: my - (h * dx) / dd };
    const ux = (Q.x - P.x) / b,
      uy = (Q.y - P.y) / b;
    const E = { x: P.x + 0.5 * (Q.x - P.x) + 48 * uy, y: P.y + 0.5 * (Q.y - P.y) - 48 * ux };
    return { P, Q, E };
  };
  const trace = Array.from({ length: 200 }, (_, i) => {
    const { E } = at((i / 200) * TAU);
    return [E.x, E.y];
  });
  return { A, B, at, trace };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { A, B, at, trace } = FB,
      { P, Q, E } = at(t);
    d.poly(trace, { fill: null, stroke: d.C.muted, w: 1, dash: [3, 4] });
    d.ground(A.x, A.y);
    d.ground(B.x, B.y);
    d.bar(B.x, B.y, Q.x, Q.y, { width: 12, ...d.OUT() });
    d.poly(
      [
        [P.x, P.y],
        [Q.x, Q.y],
        [E.x, E.y],
      ],
      { fill: d.C.part, stroke: d.C.ink },
    );
    d.bar(A.x, A.y, P.x, P.y, { width: 12, ...d.IN() });
    d.pin(A.x, A.y);
    d.pin(B.x, B.y);
    d.pin(P.x, P.y);
    d.pin(Q.x, Q.y);
    d.circle(E.x, E.y, 4, { fill: d.C.ink, stroke: null });
  },
  output: (t) => {
    const { Q } = FB.at(t);
    return -atan2(Q.y - FB.B.y, Q.x - FB.B.x);
  },
};
export default render;
