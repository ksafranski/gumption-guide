// A framed wall with a window opening: plates, studs at 16 in, kings, jacks, header, cripples.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 5.5,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function WallFramingArt() {
  const studs = [8, 26, 116, 134, 150];
  const wood = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 0.8 } as const;
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="8" width="152" height="4" {...wood} />
      <rect x="4" y="12" width="152" height="4" {...wood} />
      <rect x="4" y="104" width="152" height="4" {...wood} />
      {studs.map((x) => (
        <rect key={x} x={x - 2} y="16" width="4" height="88" {...wood} />
      ))}
      <rect x="42" y="16" width="4" height="88" {...wood} />
      <rect x="98" y="16" width="4" height="88" {...wood} />
      <rect x="46" y="38" width="4" height="66" {...wood} />
      <rect x="94" y="38" width="4" height="66" {...wood} />
      <rect
        x="46"
        y="30"
        width="52"
        height="8"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1"
      />
      <rect x="50" y="74" width="44" height="4" {...wood} />
      {[60, 72, 84].map((x) => (
        <g key={x}>
          <rect x={x - 2} y="16" width="4" height="14" {...wood} />
          <rect x={x - 2} y="78" width="4" height="26" {...wood} />
        </g>
      ))}
      <text x="72" y="36" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        HEADER
      </text>
      <text x="17" y="117" textAnchor="middle" style={label}>
        16 OC
      </text>
      <path d="M8 113h18" stroke="var(--muted)" strokeWidth="0.8" />
    </svg>
  );
}
