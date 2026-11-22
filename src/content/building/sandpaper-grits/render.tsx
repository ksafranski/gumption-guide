const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Four swatches, grit getting finer left to right.
const sheets = [
  { x: 10, n: 60, r: 2.2, g: "60" },
  { x: 47, n: 120, r: 1.4, g: "120" },
  { x: 84, n: 220, r: 0.9, g: "180" },
  { x: 121, n: 420, r: 0.5, g: "320" },
];
const rnd = (i: number, k: number) =>
  (((Math.sin(i * 12.9898 + k * 78.233) * 43758.5453) % 1) + 1) % 1;

export default function SandpaperGritsArt() {
  return (
    <svg viewBox="0 0 160 120">
      {sheets.map((s) => (
        <g key={s.g}>
          <rect
            x={s.x}
            y="18"
            width="30"
            height="74"
            rx="2"
            fill="var(--tape)"
            opacity="0.6"
            stroke="var(--ink)"
            strokeWidth="1"
          />
          <g fill="var(--ink)" opacity="0.7">
            {Array.from({ length: s.n }, (_, i) => (
              <circle
                key={i}
                cx={s.x + 2 + rnd(i, s.n) * 26}
                cy={20 + rnd(i + 7, s.n) * 70}
                r={s.r}
              />
            ))}
          </g>
          <text x={s.x + 15} y="106" textAnchor="middle" style={label}>
            {s.g}
          </text>
        </g>
      ))}
    </svg>
  );
}
