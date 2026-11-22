const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Edges of three panels: plywood plies, OSB strands, MDF uniform.
export default function SheetGoodsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g transform="translate(12 18)">
        {[0, 1, 2, 3, 4].map((i) => (
          <rect
            key={i}
            y={i * 5}
            width="136"
            height="5"
            fill={i % 2 ? "var(--wood-grain)" : "var(--wood)"}
            stroke="var(--ink)"
            strokeWidth="0.5"
          />
        ))}
        <text x="136" y="-3" style={label} textAnchor="end">
          PLYWOOD
        </text>
      </g>
      <g transform="translate(12 56)">
        <rect width="136" height="20" fill="var(--wood)" stroke="var(--ink)" strokeWidth="0.8" />
        {Array.from({ length: 22 }, (_, i) => (
          <path
            key={i}
            d={`M${4 + i * 6} ${3 + (i % 3) * 5}l${6 + (i % 4)} ${i % 2 ? 3 : -2}`}
            stroke="var(--wood-grain)"
            strokeWidth="2"
          />
        ))}
        <text x="136" y="-3" style={label} textAnchor="end">
          OSB
        </text>
      </g>
      <g transform="translate(12 92)">
        <rect
          width="136"
          height="20"
          fill="var(--tape)"
          opacity="0.55"
          stroke="var(--ink)"
          strokeWidth="0.8"
        />
        <text x="136" y="-3" style={label} textAnchor="end">
          MDF
        </text>
      </g>
    </svg>
  );
}
