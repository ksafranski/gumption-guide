// One square metre next to one square foot, drawn to scale (1 m = 3.28 ft).
const M = 82;
const FT = M * 0.3048;
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function AreaArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="16"
        y={110 - M}
        width={M}
        height={M}
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <g stroke="var(--output)" strokeWidth="0.6" opacity="0.6">
        {[1, 2, 3].map((i) => (
          <path key={i} d={`M${16 + i * FT} ${110 - M}V110M16 ${110 - i * FT}h${M}`} />
        ))}
      </g>
      <rect
        x="118"
        y={110 - FT}
        width={FT}
        height={FT}
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <text
        x={16 + M / 2}
        y={110 - M / 2 + 3}
        textAnchor="middle"
        style={{ ...label, fill: "var(--output)" }}
      >
        1 m²
      </text>
      <text
        x={118 + FT / 2}
        y={110 - FT - 6}
        textAnchor="middle"
        style={{ ...label, fill: "var(--input)" }}
      >
        1 ft²
      </text>
      <text x={16 + M / 2} y="18" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        ≈ 10.8 ft²
      </text>
    </svg>
  );
}
