// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import type { Point } from "@/renderers/mechanism/draw";
import { TAU, meet } from "@/renderers/mechanism/draw";

const { cos, sin } = Math;

const CB = (() => {
  // Unit design: ground 2, crank 1, rocker 2.5, coupler 5 with the rocker at its midpoint.
  const raw = (t: number) => {
    const A = { x: 0, y: 0 },
      B = { x: 2, y: 0 },
      C = { x: cos(t), y: sin(t) };
    const D = meet(C, 2.5, B, 2.5, -1);
    return { A, B, C, D, P: { x: 2 * D.x - C.x, y: 2 * D.y - C.y } };
  };
  const samples = Array.from({ length: 180 }, (_, i) => raw((i / 180) * TAU));
  const xs = samples.flatMap((s) => [s.A.x, s.B.x, s.C.x, s.D.x, s.P.x]),
    ys = samples.flatMap((s) => [s.A.y, s.B.y, s.C.y, s.D.y, s.P.y]);
  const x0 = Math.min(...xs),
    x1 = Math.max(...xs),
    y0 = Math.min(...ys),
    y1 = Math.max(...ys);
  const S = Math.min(340 / (x1 - x0), 240 / (y1 - y0));
  const tf = (p: Point) => ({
    x: 200 + (p.x - (x0 + x1) / 2) * S,
    y: 150 + (p.y - (y0 + y1) / 2) * S,
  });
  const at = (t: number) => {
    const r = raw(t);
    return Object.fromEntries(Object.entries(r).map(([k, v]) => [k, tf(v)]));
  };
  const trace = samples.map((s) => {
    const p = tf(s.P);
    return [p.x, p.y];
  });
  return { at, trace };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { at, trace } = CB,
      { A, B, C, D, P } = at(t);
    d.poly(trace, { fill: null, stroke: d.C.output, w: 1.2, dash: [4, 4] });
    d.bar(B.x, B.y, D.x, D.y, { width: 10 });
    d.bar(C.x, C.y, P.x, P.y, { width: 10, ...d.OUT() });
    d.bar(A.x, A.y, C.x, C.y, { width: 11, ...d.IN() });
    d.ground(A.x, A.y);
    d.ground(B.x, B.y);
    d.pin(C.x, C.y);
    d.pin(D.x, D.y);
    d.circle(P.x, P.y, 5, { fill: d.C.output, stroke: null });
  },
  output: (t) => -CB.at(t).P.y,
};
export default render;
