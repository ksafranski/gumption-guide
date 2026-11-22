// A stacked cord in perspective, with its 4 × 4 × 8 ft dimensions.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 8,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function WoodVolumeArt() {
  const ends = [];
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 8; c++) ends.push([22 + c * 13 + (r % 2) * 6, 88 - r * 13]);
  return (
    <svg viewBox="0 0 160 120">
      <path d="M16 95l20-16h112l-20 16z" fill="var(--part)" opacity="0.5" />
      <path d="M128 95V43l20-16v52z" fill="var(--wood)" opacity="0.6" />
      <path d="M16 43l20-16h112l-20 16z" fill="var(--wood)" opacity="0.4" />
      <rect
        x="16"
        y="43"
        width="112"
        height="52"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <g fill="var(--wood)" stroke="var(--wood-grain)" strokeWidth="1">
        {ends.map(([x, y]) => (
          <circle key={`${x},${y}`} cx={x} cy={y} r="6" />
        ))}
      </g>
      <text x="72" y="110" textAnchor="middle" style={label}>
        8 FT
      </text>
      <text x="8" y="72" textAnchor="middle" style={label} transform="rotate(-90 8 72)">
        4 FT
      </text>
      <text x="146" y="20" textAnchor="middle" style={label}>
        4 FT
      </text>
    </svg>
  );
}
