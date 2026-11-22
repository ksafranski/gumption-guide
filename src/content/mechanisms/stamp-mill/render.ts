// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { cos, sin, PI } = Math;

const ST = (() => {
  const C = { x: 140, y: 205 },
    dx = 62,
    L = 78,
    hw = 7,
    lim = Math.acos(dx / L);
  const at = (t: number) => {
    let y = C.y - hw;
    for (const k of [0, 1]) {
      const f = mod(-t + k * PI + PI, TAU) - PI;
      if (f > -lim && f <= 0) y = Math.min(y, C.y + dx * Math.tan(f) - hw / cos(f));
    }
    return y;
  };
  return { C, dx, L, at };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { C, L, at } = ST,
      y = at(t),
      rx = 226;
    d.box(226, 281, 90, 12, 0, d.GND());
    d.vhatch(214, 30, 70, -1);
    d.vhatch(238, 30, 70, 1);
    d.box(rx, y - 6, 52, 12, 0, d.OUT());
    d.box(rx, y - 30, 12, 190, 0, d.OUT());
    d.box(rx, y + 64, 32, 26, 0, d.OUT());
    for (const k of [0, 1]) {
      const f = -t + k * PI;
      d.bar(C.x, C.y, C.x + L * cos(f), C.y + L * sin(f), { width: 14, ...d.IN() });
    }
    d.circle(C.x, C.y, 16, d.IN());
    d.pin(C.x, C.y, 4);
  },
  output: (t) => -ST.at(t),
  speed: 0.8,
};
export default render;
