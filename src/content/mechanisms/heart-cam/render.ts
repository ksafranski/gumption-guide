// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { cos, sin, sqrt, PI } = Math;

const HC = (() => {
  const O = { x: 200, y: 205 },
    r0 = 38,
    h = 48,
    rr = 11;
  const prof = (a: number) => r0 + (h * Math.abs(mod(a + PI, TAU) - PI)) / PI;
  const N = 360;
  const pts = (t: number) =>
    Array.from({ length: N }, (_, i) => {
      const a = (i / N) * TAU;
      const r = prof(a);
      return [O.x + r * cos(a - PI / 2 + t), O.y + r * sin(a - PI / 2 + t)];
    });
  const roller = (t: number) => {
    let y = Infinity;
    for (const [px, py] of pts(t)) {
      const dx = px - O.x;
      if (Math.abs(dx) < rr) y = Math.min(y, py - sqrt(rr * rr - dx * dx));
    }
    return y;
  };
  return { O, rr, pts, roller };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { O, rr, pts, roller } = HC,
      ry = roller(t);
    d.box(181, 64, 12, 28, 0, d.GND());
    d.box(219, 64, 12, 28, 0, d.GND());
    d.box(200, ry - 62, 14, 110, 0, d.OUT());
    d.box(200, ry - 8, 30, 14, 0, d.OUT());
    d.poly(pts(t), d.IN());
    d.circle(O.x + 30 * cos(t + PI / 2), O.y + 30 * sin(t + PI / 2), 2.6, {
      fill: d.C.input,
      stroke: null,
    });
    d.circle(200, ry, rr, d.OUT());
    d.pin(200, ry, 2.5);
    d.pin(O.x, O.y, 5);
  },
  output: (t) => -HC.roller(t),
};
export default render;
