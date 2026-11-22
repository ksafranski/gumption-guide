import { firstPoint, lastPoint, smoothJoints } from "./geometry";
import type { KnotRender, Seg } from "./types";

const smoothed = new WeakMap<Seg[], Seg[]>();
const smooth = (segs: Seg[]) => {
  let s = smoothed.get(segs);
  if (!s) smoothed.set(segs, (s = smoothJoints(segs)));
  return s;
};
const key = ([x, y]: [number, number]) => `${Math.round(x * 2)},${Math.round(y * 2)}`;

/** Renders one step of a knot. `step` is 0-based. */
export function KnotFrame({
  k,
  step,
  ghost = true,
  plain = false,
  label,
}: {
  k: KnotRender;
  step: number;
  ghost?: boolean;
  /** No "this step" highlight (thumbnails). */
  plain?: boolean;
  label: string;
}) {
  const cur = k.steps[Math.min(step, k.steps.length - 1)];
  const prevShow = step > 0 ? k.steps[step - 1].show : 0;
  const next = ghost && step + 1 < k.steps.length ? k.steps[step + 1].show : cur.show;
  const segs = smooth(k.segs).map((s, i) => ({ ...s, i, z: s.z ?? i }));
  const shown = segs.filter((s) => s.i < cur.show);
  const order = [
    ...shown.filter((s) => s.back).sort((a, b) => a.z - b.z),
    ...shown.filter((s) => !s.back).sort((a, b) => a.z - b.z),
  ];
  // Joints and loose ends: each point gets a round "knuckle" of outline colour and a round
  // dab of fill, both drawn with the first segment laid down there. A free end becomes a soft,
  // bordered tip; at a joint the later segment's square end covers the dab, so only the notch
  // on the outside of a bend is filled and no round end shows in the other segment's colour.
  // Joints behind a post/spar belong to the back segment, so they're hidden under the wood.
  const ends = new Map<number, [number, number][]>();
  const seen = new Set<string>();
  for (const s of order) {
    for (const p of [firstPoint(s.d), lastPoint(s.d)]) {
      if (seen.has(key(p))) continue;
      seen.add(key(p));
      ends.set(s.i, [...(ends.get(s.i) ?? []), p]);
    }
  }
  const cls = (i: number) => (!plain && i >= prevShow ? "k-rope k-new" : "k-rope");
  const rope = (s: (typeof segs)[number]) => (
    <g key={s.i} className={cls(s.i)}>
      {ends.get(s.i)?.map(([x, y]) => (
        <circle key={`k${x},${y}`} cx={x} cy={y} r={5} className="k-knuckle" />
      ))}
      <path d={s.d} className="k-o" />
      {ends.get(s.i)?.map(([x, y]) => (
        <circle key={`c${x},${y}`} cx={x} cy={y} r={3.5} className="k-cap" />
      ))}
      <path d={s.d} className="k-f" />
      <path d={s.d} className="k-lay" />
    </g>
  );
  return (
    <svg viewBox={k.viewBox ?? "0 0 320 240"} className="k-svg" role="img" aria-label={label}>
      <defs>
        <marker
          id="k-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10z" className="k-arrowhead" />
        </marker>
      </defs>
      {order.filter((s) => s.back).map(rope)}
      {k.base}
      {order.filter((s) => !s.back).map(rope)}
      {segs
        .filter((s) => s.i >= cur.show && s.i < next)
        .map((s) => (
          <path key={`g${s.i}`} d={s.d} className={s.back ? "k-ghost k-ghost-back" : "k-ghost"} />
        ))}
      {!plain && cur.extra}
    </svg>
  );
}
