const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Jar test: water over settled layers of clay, silt and sand.
export default function SoilTextureArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="44" y="8" width="44" height="8" rx="2" fill="var(--metal)" stroke="var(--ink)" />
      <path
        d="M40 16h52v90c0 4-2 6-6 6H46c-4 0-6-2-6-6z"
        fill="var(--output-fill)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <rect x="41" y="88" width="50" height="22" fill="var(--tape)" />
      <rect x="41" y="70" width="50" height="18" fill="var(--wood)" />
      <rect x="41" y="60" width="50" height="10" fill="var(--wood-grain)" />
      <g fill="var(--ink)" opacity="0.5">
        {[46, 54, 62, 70, 78, 86, 50, 66, 82].map((x, i) => (
          <circle key={i} cx={x} cy={i < 6 ? 98 : 104} r="2" />
        ))}
      </g>
      <path d="M96 65h8M96 79h8M96 99h8" stroke="var(--muted)" strokeWidth="1" />
      <text x="108" y="67" style={label}>
        CLAY
      </text>
      <text x="108" y="81" style={label}>
        SILT
      </text>
      <text x="108" y="101" style={label}>
        SAND
      </text>
    </svg>
  );
}
