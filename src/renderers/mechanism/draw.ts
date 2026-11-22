// 2D drawing kit for mechanism diagrams, ported from the 507 Movements app.
// All mechanisms draw into a 400 × 300 logical space. Colors come from CSS variables.
// Client-only (uses the DOM).

export const TAU = Math.PI * 2;
export const W = 400;
export const H = 300;
export const mod = (a: number, n: number) => ((a % n) + n) % n;

export type Colors = {
  ink: string;
  muted: string;
  line: string;
  part: string;
  ground: string;
  bg: string;
  input: string;
  inputFill: string;
  output: string;
  outputFill: string;
};
export type Style = { fill?: string | null; stroke?: string | null; w?: number };
export type PaintOpts = Style & { dash?: number[]; dashOffset?: number; rule?: CanvasFillRule };
type Pt = [number, number];

export const colors: Colors = {
  ink: "#222",
  muted: "#777",
  line: "#ddd",
  part: "#eee",
  ground: "#999",
  bg: "#fff",
  input: "#d9480f",
  inputFill: "#fbe3d4",
  output: "#1f5fae",
  outputFill: "#dce7f6",
};

export function readColors(el: Element = document.documentElement) {
  const s = getComputedStyle(el);
  const g = (n: string) => s.getPropertyValue(n).trim();
  Object.assign(colors, {
    ink: g("--ink"),
    muted: g("--muted"),
    line: g("--line"),
    part: g("--part"),
    ground: g("--ground"),
    bg: g("--surface"),
    input: g("--input"),
    inputFill: g("--input-fill"),
    output: g("--output"),
    outputFill: g("--output-fill"),
  });
}

const layers = new WeakMap<HTMLCanvasElement, HTMLCanvasElement>();
const pick = <T>(v: T | undefined, dflt: T) => (v === undefined ? dflt : v);

type Core = ReturnType<typeof core>;
export type Draw = Core & {
  /** Draw into an offscreen layer so shapes can have holes cut out (L.cut). */
  layer(fn: (L: Draw) => void): void;
  /** Internal (ring) gear: teeth point inward. */
  ringGear(cx: number, cy: number, z: number, m: number, ang: number, o?: Style): number;
};

