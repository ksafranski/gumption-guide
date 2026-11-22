// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { cos, sin, sqrt, atan2, hypot, PI } = Math;

const QR = (() => {
  const O = { x: 200, y: 190 },
    A = { x: 200, y: 280 },
    r = 45,
    Ll = 230,
    Lk = 60,
    ry = 30;
  const at = (t: number) => {
    const P = { x: O.x + r * cos(t), y: O.y + r * sin(t) };
    const dl = hypot(P.x - A.x, P.y - A.y),
      ux = (P.x - A.x) / dl,
      uy = (P.y - A.y) / dl;
    const T = { x: A.x + Ll * ux, y: A.y + Ll * uy };
    const dy = T.y - ry,
      Rx = T.x + sqrt(Lk * Lk - dy * dy);
    return { P, ux, uy, T, Rx };
  };
  return { O, A, r, ry, at };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { O, A, r, ry, at } = QR,
      { P, ux, uy, T, Rx } = at(t);
    d.hatch(30, ry - 8, 340, -1);
    d.hatch(30, ry + 8, 340, 1);
    d.box(Rx - 45, ry, 130, 14, 0, d.OUT());
    d.circle(O.x, O.y, r + 12, d.IN());
    d.arc(O.x, O.y, r, PI / 2 + PI / 3, PI / 2 - PI / 3 + TAU, {
      stroke: d.C.input,
      w: 1.2,
      dash: [4, 4],
    });
    d.ground(A.x, A.y);
    const ang = atan2(uy, ux);
    d.bar(A.x, A.y, T.x, T.y, { width: 18 });
    d.bar(A.x + 30 * ux, A.y + 30 * uy, A.x + 150 * ux, A.y + 150 * uy, { width: 7, fill: d.C.bg });
    d.bar(O.x, O.y, P.x, P.y, { width: 10, ...d.IN() });
    d.box(P.x, P.y, 20, 9, ang, d.IN());
    d.bar(T.x, T.y, Rx, ry, { width: 7 });
    d.pin(O.x, O.y, 4);
    d.pin(P.x, P.y, 2.6);
    d.pin(A.x, A.y);
    d.pin(T.x, T.y);
    d.pin(Rx, ry);
  },
  output: (t) => QR.at(t).Rx,
};
export default render;
