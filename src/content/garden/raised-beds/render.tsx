const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

// Raised bed in perspective: 4 ft wide, 12 in deep, reachable from both sides.
export default function RaisedBedsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M20 60l30-24h100l-30 24z" fill="var(--wood-grain)" opacity="0.7" />
      <path d="M20 60h100v30H20z" fill="var(--wood)" stroke="var(--ink)" strokeWidth="1" />
      <path
        d="M120 60l30-24v30l-30 24z"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
        opacity="0.85"
      />
      <path d="M20 75h100M120 75l30-24" stroke="var(--wood-grain)" />
      <g fill="var(--output-fill)" stroke="var(--output)" strokeWidth="1">
        {[46, 70, 94, 118].map((x, i) => (
          <circle key={x} cx={x - (i % 2) * 6} cy={48 + (i % 2) * 6} r="6" />
        ))}
      </g>
      <path d="M8 60v30M4 60h8M4 90h8" stroke="var(--output)" strokeWidth="1.2" />
      <text x="6" y="104" style={{ ...label, fill: "var(--output)" }}>
        12 IN
      </text>
      <path d="M126 96l28-22" stroke="var(--input)" strokeWidth="1.2" />
      <text x="132" y="112" style={{ ...label, fill: "var(--input)" }}>
        ≤ 4 FT
      </text>
    </svg>
  );
}
