import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { cos, PI } = Math;
const BT = (t: number) => {
  const dd = 30 * (1 - cos(t));
  return { dd, ym: 200 - dd, yh: 120 + 2 * dd };
};

const render: MechanismRender = {
  draw(d, t) {
    const { dd, ym, yh } = BT(t),
      r = 26,
      fx = 202,
      fy = 62,
      mx = 150;
    d.hatch(90, 22, 160, -1);
    d.line(fx, 22, fx, fy, { color: d.C.ground, w: 3 });
    d.line(mx, ym, mx, ym + 40, { color: d.C.ink, w: 2 });
    d.box(mx, ym + 56, 56, 34, 0, d.OUT());
    d.pulley({ x: mx, y: ym }, r, dd / r, d.GND());
    d.pulley({ x: fx, y: fy }, r, (2 * dd) / r, d.GND());
    const ctx = d.ctx;
    ctx.beginPath();
    ctx.moveTo(mx - r, 22);
    ctx.lineTo(mx - r, ym);
    ctx.arc(mx, ym, r, PI, 0, true);
    ctx.lineTo(fx - r, fy);
    ctx.arc(fx, fy, r, PI, TAU);
    ctx.lineTo(fx + r, yh);
    d.paint({ stroke: d.C.ink, w: 2.5 });
    d.box(fx + r, yh + 12, 16, 26, 0, d.IN());
    d.pin(mx, ym);
    d.pin(fx, fy);
  },
  output: (t) => BT(t).dd,
};
export default render;
