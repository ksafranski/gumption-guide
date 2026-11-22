// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, atan2, PI } = Math;

const RX = (() => {
  const P = { x: 200, y: 150 },
    w = 88;
  const shape = (t: number) => {
    const V = [
      P,
      { x: P.x + w * cos(t), y: P.y + w * sin(t) },
      { x: P.x + w * cos(t + PI / 3), y: P.y + w * sin(t + PI / 3) },
    ];
    const pts = [];
    for (let i = 0; i < 3; i++) {
      const c = V[i],
        s = V[(i + 1) % 3],
        a0 = atan2(s.y - c.y, s.x - c.x);
      for (let j = 0; j < 24; j++) {
        const a = a0 + (j / 24) * (PI / 3);
        pts.push([c.x + w * cos(a), c.y + w * sin(a)]);
      }
    }
    return pts;
  };
  const top = (t: number) => Math.min(...shape(t).map((q) => q[1]));
  return { P, w, shape, top };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { P, w, shape, top } = RX,
      y0 = top(t);
    d.vhatch(94, 20, 260, -1);
    d.vhatch(306, 20, 260, 1);
    d.layer((L) => {
      L.box(200, y0 + w / 2, 212, w + 16, 0, L.OUT());
      L.cut(() => L.box(200, y0 + w / 2, 196, w, 0, { fill: "#000", stroke: null }));
      L.box(200, y0 + w / 2, 196, w, 0, { fill: null, stroke: L.C.output });
    });
    d.poly(shape(t), d.IN());
    d.pin(P.x, P.y, 4.5);
  },
  output: (t) => -RX.top(t),
};
export default render;
