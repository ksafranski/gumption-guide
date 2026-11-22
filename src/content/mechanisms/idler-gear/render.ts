// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { PI } = Math;

const ID = { m: 8, z: [12, 9, 16], x: [100, 184, 284], y: 150 };
const idAng = (t: number) => {
  const [z1, z2, z3] = ID.z,
    a2 = PI + PI / z2 - (t * z1) / z2;
  return [t, a2, PI + PI / z3 - (a2 * z2) / z3];
};

const render: MechanismRender = {
  draw(d, t) {
    const a = idAng(t),
      { m, z, x, y } = ID;
    d.gear(x[2], y, z[2], m, a[2], d.OUT());
    d.gear(x[1], y, z[1], m, a[1]);
    d.gear(x[0], y, z[0], m, a[0], d.IN());
  },
  output: (t) => idAng(t)[2],
};
export default render;
