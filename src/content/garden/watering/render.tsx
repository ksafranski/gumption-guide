const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

// Deep roots under deep watering vs shallow roots under a sprinkle; a can catching an inch.
export default function WateringArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="44" width="152" height="72" fill="var(--wood-grain)" opacity="0.4" />
      <path d="M4 44h152" stroke="var(--ground)" strokeWidth="2" />
      <rect x="20" y="44" width="40" height="56" fill="var(--output-fill)" opacity="0.7" />
      <rect x="100" y="44" width="40" height="12" fill="var(--output-fill)" opacity="0.7" />
      <g stroke="var(--wood)" strokeWidth="1.5" fill="none">
        <path d="M40 44v50M40 60l-10 20M40 66l12 22M40 76l-6 16" />
        <path d="M120 44v10M120 48l-10 6M120 48l10 6" />
      </g>
      <g stroke="var(--output)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M30 12v12M40 8v16M50 12v12" />
        <path d="M114 30v4M126 30v4" />
      </g>
      <text x="40" y="112" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        DEEP
      </text>
      <text x="120" y="70" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        SHALLOW
      </text>
    </svg>
  );
}
