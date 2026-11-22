// Arm's-length hand, fingers stacked between the horizon and the setting sun.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 8,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function DaylightLeftArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M8 96h144" stroke="var(--ground)" strokeWidth="2" />
      <circle
        cx="92"
        cy="30"
        r="12"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <g stroke="var(--input)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M92 10v-6M110 30h6M74 30h-6M105 17l4-4M79 17l-4-4" />
      </g>
      <g fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5">
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="60" y={84 - i * 12} width="64" height="12" rx="6" />
        ))}
      </g>
      <path d="M124 48c10 0 14 8 14 18v30" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M50 48v48" stroke="var(--output)" strokeWidth="1.5" />
      <path d="M46 48h8M46 96h8" stroke="var(--output)" strokeWidth="1.5" />
      <text x="44" y="75" textAnchor="end" style={{ ...label, fill: "var(--output)" }}>
        1 HR
      </text>
      <text x="92" y="112" textAnchor="middle" style={label}>
        ≈15 MIN/FINGER
      </text>
    </svg>
  );
}
