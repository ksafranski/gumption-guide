// Ported from the 507 Movements app.
import type { MechanismRender } from "@/renderers/mechanism/types";
import type { Point, Style } from "@/renderers/mechanism/draw";
import { TAU, mod } from "@/renderers/mechanism/draw";

const { cos, sin, sqrt, atan2, PI } = Math;

const CH = (() => {
  const p = 14,
    z1 = 18,
    z2 = 12,
    R1 = (z1 * p) / TAU,
    R2 = (z2 * p) / TAU;
  const geom = (dist: number) => {
    const nx = (R1 - R2) / dist,
      ny = sqrt(1 - nx * nx),
      beta = Math.asin(nx);
    const S = sqrt(dist * dist - (R1 - R2) ** 2);
    return { nx, ny, S, L: 2 * S + R1 * (PI + 2 * beta) + R2 * (PI - 2 * beta) };
  };
  // choose the centre distance so the chain is a whole number of links
  const n = Math.round(geom(165).L / p);
  let lo = 140,
    hi = 190;
  for (let i = 0; i < 40; i++) {
    const mid = (lo + hi) / 2;
    if (geom(mid).L < n * p) lo = mid;
    else hi = mid;
  }
  const dist = (lo + hi) / 2,
    g = geom(dist);
  const c1 = { x: 200 - dist / 2 - (R1 - R2) / 2, y: 150 },
    c2 = { x: c1.x + dist, y: 150 };
  const up = atan2(-g.ny, g.nx),
    dn = atan2(g.ny, g.nx);
  const A1 = { x: c1.x + R1 * g.nx, y: c1.y - R1 * g.ny },
    A2 = { x: c2.x + R2 * g.nx, y: c2.y - R2 * g.ny };
  const B2 = { x: c2.x + R2 * g.nx, y: c2.y + R2 * g.ny },
    B1 = { x: c1.x + R1 * g.nx, y: c1.y + R1 * g.ny };
  const arc2 = R2 * (dn - up),
    s1 = g.S,
    s2 = s1 + arc2,
    s3 = s2 + g.S,
    L = n * p;
  const at = (s: number) => {
    s = mod(s, L);
    if (s < s1) {
      const f = s / g.S;
      return [A1.x + (A2.x - A1.x) * f, A1.y + (A2.y - A1.y) * f];
    }
    if (s < s2) {
      const a = up + (s - s1) / R2;
      return [c2.x + R2 * cos(a), c2.y + R2 * sin(a)];
    }
    if (s < s3) {
      const f = (s - s2) / g.S;
      return [B2.x + (B1.x - B2.x) * f, B2.y + (B1.y - B2.y) * f];
    }
    const a = dn + (s - s3) / R1;
    return [c1.x + R1 * cos(a), c1.y + R1 * sin(a)];
  };
  return {
    p,
    z1,
    z2,
    R1,
    R2,
    n,
    c1,
    c2,
    at,
    ph1: dn - s3 / R1 - PI / z1,
    ph2: up - s1 / R2 - PI / z2,
  };
})();

const render: MechanismRender = {
  draw(d, t) {
    const { p, z1, z2, R1, R2, n, c1, c2, at, ph1, ph2 } = CH;
    // Sprocket: tall pointed teeth with round roller seats between them.
    const sprocket = (c: Point, z: number, R: number, ang: number, o: Style) => {
      const pa = TAU / z,
        pts = [];
      for (let i = 0; i < z; i++) {
        const b = ang + i * pa;
        for (const [r, f] of [
          [R + 6, -0.1],
          [R + 6, 0.1],
          [R - 0.5, 0.3],
          [R - 3.2, 0.5],
          [R - 0.5, 0.7],
        ]) {
          pts.push([c.x + r * cos(b + f * pa), c.y + r * sin(b + f * pa)]);
        }
      }
      d.poly(pts, o);
      d.spokes(c.x, c.y, R - 4, ang, o);
    };
    sprocket(c1, z1, R1, t + ph1, d.IN());
    sprocket(c2, z2, R2, (t * R1) / R2 + ph2, d.OUT());
    const pts = Array.from({ length: n }, (_, k) => at(R1 * t + k * p));
    d.poly(pts, { fill: null, stroke: d.C.ink, w: 4.5 });
    d.poly(pts, { fill: null, stroke: d.C.bg, w: 1.6 });
    for (const [x, y] of pts) {
      d.circle(x, y, 3.1, { fill: d.C.ink, stroke: null });
      d.circle(x, y, 1.2, { fill: d.C.bg, stroke: null });
    }
  },
  output: (t) => t * 1.5,
};
export default render;
