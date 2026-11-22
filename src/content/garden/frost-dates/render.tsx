const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// A year strip: frost risk at both ends, the growing season between last and first frost.
const MONTHS = "JFMAMJJASOND".split("");

export default function FrostDatesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="10" y="50" width="140" height="18" fill="var(--output-fill)" />
      <rect x="10" y="50" width="38" height="18" fill="var(--output)" opacity="0.5" />
      <rect x="118" y="50" width="32" height="18" fill="var(--output)" opacity="0.5" />
      <rect x="48" y="50" width="70" height="18" fill="var(--input-fill)" />
      {MONTHS.map((m, i) => (
        <text key={i} x={15.8 + i * 11.67} y="80" textAnchor="middle" style={label}>
          {m}
        </text>
      ))}
      <path d="M48 40v36M118 40v36" stroke="var(--ink)" strokeWidth="1.5" />
      <text x="48" y="34" textAnchor="middle" style={{ ...label, fill: "var(--ink)" }}>
        LAST
      </text>
      <text x="118" y="34" textAnchor="middle" style={{ ...label, fill: "var(--ink)" }}>
        FIRST
      </text>
      <text x="83" y="62" textAnchor="middle" style={{ ...label, fill: "var(--input)" }}>
        GROWING SEASON
      </text>
      <g stroke="var(--output)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M28 94v14M22 97l12 8M22 105l12-8M134 94v14M128 97l12 8M128 105l12-8" />
      </g>
    </svg>
  );
}
