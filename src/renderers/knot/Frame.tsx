import type { KnotRender } from "./types";

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
  const segs = k.segs.map((s, i) => ({ ...s, i, z: s.z ?? i }));
  const shown = segs.filter((s) => s.i < cur.show);
  const cls = (i: number) => (!plain && i >= prevShow ? "k-rope k-new" : "k-rope");
  const rope = (s: (typeof segs)[number]) => (
    <g key={s.i} className={cls(s.i)}>
      <path d={s.d} className="k-o" />
      <path d={s.d} className="k-f" />
      <path d={s.d} className="k-lay" />
      {s.i === cur.show - 1 && <path d={s.d} className="k-tip" markerEnd="url(#k-whip)" />}
    </g>
  );
  return (
    <svg viewBox={k.viewBox ?? "0 0 320 240"} className="k-svg" role="img" aria-label={label}>
      <defs>
        <marker
          id="k-whip"
          viewBox="-4 -6 8 12"
          markerWidth="8"
          markerHeight="12"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <rect x={-3} y={-5} width={5} height={10} rx={1} className="k-whipcap" />
        </marker>
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
      {shown
        .filter((s) => s.back)
        .sort((a, b) => a.z - b.z)
        .map(rope)}
      {k.base}
      {shown
        .filter((s) => !s.back)
        .sort((a, b) => a.z - b.z)
        .map(rope)}
      {segs
        .filter((s) => s.i >= cur.show && s.i < next)
        .map((s) => (
          <path key={`g${s.i}`} d={s.d} className={s.back ? "k-ghost k-ghost-back" : "k-ghost"} />
        ))}
      {cur.extra}
    </svg>
  );
}
