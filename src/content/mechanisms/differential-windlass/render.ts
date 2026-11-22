import type { MechanismRender } from "@/renderers/mechanism/types";

const { cos, sin, PI } = Math;
const DW = { A: { x: 200, y: 74 }, R1: 54, R2: 34, th: (t: number) => 3 * (1 - cos(t)) };

const render: MechanismRender = {
  draw(d, t) {
    const { A, R1, R2, th } = DW,
      a = th(t),
      r = (R1 + R2) / 2,
      px = A.x + (R2 - R1) / 2,
      py = 205 - ((R1 - R2) * a) / 2;
    d.hatch(130, 20, 140, -1);
    d.line(A.x, 20, A.x, A.y, { color: d.C.ground, w: 3 });
    d.line(px, py, px, py + 34, { color: d.C.ink, w: 2 });
    d.box(px, py + 52, 52, 34, 0, d.OUT());
    d.pulley({ x: px, y: py }, r, a, d.GND());
    const ctx = d.ctx;
    ctx.beginPath();
    ctx.moveTo(A.x - R1, A.y);
    ctx.lineTo(px - r, py);
    ctx.arc(px, py, r, PI, 0, true);
    ctx.lineTo(A.x + R2, A.y);
    d.paint({ stroke: d.C.ink, w: 2.5 });
    d.circle(A.x, A.y, R1, d.IN());
    for (let i = 0; i < 6; i++) {
      const s = a + (i * PI) / 3;
      d.line(
        A.x + R2 * cos(s),
        A.y + R2 * sin(s),
        A.x + (R1 - 4) * cos(s),
        A.y + (R1 - 4) * sin(s),
        { color: d.C.input, w: 1 },
      );
    }
    d.circle(A.x, A.y, R2, d.IN());
    const hx = A.x + 74 * cos(a + 2.4),
      hy = A.y + 74 * sin(a + 2.4);
    d.bar(A.x, A.y, hx, hy, { width: 9, ...d.IN() });
    d.circle(hx, hy, 6, { fill: d.C.input, stroke: d.C.input });
    d.pin(A.x, A.y, 4);
    d.pin(px, py);
  },
  output: (t) => ((DW.R1 - DW.R2) * DW.th(t)) / 2,
};
export default render;
