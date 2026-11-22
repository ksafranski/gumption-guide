// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { PI } = Math;

const IG = (() => {
  const m = 6,
    z1 = 24,
    z2 = 16,
    n = 4,
    p1 = TAU / z1,
    W = n * p1;
  const D = { x: 140, y: 150 },
    E = { x: 140 + (m * (z1 + z2)) / 2, y: 150 };
  // Driver angle "seen" by the driven gear: advances only while teeth are in mesh.
  const eff = (t: number) => {
    const u = t + (n - 0.5) * p1;
    return Math.floor(u / TAU) * W + Math.min(mod(u, TAU), W);
  };
  const driven = (t: number) => PI + PI / z2 - (z1 / z2) * (eff(t) - (n - 0.5) * p1);
  return { m, z1, z2, n, D, E, driven };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { m, z1, z2, n, D, E, driven } = IG;
    d.gear(E.x, E.y, z2, m, driven(t), d.OUT());
    d.gear(D.x, D.y, z1, m, t, { ...d.IN(), teeth: Array.from({ length: n }, (_, i) => i) });
    d.pin(D.x, D.y, 4);
    d.pin(E.x, E.y, 4);
  },
  output: (t) => -IG.driven(t),
};
export default render;
