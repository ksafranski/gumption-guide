import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { atan2, sqrt } = Math;
const c1 = { x: 115, y: 150 },
  r1 = 62,
  c2 = { x: 300, y: 150 },
  r2 = 36;

const render: MechanismRender = {
  draw(d, t) {
    d.pulley(c1, r1, t, d.IN());
    d.pulley(c2, r2, (t * r1) / r2, d.OUT());
    const dist = c2.x - c1.x,
      nx = (r1 - r2) / dist,
      ny = sqrt(1 - nx * nx);
    const up = atan2(-ny, nx),
      dn = atan2(ny, nx);
    const ctx = d.ctx;
    const path = () => {
      ctx.beginPath();
      ctx.moveTo(c1.x + r1 * nx, c1.y - r1 * ny);
      ctx.lineTo(c2.x + r2 * nx, c2.y - r2 * ny);
      ctx.arc(c2.x, c2.y, r2, up, dn);
      ctx.lineTo(c1.x + r1 * nx, c1.y + r1 * ny);
      ctx.arc(c1.x, c1.y, r1, dn, up + TAU);
      ctx.closePath();
    };
    path();
    d.paint({ stroke: d.C.ink, w: 5 });
    path();
    d.paint({ stroke: d.C.bg, w: 2, dash: [3, 11], dashOffset: -r1 * t });
    d.pin(c1.x, c1.y, 3);
    d.pin(c2.x, c2.y, 3);
  },
  output: (t) => (t * 62) / 36,
};
export default render;
