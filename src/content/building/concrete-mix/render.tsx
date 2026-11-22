const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

// Three measures in the 1 : 2 : 3 ratio: cement, sand, gravel.
export default function ConcreteMixArt() {
  const bucket = (x: number, n: number, fill: string, t: string) => (
    <g key={t}>
      {Array.from({ length: n }, (_, i) => (
        <path
          key={i}
          d={`M${x - 11} ${92 - i * 22}h22l-3 20h-16z`}
          fill={fill}
          stroke="var(--ink)"
          strokeWidth="1"
        />
      ))}
      <text
        x={x}
        y="108"
        textAnchor="middle"
        style={{ ...label, fill: "var(--muted)", fontSize: 6 }}
      >
        {t}
      </text>
    </g>
  );
  return (
    <svg viewBox="0 0 160 120">
      {bucket(32, 1, "var(--metal)", "CEMENT")}
      {bucket(80, 2, "var(--tape)", "SAND")}
      {bucket(128, 3, "var(--ground)", "GRAVEL")}
      <text x="80" y="18" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        1 : 2 : 3
      </text>
    </svg>
  );
}
