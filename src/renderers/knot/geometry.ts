// Shared knot geometry helpers. Paths use absolute M/L/C commands with "x y" pairs.
import type { Seg } from "./types";

/** Map every "x y" pair in a path through f. */
export function xf(d: string, f: (x: number, y: number) => [number, number]): string {
  return d.replace(/(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g, (_, a, b) =>
    f(+a, +b)
      .map((n) => +n.toFixed(1))
      .join(" "),
  );
}

export const mapSegs = (segs: Seg[], f: (x: number, y: number) => [number, number]): Seg[] =>
  segs.map((s) => ({ ...s, d: xf(s.d, f) }));

/**
 * Clove hitch on a vertical post (x 140–180), front view.
 * Standing part enters left at y=88; the end exits right at y=142, under the crossing turn.
 */
export const CLOVE: Seg[] = [
  { d: "M 12 88 L 176 88 C 190 88 192 72 182 68" },
  { d: "M 182 68 L 142 56 C 130 54 128 66 138 68", back: true },
  { d: "M 138 68 C 144 66 148 72 150 78 L 172 150 C 175 160 188 160 184 150", z: 9 },
  { d: "M 184 150 L 142 134 C 130 130 128 142 138 142", back: true },
  { d: "M 138 142 L 300 142", z: 5 },
];

type Cmd = { c: string; p: [number, number][] };

function parsePath(d: string): Cmd[] {
  const out: Cmd[] = [];
  for (const m of d.matchAll(/([MLC])([^MLC]*)/g)) {
    const n = (m[2].match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
    const p: [number, number][] = [];
    for (let i = 0; i + 1 < n.length; i += 2) p.push([n[i], n[i + 1]]);
    out.push({ c: m[1], p });
  }
  return out;
}

const fmt = (cmds: Cmd[]) =>
  cmds
    .map((k) => `${k.c} ${k.p.map(([x, y]) => `${+x.toFixed(1)} ${+y.toFixed(1)}`).join(" ")}`)
    .join(" ");

export const firstPoint = (d: string) => parsePath(d)[0].p[0];
export const lastPoint = (d: string) => parsePath(d).at(-1)!.p.at(-1)!;

/** End point of a path and the unit direction the rope is travelling there. */
export function endOf(d: string): { p: [number, number]; t: [number, number] } {
  const cmds = parsePath(d);
  const end = cmds.at(-1)!;
  const p = end.p.at(-1)!;
  const q = end.p.length > 1 ? end.p.at(-2)! : cmds.at(-2)!.p.at(-1)!;
  return { p, t: unit(p[0] - q[0], p[1] - q[1]) };
}

const unit = (x: number, y: number): [number, number] => {
  const l = Math.hypot(x, y) || 1;
  return [x / l, y / l];
};

/**
 * Where one segment ends and the next begins, turn both curves to share a tangent so the
 * rope bends instead of kinking. Lines keep their direction; curve handles keep their length.
 * Sharp reversals (deliberate hairpins) and segments that don't meet are left alone.
 */
export function smoothJoints(segs: Seg[], maxTurn = 100): Seg[] {
  const parsed = segs.map((s) => parsePath(s.d));
  for (let i = 0; i + 1 < parsed.length; i++) {
    const a = parsed[i];
    const b = parsed[i + 1];
    const end = a.at(-1)!;
    const J = end.p.at(-1)!;
    const bStart = b[0].p[0];
    if (Math.hypot(J[0] - bStart[0], J[1] - bStart[1]) > 0.5 || b.length < 2) continue;
    const nxt = b[1];
    // Incoming handle (or the point a line comes from) and outgoing handle.
    const prevPt = end.p.length > 1 ? end.p.at(-2)! : a.at(-2)!.p.at(-1)!;
    const nextPt = nxt.p[0];
    const tin = unit(J[0] - prevPt[0], J[1] - prevPt[1]);
    const tout = unit(nextPt[0] - J[0], nextPt[1] - J[1]);
    const turn =
      (Math.acos(Math.max(-1, Math.min(1, tin[0] * tout[0] + tin[1] * tout[1]))) * 180) / Math.PI;
    if (turn < 1 || turn > maxTurn) continue;
    const inC = end.c === "C";
    const outC = nxt.c === "C";
    if (!inC && !outC) continue;
    const dir = !inC ? tin : !outC ? tout : unit(tin[0] + tout[0], tin[1] + tout[1]);
    if (inC) {
      const k = end.p.length - 2;
      const l = Math.hypot(J[0] - end.p[k][0], J[1] - end.p[k][1]);
      end.p[k] = [J[0] - dir[0] * l, J[1] - dir[1] * l];
    }
    if (outC) {
      const l = Math.hypot(nextPt[0] - J[0], nextPt[1] - J[1]);
      nxt.p[0] = [J[0] + dir[0] * l, J[1] + dir[1] * l];
    }
  }
  return segs.map((s, i) => ({ ...s, d: fmt(parsed[i]) }));
}
