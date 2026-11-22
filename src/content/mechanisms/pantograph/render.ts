// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU, meet } from "@/renderers/mechanism/draw";

const { cos, sin } = Math;

const PG = (() => {
  const O = { x: 46, y: 246 },
    T0 = { x: 126, y: 196 },
    k = 2.5,
    L = 168;
  const tracer = (t: number) => ({
    x: T0.x + 20 * (cos(t) + 0.35 * cos(2 * t)),
    y: T0.y + 20 * (sin(t) - 0.35 * sin(2 * t)),
  });
  const at = (t: number) => {
    const T = tracer(t),
      P = { x: O.x + k * (T.x - O.x), y: O.y + k * (T.y - O.y) };
    const e1 = meet(O, L, P, L, 1),
      e2 = meet(O, L, P, L, -1),
      E = e1.y < e2.y ? e1 : e2;
    const F = { x: O.x + (E.x - O.x) / k, y: O.y + (E.y - O.y) / k },
      G = { x: E.x + (P.x - E.x) / k, y: E.y + (P.y - E.y) / k };
    return { T, P, E, F, G };
  };
  const small = Array.from({ length: 120 }, (_, i) => {
    const T = tracer((i / 120) * TAU);
    return [T.x, T.y];
  });
  const big = small.map(([x, y]) => [O.x + k * (x - O.x), O.y + k * (y - O.y)]);
  return { O, at, small, big };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { O, at, small, big } = PG,
      { T, P, E, F, G } = at(t);
    d.poly(small, { fill: null, stroke: d.C.input, w: 1, dash: [3, 3] });
    d.poly(big, { fill: null, stroke: d.C.output, w: 1.2, dash: [4, 4] });
    d.line(O.x, O.y, P.x, P.y, { color: d.C.muted, w: 0.8, dash: [2, 5] });
    d.bar(O.x, O.y, E.x, E.y, { width: 9 });
    d.bar(E.x, E.y, P.x, P.y, { width: 9 });
    d.bar(F.x, F.y, T.x, T.y, { width: 9 });
    d.bar(G.x, G.y, T.x, T.y, { width: 9 });
    d.ground(O.x, O.y);
    for (const q of [E, F, G]) d.pin(q.x, q.y);
    d.circle(T.x, T.y, 5, { fill: d.C.input, stroke: null });
    d.circle(P.x, P.y, 5, { fill: d.C.output, stroke: null });
  },
  output: (t) => -PG.at(t).P.y,
};
export default render;
