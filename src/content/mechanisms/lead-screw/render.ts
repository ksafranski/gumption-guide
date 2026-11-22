// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { sin } = Math;

const LSc = { P: 28, psi: (t: number) => 12 * sin(t) };

const render: MechanismRender = {
  draw(d, t) {
    const { P, psi } = LSc,
      a = psi(t),
      shift = (P * a) / TAU,
      xn = 210 + shift;
    d.hatch(120, 104, 180, -1);
    d.box(356, 150, 12, 44, 0, d.GND());
    d.box(210, 150, 284, 32, 0, d.IN());
    d.clip(
      () => {
        d.ctx.beginPath();
        for (let k = -12; k <= 12; k++) {
          const x = 210 + shift + k * P;
          d.ctx.moveTo(x - P / 4, 134);
          d.ctx.lineTo(x + P / 4, 166);
        }
        d.paint({ stroke: d.C.input, w: 1.4 });
      },
      (c) => c.rect(68, 134, 284, 32),
    );
    d.box(xn, 111, 110, 12, 0, d.OUT());
    d.box(xn, 150, 48, 58, 0, d.OUT());
    d.line(xn - 24, 150, xn + 24, 150, { color: d.C.output, w: 1, dash: [3, 3] });
    const ky = 150 - 34 * sin(a);
    d.line(52, 150, 68, 150, { color: d.C.input, w: 6 });
    d.box(50, 150, 8, 80, 0, d.IN());
    d.bar(50, 150, 50, ky, { width: 7, ...d.IN() });
    d.circle(38, ky, 6, d.IN());
    d.line(38, ky, 50, ky, { color: d.C.input, w: 4 });
  },
  output: (t) => 210 + (LSc.P * LSc.psi(t)) / TAU,
};
export default render;
