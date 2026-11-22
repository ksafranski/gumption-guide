// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU } from "@/renderers/mechanism/draw";

const { cos, sin } = Math;

const TR = (t: number) => {
  const C = { x: 200, y: 150 },
    L = 80;
  const A = { x: C.x + L * cos(t), y: C.y },
    B = { x: C.x, y: C.y + L * sin(t) };
  return {
    C,
    A,
    B,
    M: { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 },
    E: { x: 1.5 * A.x - 0.5 * B.x, y: 1.5 * A.y - 0.5 * B.y },
  };
};

const render: MechanismRender = {
  draw(d, t) {
    const { C, A, B, M, E } = TR(t);
    d.ctx.beginPath();
    d.ctx.ellipse(C.x, C.y, 120, 40, 0, 0, TAU);
    d.paint({ stroke: d.C.output, w: 1.2, dash: [4, 4] });
    d.box(C.x, C.y, 210, 18, 0, { fill: d.C.bg, stroke: d.C.ground });
    d.box(C.x, C.y, 18, 210, 0, { fill: d.C.bg, stroke: d.C.ground });
    d.box(C.x, C.y, 16.5, 16.5, 0, { fill: d.C.bg, stroke: null });
    d.box(A.x, A.y, 24, 14, 0);
    d.box(B.x, B.y, 14, 24, 0);
    d.bar(E.x, E.y, B.x, B.y, { width: 9, ...d.OUT() });
    d.bar(C.x, C.y, M.x, M.y, { width: 10, ...d.IN() });
    d.pin(C.x, C.y);
    d.pin(A.x, A.y);
    d.pin(B.x, B.y);
    d.pin(M.x, M.y, 2.4);
    d.circle(E.x, E.y, 4.5, { fill: d.C.output, stroke: null });
  },
  output: (t) => -TR(t).E.y,
};
export default render;
