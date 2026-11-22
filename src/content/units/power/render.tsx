// Bulb wired to a plug: volts × amps = watts.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function PowerArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle
        cx="112"
        cy="46"
        r="20"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <path d="M104 50l4-8 4 8 4-8" fill="none" stroke="var(--input)" strokeWidth="1.5" />
      <rect x="104" y="66" width="16" height="12" rx="2" fill="var(--metal)" />
      <path d="M112 78v12H40V70" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <rect
        x="28"
        y="50"
        width="24"
        height="20"
        rx="4"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <path d="M34 50v-10M46 50v-10" stroke="var(--metal)" strokeWidth="3" />
      <g stroke="var(--input)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M112 16v-8M136 30l6-4M88 30l-6-4M140 50h8M84 50h-8" />
      </g>
      <text x="80" y="108" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        V × A = W
      </text>
    </svg>
  );
}
