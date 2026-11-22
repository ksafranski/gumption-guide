// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, atan2, hypot } = Math;

const OE = (t: number) => {
  const T = { x: 92, y: 150 },
    O = { x: 272, y: 150 },
    r = 42,
    Lr = 128;
  const P = { x: O.x + r * cos(t), y: O.y + r * sin(t) };
  const dl = hypot(P.x - T.x, P.y - T.y);
  return { T, O, r, P, ang: atan2(P.y - T.y, P.x - T.x), s: dl - Lr };
};

const render: MechanismRender = {
  draw(d, t) {
    const { T, O, r, P, ang, s } = OE(t);
    d.pulley(O, r + 22, t, d.OUT());
    d.poly(
      [
        [T.x, T.y],
        [T.x - 13, T.y + 36],
        [T.x + 13, T.y + 36],
      ],
      d.GND(),
    );
    d.hatch(T.x - 18, T.y + 36, 36, 1);
    d.layer((L) => {
      const c = L.ctx;
      c.save();
      c.translate(T.x, T.y);
      c.rotate(ang);
      L.box(48, 0, 134, 42, 0, L.GND());
      L.cut(() => L.box(58, 0, 130, 30, 0, { fill: "#000", stroke: null }));
      L.box(58, 0, 130, 30, 0, { fill: null, stroke: L.C.ground });
      c.restore();
    });
    const px = T.x + s * cos(ang),
      py = T.y + s * sin(ang);
    d.bar(px, py, P.x, P.y, { width: 7, ...d.IN() });
    d.box(px, py, 12, 28, ang, d.IN());
    d.bar(O.x, O.y, P.x, P.y, { width: 12, ...d.OUT() });
    d.pin(T.x, T.y, 4);
    d.pin(O.x, O.y, 4);
    d.pin(P.x, P.y);
  },
  output: (t) => t,
};
export default render;
