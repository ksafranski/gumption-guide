// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { cos, sin, atan2, PI } = Math;

const GEN = (() => {
  const n = 4,
    a = 120,
    r = a * sin(PI / n),
    R = a * cos(PI / n);
  const Cw = { x: 255, y: 150 },
    D = { x: 255 - a, y: 150 };
  const lim = PI / 2 - PI / n;
  const wheel = (t: number) => {
    const k = Math.floor((t + PI) / TAU),
      phi = mod(t + PI, TAU) - PI,
      step = TAU / n;
    if (phi < -lim) return PI / n - k * step;
    if (phi > lim) return -PI / n - k * step;
    const px = -a + r * cos(phi),
      py = r * sin(phi);
    return atan2(-py, -px) - k * step;
  };
  return { n, a, r, R, Cw, D, wheel };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { n, a, r, R, Cw, D, wheel } = GEN;
    const w = wheel(t),
      hw = 7,
      rl = 50;
    d.layer((L) => {
      L.circle(Cw.x, Cw.y, R, L.OUT());
      const slots: [number, number, number, number][] = [],
        notches: [number, number][] = [];
      for (let i = 0; i < n; i++) {
        const s = w + PI + (i * TAU) / n,
          m = s + PI / n;
        slots.push([
          Cw.x + 28 * cos(s),
          Cw.y + 28 * sin(s),
          Cw.x + (R + 16) * cos(s),
          Cw.y + (R + 16) * sin(s),
        ]);
        notches.push([Cw.x + a * cos(m), Cw.y + a * sin(m)]);
      }
      L.cut(() => {
        slots.forEach((s) => L.bar(...s, { width: hw * 2, fill: "#000", stroke: null }));
        notches.forEach(([x, y]) => L.circle(x, y, rl + 2, { fill: "#000", stroke: null }));
      });
      L.clip(
        () => {
          slots.forEach((s) => L.bar(...s, { width: hw * 2, fill: null, stroke: L.C.output }));
          notches.forEach(([x, y]) => L.circle(x, y, rl + 2, { fill: null, stroke: L.C.output }));
        },
        (c) => c.arc(Cw.x, Cw.y, R + 0.8, 0, TAU),
      );
    });
    d.layer((L) => {
      const nx = D.x + a * cos(t),
        ny = D.y + a * sin(t);
      L.circle(D.x, D.y, rl, L.IN());
      L.cut(() => L.circle(nx, ny, R + 3, { fill: "#000", stroke: null }));
      L.clip(
        () => L.circle(nx, ny, R + 3, { fill: null, stroke: L.C.input }),
        (c) => c.arc(D.x, D.y, rl + 0.8, 0, TAU),
      );
    });
    const px = D.x + r * cos(t),
      py = D.y + r * sin(t);
    d.bar(D.x, D.y, px, py, { width: 12, ...d.IN() });
    d.circle(px, py, 6, { fill: d.C.input, stroke: d.C.input });
    d.pin(D.x, D.y, 4);
    d.pin(Cw.x, Cw.y, 4);
  },
  output: (t) => GEN.wheel(t),
  speed: 0.9,
};
export default render;
