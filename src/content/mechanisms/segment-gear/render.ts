// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { cos, sin, PI } = Math;

const SG = { m: 6, zs: 32, zp: 10, S: { x: 112, y: 160 }, swing: (t: number) => 0.36 * sin(t) };

const render: MechanismRender = {
  draw(d, t) {
    const { m, zs, zp, S, swing } = SG,
      s = swing(t),
      rp = (m * zs) / 2,
      p = TAU / zs;
    const P = { x: S.x + (m * (zs + zp)) / 2, y: S.y };
    d.gear(P.x, P.y, zp, m, PI + PI / zp - (zs / zp) * s, d.OUT());
    const ra = rp + m,
      rd = rp - 1.25 * m,
      pts = [[S.x, S.y]];
    for (let i = -4; i <= 4; i++) {
      const b = s + i * p;
      for (const [r, f] of [
        [rd, -0.5],
        [rd, -0.3],
        [ra, -0.13],
        [ra, 0.13],
        [rd, 0.3],
      ]) {
        if (i === -4 && f < 0.3) continue;
        pts.push([S.x + r * cos(b + f * p), S.y + r * sin(b + f * p)]);
      }
    }
    d.poly(pts, d.IN());
    const hx = S.x + 74 * cos(s + PI * 0.92),
      hy = S.y + 74 * sin(s + PI * 0.92);
    d.bar(S.x, S.y, hx, hy, { width: 12, ...d.IN() });
    d.circle(hx, hy, 8, d.IN());
    d.ground(S.x, S.y);
    d.pin(P.x, P.y, 4);
  },
  output: (t) => -(32 / 10) * SG.swing(t),
};
export default render;
