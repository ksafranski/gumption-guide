// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { meet } from "@/renderers/mechanism/draw";

const { cos, sin } = Math;

const WT = (() => {
  const A = { x: 95, y: 95 },
    B = { x: 305, y: 205 },
    r = 105,
    b = 110;
  const at = (al: number) => {
    const P = { x: A.x + r * cos(al), y: A.y + r * sin(al) };
    const Q = meet(P, b, B, r, 1);
    const Q2 = meet(P, b, B, r, -1);
    const q = Q.x < Q2.x ? Q : Q2;
    return { P, Q: q, M: { x: (P.x + q.x) / 2, y: (P.y + q.y) / 2 } };
  };
  const ang = (t: number) => 0.42 * sin(t);
  const full = Array.from({ length: 241 }, (_, i) => at(-0.75 + (1.5 * i) / 240).M).map((p) => [
    p.x,
    p.y,
  ]);
  const used = Array.from({ length: 61 }, (_, i) => at(-0.42 + (0.84 * i) / 60).M).map((p) => [
    p.x,
    p.y,
  ]);
  return { A, B, at, ang, full, used };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { A, B, at, ang, full, used } = WT,
      { P, Q, M } = at(ang(t));
    d.poly(full, { fill: null, stroke: d.C.muted, w: 1, dash: [3, 4], close: false });
    d.poly(used, { fill: null, stroke: d.C.output, w: 2, close: false });
    d.ground(A.x, A.y);
    d.ground(B.x, B.y);
    d.bar(B.x, B.y, Q.x, Q.y, { width: 11 });
    d.bar(P.x, P.y, Q.x, Q.y, { width: 11, ...d.OUT() });
    d.bar(A.x, A.y, P.x, P.y, { width: 11, ...d.IN() });
    d.pin(A.x, A.y);
    d.pin(B.x, B.y);
    d.pin(P.x, P.y);
    d.pin(Q.x, Q.y);
    d.circle(M.x, M.y, 4.5, { fill: d.C.output, stroke: null });
  },
  output: (t) => -WT.at(WT.ang(t)).M.y,
};
export default render;