function core(ctx: CanvasRenderingContext2D) {
  const C = colors;
  const d = {
    C,
    ctx,
    /** Input (driver) style: orange. */
    IN: (): Style => ({ fill: C.inputFill, stroke: C.input }),
    /** Output (driven) style: blue. */
    OUT: (): Style => ({ fill: C.outputFill, stroke: C.output }),
    /** Fixed frame style: gray. */
    GND: (): Style => ({ fill: C.part, stroke: C.ground }),
    paint(o: PaintOpts = {}) {
      const fill = pick(o.fill, null);
      const stroke = pick(o.stroke, C.ink);
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill(o.rule || "nonzero");
      }
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = o.w || 1.4;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.setLineDash(o.dash || []);
        if (o.dashOffset) ctx.lineDashOffset = o.dashOffset;
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.lineDashOffset = 0;
      }
    },
    line(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      o: { color?: string; w?: number; dash?: number[] } = {},
    ) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      d.paint({ stroke: o.color || C.ink, w: o.w, dash: o.dash });
    },
    circle(x: number, y: number, r: number, o: PaintOpts = {}) {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, TAU);
      d.paint(o);
    },
    arc(x: number, y: number, r: number, a0: number, a1: number, o: PaintOpts = {}) {
      ctx.beginPath();
      ctx.arc(x, y, r, a0, a1);
      d.paint({ fill: null, ...o });
    },
    poly(pts: Pt[], o: PaintOpts & { close?: boolean } = {}) {
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      if (o.close !== false) ctx.closePath();
      d.paint(o);
    },
    /** A link: a capsule between two joint centers. */
    bar(x1: number, y1: number, x2: number, y2: number, o: Style & { width?: number } = {}) {
      const r = (o.width || 10) / 2;
      const a = Math.atan2(y2 - y1, x2 - x1);
      ctx.beginPath();
      ctx.arc(x1, y1, r, a + Math.PI / 2, a + 1.5 * Math.PI);
      ctx.arc(x2, y2, r, a - Math.PI / 2, a + Math.PI / 2);
      ctx.closePath();
      d.paint({ fill: pick(o.fill, C.part), stroke: pick(o.stroke, C.ink), w: o.w });
    },
    box(cx: number, cy: number, w: number, h: number, ang = 0, o: Style = {}) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ang);
      ctx.beginPath();
      ctx.rect(-w / 2, -h / 2, w, h);
      d.paint({ fill: pick(o.fill, C.part), stroke: pick(o.stroke, C.ink), w: o.w });
      ctx.restore();
    },
    pin(x: number, y: number, r = 3.2, o: Style = {}) {
      d.circle(x, y, r, { fill: o.fill || C.bg, stroke: o.stroke || C.ink, w: 1.2 });
    },
    /** Fixed pivot: triangle on hatched ground. dir 1 = floor, -1 = ceiling. */
    ground(x: number, y: number, s = 11, dir = 1) {
      const by = y + s * 1.3 * dir;
      d.poly(
        [
          [x, y],
          [x - s * 0.75, by],
          [x + s * 0.75, by],
        ],
        { fill: C.part, stroke: C.ground, w: 1.2 },
      );
      d.hatch(x - s * 1.2, by, s * 2.4, dir);
      d.pin(x, y);
    },
    /** Hatched line marking fixed frame. dir 1 hatches below, -1 above. */
    hatch(x: number, y: number, len: number, dir = 1) {
      d.line(x, y, x + len, y, { color: C.ground, w: 1.2 });
      ctx.beginPath();
      for (let i = 4; i <= len; i += 6) {
        ctx.moveTo(x + i, y);
        ctx.lineTo(x + i - 4, y + 5 * dir);
      }
      d.paint({ stroke: C.ground, w: 0.9 });
    },
    /** Vertical hatched rail. dir 1 hatches right, -1 left. */
    vhatch(x: number, y: number, len: number, dir = 1) {
      d.line(x, y, x, y + len, { color: C.ground, w: 1.2 });
      ctx.beginPath();
      for (let i = 4; i <= len; i += 6) {
        ctx.moveTo(x, y + i);
        ctx.lineTo(x + 5 * dir, y + i - 4);
      }
      d.paint({ stroke: C.ground, w: 0.9 });
    },
    /** Spur gear: z teeth, module m, rotation ang. o.teeth keeps only some teeth. */
    gear(
      cx: number,
      cy: number,
      z: number,
      m: number,
      ang: number,
      o: Style & { teeth?: number[] } = {},
    ) {
      const rp = (m * z) / 2,
        ra = rp + m,
        rd = rp - 1.25 * m,
        p = TAU / z;
      const has = o.teeth ? (i: number) => o.teeth!.includes(i) : () => true;
      const pts: Pt[] = [];
      for (let i = 0; i < z; i++) {
        const b = ang + i * p;
        for (const [r, f] of [
          [rd, -0.5],
          [rd, -0.3],
          [ra, -0.13],
          [ra, 0.13],
          [rd, 0.3],
        ]) {
          const rr = has(i) ? r : rd;
          pts.push([cx + rr * Math.cos(b + f * p), cy + rr * Math.sin(b + f * p)]);
        }
      }
      d.poly(pts, { fill: o.fill || C.part, stroke: o.stroke || C.ink, w: 1.3 });
      d.spokes(cx, cy, rp, ang, o);
      return rp;
    },
    /** Lightening holes / marker so rotation is visible. */
    spokes(cx: number, cy: number, r: number, ang: number, o: Style = {}) {
      const stroke = o.stroke || C.ink;
      if (r >= 34) {
        const n = 5,
          hr = r * 0.17,
          at = r * 0.55;
        for (let i = 0; i < n; i++) {
          const a = ang + Math.PI / 5 + (i * TAU) / n;
          d.circle(cx + at * Math.cos(a), cy + at * Math.sin(a), hr, {
            fill: C.bg,
            stroke,
            w: 1.1,
          });
        }
      } else {
        d.circle(cx + r * 0.55 * Math.cos(ang), cy + r * 0.55 * Math.sin(ang), 2.6, {
          fill: stroke,
          stroke: null,
        });
      }
      d.circle(cx, cy, Math.max(3.5, r * 0.14), { fill: C.bg, stroke, w: 1.2 });
    },
    /** Spoked pulley wheel. */
    pulley(c: { x: number; y: number }, r: number, a: number, o: Style) {
      const stroke = o.stroke || C.ink;
      d.circle(c.x, c.y, r, o);
      d.circle(c.x, c.y, r - 7, { fill: C.bg, stroke, w: 1 });
      for (let i = 0; i < 4; i++) {
        const s = a + (i * Math.PI) / 2;
        d.line(c.x, c.y, c.x + (r - 7) * Math.cos(s), c.y + (r - 7) * Math.sin(s), {
          color: stroke,
          w: 3,
        });
      }
      d.circle(c.x, c.y, 7, { fill: C.bg, stroke });
    },
    cut(fn: () => void) {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      fn();
      ctx.restore();
    },
    clip(fn: () => void, clipFn: (c: CanvasRenderingContext2D) => void) {
      ctx.save();
      ctx.beginPath();
      clipFn(ctx);
      ctx.clip();
      fn();
      ctx.restore();
    },
  };
  return d;
}

