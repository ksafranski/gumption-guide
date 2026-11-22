import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, sqrt } = Math;

const sc = (t: number) => {
  const O = { x: 110, y: 150 },
    r = 45,
    L = 150;
  const px = O.x + r * cos(t),
    py = O.y + r * sin(t);
  return { O, r, px, py, sx: px + sqrt(L * L - (py - O.y) ** 2) };
};

const render: MechanismRender = {
  draw(d, t) {
    const { O, r, px, py, sx } = sc(t);
    d.hatch(180, 136, 175, -1);
    d.hatch(180, 164, 175, 1);
    d.circle(O.x, O.y, r + 14, d.IN());
    d.bar(O.x, O.y, px, py, { width: 14, ...d.IN() });
    d.box(sx, 150, 44, 26, 0, d.OUT());
    d.bar(px, py, sx, 150, { width: 9 });
    d.pin(O.x, O.y, 4);
    d.pin(px, py);
    d.pin(sx, 150);
  },
  output: (t) => sc(t).sx,
};
export default render;
