// One energy, three labels: a food bar, a battery and a flame, each marked with its unit.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 8,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function EnergyArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="10"
        y="44"
        width="40"
        height="26"
        rx="4"
        fill="var(--tape)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <path d="M18 52h24M18 58h16" stroke="var(--tape-ink)" strokeWidth="1.5" />
      <rect
        x="62"
        y="40"
        width="34"
        height="34"
        rx="4"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <rect x="73" y="35" width="12" height="5" rx="1" fill="var(--ink)" />
      <rect x="66" y="56" width="26" height="14" rx="2" fill="var(--output)" />
      <path
        d="M128 74c-12 0-15-10-9-19 2 5 5 6 6 6-2-9 2-17 9-22-1 8 4 11 6 16 2 5 1 19-12 19z"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text x="30" y="92" textAnchor="middle" style={label}>
        kcal
      </text>
      <text x="79" y="92" textAnchor="middle" style={label}>
        Wh
      </text>
      <text x="128" y="92" textAnchor="middle" style={label}>
        BTU
      </text>
    </svg>
  );
}
