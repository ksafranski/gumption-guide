// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, PI } = Math;

const render: MechanismRender = {
  draw(d, t) {
    const C = { x: 200, y: 150 },
      cp = { x: C.x + 50 * cos(t), y: C.y + 50 * sin(t) };
    d.ringGear(C.x, C.y, 40, 5, 0, d.GND());
    d.line(C.x - 100, C.y, C.x + 100, C.y, { color: d.C.output, w: 1.2, dash: [4, 4] });
    d.gear(cp.x, cp.y, 20, 5, -t + PI / 20);
    d.bar(C.x, C.y, cp.x, cp.y, { width: 12, ...d.IN() });
    const X = { x: cp.x + 50 * cos(-t), y: cp.y + 50 * sin(-t) };
    d.box(X.x, X.y, 18, 12, 0, d.OUT());
    d.pin(C.x, C.y, 4);
    d.pin(cp.x, cp.y);
    d.pin(X.x, X.y);
  },
  output: (t) => 100 * cos(t),
};
export default render;
