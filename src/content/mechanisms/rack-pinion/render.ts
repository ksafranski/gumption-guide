import type { MechanismRender } from "@/renderers/mechanism/types";

const { PI, sin } = Math;

const render: MechanismRender = {
  draw(d, t) {
    const m = 8,
      z = 12,
      r = 48,
      cx = 200,
      cy = 112;
    const th = 1.25 * sin(t),
      shift = -r * th,
      P = PI * m;
    const yp = cy + r,
      ya = yp - m,
      yr = yp + 1.25 * m,
      yb = yr + 22;
    const x0 = 30 + shift,
      x1 = 370 + shift;
    const pts: [number, number][] = [
      [x0, yb],
      [x0, yr],
    ];
    for (let k = -20; k <= 20; k++) {
      const xc = cx + P / 2 + k * P + shift;
      if (xc - 0.3 * P < x0 || xc + 0.3 * P > x1) continue;
      pts.push([xc - 0.3 * P, yr], [xc - 0.13 * P, ya], [xc + 0.13 * P, ya], [xc + 0.3 * P, yr]);
    }
    pts.push([x1, yr], [x1, yb]);
    d.hatch(20, yb + 9, 360, 1);
    for (const x of [80, 200, 320])
      d.circle(x, yb + 4.5, 4.5, { fill: d.C.part, stroke: d.C.ground, w: 1.1 });
    d.poly(pts, d.OUT());
    d.gear(cx, cy, z, m, th, d.IN());
  },
  output: (t) => -48 * 1.25 * sin(t),
};
export default render;
