const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

// The 3-4-5 triangle, with a bubble level beneath.
export default function SquareLevelPlumbArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M30 80V20L110 80z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M30 70h10v10" fill="none" stroke="var(--output)" strokeWidth="1.5" />
      <text x="20" y="54" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        3
      </text>
      <text x="70" y="94" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        4
      </text>
      <text x="78" y="44" textAnchor="middle" style={{ ...label, fill: "var(--input)" }}>
        5
      </text>
      <rect
        x="20"
        y="102"
        width="120"
        height="12"
        rx="2"
        fill="var(--tape)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <rect
        x="68"
        y="104"
        width="24"
        height="8"
        rx="4"
        fill="var(--output-fill)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <circle cx="80" cy="108" r="2.5" fill="var(--surface)" />
      <path d="M74 104v8M86 104v8" stroke="var(--ink)" strokeWidth="0.8" />
      <path d="M136 10v70" stroke="var(--ink)" strokeWidth="1" />
      <path d="M131 80l5 10 5-10z" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1" />
    </svg>
  );
}
