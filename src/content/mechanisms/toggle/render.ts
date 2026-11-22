// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { meet } from "@/renderers/mechanism/draw";

const { cos, sin, sqrt } = Math;

const TG = (t: number) => {
  const F = { x: 200, y: 40 },
    O = { x: 61, y: 125 },
    rc = 26,
    Lr = 110,
    l = 80;
  const P = { x: O.x + rc * cos(t), y: O.y + rc * sin(t) };
  const K = meet(F, l, P, Lr, -1);
  return { F, O, P, K, R: { x: F.x, y: K.y + sqrt(Math.max(0, l * l - (K.x - F.x) ** 2)) } };
};

const render: MechanismRender = {
  draw(d, t) {
    const { F, O, P, K, R } = TG(t);
    d.hatch(150, 242, 100, 1);
    d.box(200, 234, 64, 16, 0, d.GND());
    d.vhatch(178, 150, 70, -1);
    d.vhatch(222, 150, 70, 1);
    d.box(R.x, R.y + 10, 42, 30, 0, d.OUT());
    d.circle(O.x, O.y, 36, d.IN());
    d.bar(O.x, O.y, P.x, P.y, { width: 11, ...d.IN() });
    d.bar(P.x, P.y, K.x, K.y, { width: 8 });
    d.bar(F.x, F.y, K.x, K.y, { width: 12 });
    d.bar(K.x, K.y, R.x, R.y, { width: 12 });
    d.ground(F.x, F.y, 11, -1);
    d.pin(O.x, O.y, 4);
    d.pin(P.x, P.y);
    d.pin(K.x, K.y);
    d.pin(R.x, R.y);
  },
  output: (t) => -TG(t).R.y,
};
export default render;
