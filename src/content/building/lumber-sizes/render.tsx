// End view: a 2×4 drawn at its true 1½ × 3½ in, inside its nominal 2 × 4 outline.
const S = 22;
const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

export default function LumberSizesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="30"
        y="16"
        width={2 * S}
        height={4 * S}
        fill="none"
        stroke="var(--ground)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
      />
      <rect
        x={30 + 0.25 * S}
        y={16 + 0.25 * S}
        width={1.5 * S}
        height={3.5 * S}
        rx="2"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <g fill="none" stroke="var(--wood-grain)" strokeWidth="1">
        <path d="M52 30c-12 8-12 50 0 70M60 34c-6 10-6 46 0 62" />
      </g>
      <text x="96" y="44" style={{ ...label, fill: "var(--muted)" }}>
        2 × 4
      </text>
      <text x="96" y="56" style={{ ...label, fill: "var(--muted)", fontSize: 6 }}>
        NOMINAL
      </text>
      <text x="96" y="78" style={{ ...label, fill: "var(--output)" }}>
        1½ × 3½
      </text>
      <text x="96" y="90" style={{ ...label, fill: "var(--output)", fontSize: 6 }}>
        ACTUAL
      </text>
    </svg>
  );
}
