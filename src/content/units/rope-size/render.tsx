// Rope end-on: diameter across (blue) and circumference around (orange).
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function RopeSizeArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle cx="70" cy="58" r="34" fill="var(--rope)" stroke="var(--ink)" strokeWidth="1.5" />
      <g fill="none" stroke="var(--rope-lay)" strokeWidth="1.5">
        <circle cx="58" cy="48" r="14" />
        <circle cx="84" cy="50" r="14" />
        <circle cx="70" cy="72" r="14" />
      </g>
      <circle
        cx="70"
        cy="58"
        r="40"
        fill="none"
        stroke="var(--input)"
        strokeWidth="2"
        strokeDasharray="5 3"
      />
      <path d="M36 58h68" stroke="var(--output)" strokeWidth="2" />
      <path d="M36 52v12M104 52v12" stroke="var(--output)" strokeWidth="2" />
      <text x="124" y="40" style={{ ...label, fill: "var(--input)" }}>
        CIRC
      </text>
      <text x="124" y="62" style={{ ...label, fill: "var(--output)" }}>
        DIA
      </text>
      <text x="124" y="84" style={{ ...label, fill: "var(--muted)" }}>
        ×3
      </text>
    </svg>
  );
}
