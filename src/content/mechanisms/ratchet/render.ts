// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { cos, sin, atan2, hypot, PI } = Math;

const RAT = (() => {
  const C = { x: 200, y: 172 },
    z = 12,
    p = TAU / z,
    Rt = 72,
    Rr = 58,
    Rp = 98,
    Lp = 42,
    eps = 0.04;
  const prof = (rho: number) => Rt - ((Rt - Rr) * rho) / p;
  // Tip angle offset when the tip sits in a tooth root.
  const rt = prof(p - eps);
  const off = Math.acos((Rp * Rp + rt * rt - Lp * Lp) / (2 * Rp * rt));
  const drive0 = -PI / 2 - 2 * p - eps - off;
  const hold = -PI / 2 + 2 * p - eps - off;
  const state = (t: number) => {
    const k = Math.floor(t / TAU),
      ph = mod(t, TAU),
      u = (1 - cos(ph)) / 2;
    const w = ph < PI ? k * p + p * u : (k + 1) * p;
    return { w, lever: drive0 + p * u };
  };
  // Rigid pawl rotating about its pivot until its tip touches the wheel.
  const pawl = (pivAng: number, w: number) => {
    const px = C.x + Rp * cos(pivAng),
      py = C.y + Rp * sin(pivAng);
    const inside = (b: number) => {
      const tx = px + Lp * cos(b),
        ty = py + Lp * sin(b);
      const rho = mod(atan2(ty - C.y, tx - C.x) - w, p);
      return hypot(tx - C.x, ty - C.y) < prof(rho);
    };
    const b0 = pivAng + PI / 2 - 0.2,
      step = (PI / 2 + 0.2) / 40;
    let lo = b0,
      hi = b0 + 40 * step;
    for (let i = 1; i <= 40; i++) {
      const b = b0 + step * i;
      if (inside(b)) {
        hi = b;
        lo = b - step;
        break;
      }
    }
    for (let i = 0; i < 14; i++) {
      const m = (lo + hi) / 2;
      if (inside(m)) hi = m;
      else lo = m;
    }
    return { px, py, tx: px + Lp * cos(lo), ty: py + Lp * sin(lo) };
  };
  return { C, z, p, Rt, Rr, Rp, prof, hold, state, pawl };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { C, z, p, Rp, prof, hold, state, pawl } = RAT,
      { w, lever } = state(t);
    const pts = [];
    for (let j = 0; j < z; j++)
      for (let s = 0; s <= 6; s++) {
        const rho = (s / 6) * p,
          r = prof(rho),
          a = w + j * p + rho;
        pts.push([C.x + r * cos(a), C.y + r * sin(a)]);
      }
    d.poly(pts, d.OUT());
    d.spokes(C.x, C.y, 40, w, { stroke: d.C.output });
    const h = pawl(hold, w);
    d.ground(h.px, h.py - 0.01);
    d.bar(h.px, h.py, h.tx, h.ty, { width: 7 });
    const dp = pawl(lever, w);
    d.bar(C.x, C.y, dp.px, dp.py, { width: 13, ...d.IN() });
    d.bar(dp.px, dp.py, dp.tx, dp.ty, { width: 7, ...d.IN() });
    d.pin(C.x, C.y, 4);
    d.pin(dp.px, dp.py);
    d.pin(h.px, h.py);
    void Rp;
  },
  output: (t) => RAT.state(t).w,
  speed: 0.8,
};
export default render;
