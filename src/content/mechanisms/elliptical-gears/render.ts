// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import type { Point, Style } from "@/renderers/mechanism/draw";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { cos, sin, sqrt, PI } = Math;

const EL = (() => {
  const a = 70,
    e = 0.5,
    b = a * sqrt(1 - e * e),
    k = a * (1 - e * e);
  const F1 = { x: 130, y: 150 },
    F2 = { x: 270, y: 150 };
  const r = (al: number) => k / (1 + e * cos(al));
  const at = (t: number) => {
    const al = mod(-t + PI, TAU) - PI;
    const cb = Math.max(-1, Math.min(1, (k / (2 * a - r(al)) - 1) / e));
    return { p1: t, p2: PI - (al >= 0 ? Math.acos(cb) : -Math.acos(cb)) };
  };
  return { a, e, b, F1, F2, at };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { a, e, b, F1, F2, at } = EL,
      { p1, p2 } = at(t);
    const ell = (F: Point, ps: number, o: Style) => {
      const cx = F.x - a * e * cos(ps),
        cy = F.y - a * e * sin(ps);
      d.ctx.beginPath();
      d.ctx.ellipse(cx, cy, a, b, ps, 0, TAU);
      d.paint(o);
      d.line(cx - a * cos(ps), cy - a * sin(ps), cx + a * cos(ps), cy + a * sin(ps), {
        color: o.stroke ?? undefined,
        w: 1,
        dash: [3, 4],
      });
      d.circle(F.x + a * (1 - e) * 0.6 * cos(ps), F.y + a * (1 - e) * 0.6 * sin(ps), 3, {
        fill: o.stroke,
        stroke: null,
      });
      d.pin(F.x, F.y, 4);
    };
    ell(F2, p2, d.OUT());
    ell(F1, p1, d.IN());
  },
  output: (t) => mod(-EL.at(t).p2, TAU),
};
export default render;
