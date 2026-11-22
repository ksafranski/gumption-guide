// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin } = Math;

const sy = (t: number) => {
  const O = { x: 120, y: 150 },
    r = 50;
  return { O, r, px: O.x + r * cos(t), py: O.y + r * sin(t) };
};

const render: MechanismRender = {
  draw(d, t) {
    const { O, r, px, py } = sy(t);
    d.circle(O.x, O.y, r + 14, d.IN());
    d.bar(O.x, O.y, px, py, { width: 12, ...d.IN() });
    d.pin(O.x, O.y, 4);
    // guide bearing
    d.box(235, 139, 30, 10, 0, { fill: d.C.part, stroke: d.C.ground });
    d.box(235, 161, 30, 10, 0, { fill: d.C.part, stroke: d.C.ground });
    d.layer((L) => {
      L.box(px + 107, 150, 214, 10, 0, L.OUT());
      L.box(px, 150, 28, 150, 0, L.OUT());
      L.cut(() => L.box(px, 150, 14, 132, 0, { fill: "#000", stroke: null }));
      L.box(px, 150, 14, 132, 0, { fill: null, stroke: L.C.output });
    });
    d.box(px, py, 13, 13, 0);
    d.pin(px, py);
  },
  output: (t) => sy(t).px,
};
export default render;