export function make(ctx: CanvasRenderingContext2D): Draw {
  const C = colors;
  const d = core(ctx) as Draw;
  d.layer = (fn: (L: Draw) => void) => {
    const cv = ctx.canvas as HTMLCanvasElement;
    let off = layers.get(cv);
    if (!off) {
      off = document.createElement("canvas");
      layers.set(cv, off);
    }
    if (off.width !== cv.width || off.height !== cv.height) {
      off.width = cv.width;
      off.height = cv.height;
    }
    const o = off.getContext("2d")!;
    o.setTransform(1, 0, 0, 1, 0, 0);
    o.clearRect(0, 0, off.width, off.height);
    o.setTransform(ctx.getTransform());
    fn(make(o));
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.drawImage(off, 0, 0);
    ctx.restore();
  };
  d.ringGear = (cx: number, cy: number, z: number, m: number, ang: number, o: Style = {}) => {
    const rp = (m * z) / 2,
      rt = rp - m,
      rr = rp + 1.25 * m,
      p = TAU / z,
      outer = rr + 12;
    const pts: Pt[] = [];
    for (let i = 0; i < z; i++) {
      const b = ang + i * p;
      for (const [r, f] of [
        [rr, -0.5],
        [rr, -0.3],
        [rt, -0.13],
        [rt, 0.13],
        [rr, 0.3],
      ]) {
        pts.push([cx + r * Math.cos(b + f * p), cy + r * Math.sin(b + f * p)]);
      }
    }
    const fill = o.fill || C.part,
      stroke = o.stroke || C.ink;
    d.layer((L) => {
      L.circle(cx, cy, outer, { fill, stroke });
      L.cut(() => L.poly(pts, { fill: "#000", stroke: null }));
      L.poly(pts, { fill: null, stroke, w: 1.3 });
    });
    return rp;
  };
  return d;
}

/** Intersection of circle (p0, r0) and circle (p1, r1); side = ±1 picks the solution. */
export function meet(
  p0: { x: number; y: number },
  r0: number,
  p1: { x: number; y: number },
  r1: number,
  side: number,
) {
  const dx = p1.x - p0.x,
    dy = p1.y - p0.y,
    dd = Math.hypot(dx, dy);
  const a = (r0 * r0 - r1 * r1 + dd * dd) / (2 * dd),
    h = Math.sqrt(Math.max(0, r0 * r0 - a * a));
  const mx = p0.x + (a * dx) / dd,
    my = p0.y + (a * dy) / dd;
  return { x: mx - (side * h * dy) / dd, y: my + (side * h * dx) / dd };
}

/** Size a canvas to its CSS box and draw at phase t. */
export function render(canvas: HTMLCanvasElement, draw: (d: Draw, t: number) => void, t: number) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.round(canvas.clientWidth * dpr),
    h = Math.round(canvas.clientHeight * dpr);
  if (!w || !h) return;
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  const ctx = canvas.getContext("2d")!;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, w, h);
  const s = Math.min(w / W, h / H);
  ctx.setTransform(s, 0, 0, s, (w - W * s) / 2, (h - H * s) / 2);
  draw(make(ctx), t);
}

/** Sample output(t) over one cycle for the motion graph. */
export function sampleCurve(output: (t: number) => number, n = 240) {
  const ys = Array.from({ length: n + 1 }, (_, i) => output((i / n) * TAU));
  let lo = Math.min(...ys),
    hi = Math.max(...ys);
  if (hi - lo < 1e-6) {
    lo -= 1;
    hi += 1;
  }
  return { ys, lo, hi };
}

export function drawGraph(
  canvas: HTMLCanvasElement,
  curve: ReturnType<typeof sampleCurve>,
  f: number,
) {
  const { ys, lo, hi } = curve;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const w = Math.round(canvas.clientWidth * dpr),
    h = Math.round(canvas.clientHeight * dpr);
  if (!w || !h) return;
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  const ctx = canvas.getContext("2d")!,
    C = colors,
    pad = 8 * dpr;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, w, h);
  const X = (i: number) => (i / (ys.length - 1)) * w;
  const Y = (y: number) => h - pad - ((y - lo) / (hi - lo)) * (h - 2 * pad);
  ctx.strokeStyle = C.line;
  ctx.lineWidth = dpr;
  for (const g of [0.25, 0.5, 0.75]) {
    ctx.beginPath();
    ctx.moveTo(g * w, 0);
    ctx.lineTo(g * w, h);
    ctx.stroke();
  }
  ctx.beginPath();
  ys.forEach((y, i) => (i ? ctx.lineTo(X(i), Y(y)) : ctx.moveTo(X(i), Y(y))));
  ctx.strokeStyle = C.output;
  ctx.lineWidth = 1.8 * dpr;
  ctx.lineJoin = "round";
  ctx.stroke();
  if (f < 0) return;
  const y = ys[Math.round(f * (ys.length - 1))];
  ctx.strokeStyle = C.input;
  ctx.lineWidth = dpr;
  ctx.beginPath();
  ctx.moveTo(f * w, 0);
  ctx.lineTo(f * w, h);
  ctx.stroke();
  ctx.fillStyle = C.output;
  ctx.beginPath();
  ctx.arc(f * w, Y(y), 4 * dpr, 0, TAU);
  ctx.fill();
}
