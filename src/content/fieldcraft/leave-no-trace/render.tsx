// Boot prints fading out along the trail: the only mark you leave should be temporary.
const print = (x: number, y: number, o: number) => (
  <g key={x} transform={`translate(${x} ${y}) rotate(58)`} opacity={o}>
    <path d="M0-16c6 0 8 5 7 10-1 4-3 6-3 9h-8c0-3-2-5-3-9-1-5 1-10 7-10z" fill="var(--ground)" />
    <rect x="-4" y="6" width="8" height="9" rx="3" fill="var(--ground)" />
  </g>
);

export default function LeaveNoTraceArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M6 112C40 92 64 72 84 60s40-30 70-48"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      {[
        [30, 92, 1],
        [56, 74, 0.65],
        [84, 56, 0.35],
        [112, 38, 0.12],
      ].map(([x, y, o]) => print(x, y, o))}
      <path
        d="M128 96c-12-10-6-28 12-30 2 16-4 24-12 30zM128 96c2-8 5-15 10-23"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
