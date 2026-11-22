// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, sqrt, atan2 } = Math;

const EC = (t: number) => {
  const O = { x: 120, y: 150 },
    e = 22,
    L = 165;
  const E = { x: O.x + e * cos(t), y: O.y + e * sin(t) };
  return { O, E, sx: E.x + sqrt(L * L - (E.y - O.y) ** 2) };
};

const render: MechanismRender = {
  draw(d, t) {
    const { O, E, sx } = EC(t);
    d.hatch(225, 137, 130, -1);
    d.hatch(225, 163, 130, 1);
    d.box(sx, 150, 38, 26, 0, d.OUT());
    d.bar(
      E.x + 58 * cos(atan2(150 - E.y, sx - E.x)),
      E.y + 58 * sin(atan2(150 - E.y, sx - E.x)),
      sx,
      150,
      { width: 9 },
    );
    d.circle(E.x, E.y, 64);
    d.circle(E.x, E.y, 52, d.IN());
    d.circle(O.x, O.y, 9, { fill: d.C.bg, stroke: d.C.input });
    d.circle(E.x, E.y, 2.4, { fill: d.C.input, stroke: null });
    d.pin(O.x, O.y, 4);
    d.pin(sx, 150);
  },
  output: (t) => EC(t).sx,
};
export default render;
