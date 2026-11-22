const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Four 1-ft squares planted at 1, 4, 9 and 16 per square.
const S = 32;
const squares = [
  { x: 6, n: 1 },
  { x: 44, n: 2 },
  { x: 82, n: 3 },
  { x: 120, n: 4 },
];

export default function SquareFootSpacingArt() {
  return (
    <svg viewBox="0 0 160 120">
      {squares.map(({ x, n }) => {
        const step = S / n;
        const r = Math.max(1.6, step * 0.32);
        return (
          <g key={n}>
            <rect
              x={x}
              y="38"
              width={S}
              height={S}
              fill="var(--wood-grain)"
              opacity="0.45"
              stroke="var(--wood)"
              strokeWidth="1.5"
            />
            {Array.from({ length: n * n }, (_, i) => (
              <circle
                key={i}
                cx={x + step / 2 + (i % n) * step}
                cy={38 + step / 2 + Math.floor(i / n) * step}
                r={r}
                fill="var(--output-fill)"
                stroke="var(--output)"
                strokeWidth="1"
              />
            ))}
            <text x={x + S / 2} y="86" textAnchor="middle" style={label}>
              {n * n}
            </text>
          </g>
        );
      })}
      <text x="80" y="24" textAnchor="middle" style={{ ...label, fill: "var(--ink)" }}>
        PER SQUARE FOOT
      </text>
    </svg>
  );
}
