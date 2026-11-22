// Footprints along a measured line, every left foot counted.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;
const foot = (x: number, y: number, left: boolean) => (
  <ellipse
    key={`${x}`}
    cx={x}
    cy={y}
    rx="7"
    ry="4"
    fill={left ? "var(--input-fill)" : "var(--part)"}
    stroke={left ? "var(--input)" : "var(--ground)"}
    strokeWidth="1.5"
  />
);

export default function PaceCountArt() {
  const steps = Array.from({ length: 8 }, (_, i) => ({ x: 20 + i * 17, left: i % 2 === 0 }));
  return (
    <svg viewBox="0 0 160 120">
      <path d="M12 86h136" stroke="var(--output)" strokeWidth="1.5" />
      <path d="M12 80v12M148 80v12" stroke="var(--output)" strokeWidth="1.5" />
      <text x="80" y="104" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        100 m
      </text>
      {steps.map((s) => foot(s.x, s.left ? 56 : 68, s.left))}
      {steps
        .filter((s) => s.left)
        .map((s, i) => (
          <text
            key={s.x}
            x={s.x}
            y="44"
            textAnchor="middle"
            style={{ ...label, fill: "var(--input)" }}
          >
            {i + 1}
          </text>
        ))}
      <g fill="var(--tape)" stroke="var(--ink)" strokeWidth="1">
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={30 + i * 10} cy="18" r="4" />
        ))}
      </g>
      <path d="M22 18h50" stroke="var(--rope)" strokeWidth="1.5" />
    </svg>
  );
}
