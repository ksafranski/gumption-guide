const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Washers face-on: flat, fender, split lock, tooth, sealing.
export default function WasherTypesArt() {
  const teeth = Array.from({ length: 10 }, (_, i) => {
    const a = (i * Math.PI) / 5;
    return `M${(5 * Math.cos(a)).toFixed(1)} ${(5 * Math.sin(a)).toFixed(1)}L${(12 * Math.cos(a)).toFixed(1)} ${(12 * Math.sin(a)).toFixed(1)}`;
  }).join("");
  return (
    <svg viewBox="0 0 160 120">
      <g transform="translate(28 34)">
        <circle r="12" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
        <circle r="5" fill="var(--surface)" stroke="var(--ink)" />
        <text y="24" textAnchor="middle" style={label}>
          FLAT
        </text>
      </g>
      <g transform="translate(80 34)">
        <circle r="20" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
        <circle r="5" fill="var(--surface)" stroke="var(--ink)" />
        <text y="32" textAnchor="middle" style={label}>
          FENDER
        </text>
      </g>
      <g transform="translate(132 34)">
        <circle r="11" fill="none" stroke="var(--metal)" strokeWidth="6" />
        <path d="M9 -4l4 2" stroke="var(--surface)" strokeWidth="3" />
        <text y="24" textAnchor="middle" style={label}>
          SPLIT
        </text>
      </g>
      <g transform="translate(52 88)">
        <circle r="12" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
        <path d={teeth} stroke="var(--ink)" strokeWidth="1" />
        <circle r="5" fill="var(--surface)" stroke="var(--ink)" />
        <text y="24" textAnchor="middle" style={label}>
          TOOTH
        </text>
      </g>
      <g transform="translate(108 88)">
        <circle r="12" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
        <circle r="9" fill="var(--ink)" />
        <circle r="5" fill="var(--surface)" stroke="var(--ink)" />
        <text y="24" textAnchor="middle" style={label}>
          SEALING
        </text>
      </g>
    </svg>
  );
}
