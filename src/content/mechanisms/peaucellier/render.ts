// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { meet } from "@/renderers/mechanism/draw";

const { cos, sin } = Math;

const PLK = (() => {
  const O = { x: 100, y: 150 },
    Q = { x: 150, y: 150 },
    r = 50,
    L = 150,
    s = 60;
  const at = (t: number) => {
    const f = 0.8 * sin(t),
      A = { x: Q.x + r * cos(f), y: Q.y + r * sin(f) };
    const dA = (A.x - O.x) ** 2 + (A.y - O.y) ** 2,
      k = (L * L - s * s) / dA;
    return {
      A,
      B: meet(O, L, A, s, 1),
      C: meet(O, L, A, s, -1),
      P: { x: O.x + k * (A.x - O.x), y: O.y + k * (A.y - O.y) },
    };
  };
  return { O, Q, at, lineX: O.x + (L * L - s * s) / (2 * r) };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { O, Q, at, lineX } = PLK,
      { A, B, C, P } = at(t);
    d.line(lineX, 30, lineX, 270, { color: d.C.output, w: 1.2, dash: [4, 4] });
    d.bar(O.x, O.y, B.x, B.y, { width: 8 });
    d.bar(O.x, O.y, C.x, C.y, { width: 8 });
    for (const [p1, p2] of [
      [A, B],
      [A, C],
      [B, P],
      [C, P],
    ])
      d.bar(p1.x, p1.y, p2.x, p2.y, { width: 8 });
    d.bar(Q.x, Q.y, A.x, A.y, { width: 10, ...d.IN() });
    d.ground(O.x, O.y);
    d.ground(Q.x, Q.y);
    for (const q of [A, B, C]) d.pin(q.x, q.y);
    d.circle(P.x, P.y, 5, { fill: d.C.output, stroke: null });
  },
  output: (t) => -PLK.at(t).P.y,
};
export default render;
