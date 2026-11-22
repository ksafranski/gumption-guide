import type { MechanismRender } from "@/renderers/mechanism/types";

const { PI } = Math;

const render: MechanismRender = {
  draw(d, t) {
    const m = 8,
      z1 = 12,
      z2 = 20,
      r1 = (m * z1) / 2,
      r2 = (m * z2) / 2;
    const x1 = 120,
      x2 = x1 + r1 + r2,
      y = 150;
    d.gear(x2, y, z2, m, PI + PI / z2 - (t * z1) / z2, d.OUT());
    d.gear(x1, y, z1, m, t, d.IN());
  },
  output: (t) => -(t * 12) / 20,
};
export default render;
