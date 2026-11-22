const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

// Grass blades: only the top third comes off.
export default function LawnMowingArt() {
  const blades = Array.from({ length: 14 }, (_, i) => 14 + i * 10);
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 104h152" stroke="var(--ground)" strokeWidth="2" />
      {blades.map((x, i) => (
        <g key={x}>
          <path
            d={`M${x} 104C${x} 80 ${x + 2} 60 ${x + (i % 2 ? 4 : -2)} 44`}
            fill="none"
            stroke="var(--output)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}
      <path d="M4 64h152" stroke="var(--input)" strokeWidth="1.5" strokeDasharray="5 3" />
      <rect x="4" y="38" width="152" height="26" fill="var(--surface)" opacity="0.55" />
      <text x="150" y="56" textAnchor="end" style={{ ...label, fill: "var(--input)" }}>
        ⅓ MAX
      </text>
    </svg>
  );
}
