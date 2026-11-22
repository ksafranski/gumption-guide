// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { PI } = Math;

const render: MechanismRender = {
  draw(d, t) {
    const m = 6,
      z = 24,
      rp = 72,
      W = { x: 200, y: 190 },
      P = PI * m,
      yp = W.y - rp;
    const base = mod((P * t) / TAU, P),
      yc = yp - 30;
    const bTip = yp + m,
      bRoot = yp - 1.25 * m,
      tTip = yc - 30 - m,
      tRoot = yc - 30 + 1.25 * m;
    d.gear(W.x, W.y, z, m, t / z, d.OUT());
    d.bar(40, yc, 360, yc, { width: 14, ...d.IN() });
    for (const x of [62, 338]) d.box(x, yc, 16, 34, 0, d.GND());
    const top: [number, number][] = [],
      bot: [number, number][] = [];
    for (let k = -9; k <= 9; k++) {
      const xb = 200 + P / 2 + base + k * P,
        xt = xb + P / 2;
      top.push(
        [xt - 0.3 * P, tRoot],
        [xt - 0.13 * P, tTip],
        [xt + 0.13 * P, tTip],
        [xt + 0.3 * P, tRoot],
      );
      bot.push(
        [xb - 0.3 * P, bRoot],
        [xb - 0.13 * P, bTip],
        [xb + 0.13 * P, bTip],
        [xb + 0.3 * P, bRoot],
      );
    }
    d.clip(
      () => {
        d.poly([...top, ...bot.reverse()], d.IN());
        d.ctx.beginPath();
        for (let k = -9; k <= 9; k++) {
          const xb = 200 + P / 2 + base + k * P;
          d.ctx.moveTo(xb, bRoot + 2);
          d.ctx.lineTo(xb + P / 2, tRoot - 2);
        }
        d.paint({ stroke: d.C.input, w: 1 });
      },
      (c) => c.rect(90, 0, 220, 300),
    );
    d.line(90, tRoot, 90, bRoot, { color: d.C.input });
    d.line(310, tRoot, 310, bRoot, { color: d.C.input });
    d.pin(W.x, W.y, 4);
  },
  output: (t) => t / 24,
  speed: 2,
};
export default render;
