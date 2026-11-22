// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { cos, sin, PI } = Math;

const PL = { zs: 14, zp: 10, zr: 34, m: 6, a: 72, C: { x: 200, y: 150 } };

const render: MechanismRender = {
  draw(d, t) {
    const { zs, zp, zr, m, a, C } = PL,
      c = (t * zs) / (zs + zr);
    d.ringGear(C.x, C.y, zr, m, 0, d.GND());
    const centers = [];
    for (let i = 0; i < 3; i++) {
      const f = c + (i * TAU) / 3,
        x = C.x + a * cos(f),
        y = C.y + a * sin(f);
      centers.push([x, y]);
      d.gear(x, y, zp, m, f + PI + PI / zp - (zs / zp) * (t - f));
    }
    d.gear(C.x, C.y, zs, m, t, d.IN());
    for (const [x, y] of centers) d.bar(C.x, C.y, x, y, { width: 9, ...d.OUT() });
    d.circle(C.x, C.y, 10, d.OUT());
    for (const [x, y] of centers) d.pin(x, y);
    d.pin(C.x, C.y);
  },
  output: (t) => (t * 14) / 48,
  speed: 1.2,
};
export default render;
