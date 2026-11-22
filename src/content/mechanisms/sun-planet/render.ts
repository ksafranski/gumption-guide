// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, sqrt, atan2, PI } = Math;

const SP = (() => {
  const S = { x: 200, y: 198 },
    z = 14,
    m = 4,
    a = 56,
    L = 100;
  const at = (t: number) => {
    const Pc = { x: S.x + a * cos(t), y: S.y + a * sin(t) };
    const ys = Pc.y - sqrt(L * L - (Pc.x - S.x) ** 2);
    const rod = atan2(Pc.y - ys, Pc.x - S.x);
    return { Pc, ys, rod, sun: t - (rod - t - PI - PI / z) };
  };
  return { S, z, m, at };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { S, z, m, at } = SP,
      { Pc, ys, rod, sun } = at(t);
    d.vhatch(184, 20, 150, -1);
    d.vhatch(216, 20, 150, 1);
    d.gear(S.x, S.y, z, m, sun, d.OUT());
    d.bar(S.x, S.y, Pc.x, Pc.y, { width: 8 });
    d.gear(Pc.x, Pc.y, z, m, rod, d.IN());
    d.bar(S.x, ys, Pc.x, Pc.y, { width: 10, ...d.IN() });
    d.box(S.x, ys, 30, 24, 0, d.IN());
    d.pin(S.x, S.y, 4);
    d.pin(Pc.x, Pc.y);
    d.pin(S.x, ys);
  },
  output: (t) => SP.at(t).sun,
};
export default render;
