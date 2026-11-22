const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Soil section: a large seed sown deeper, a small one shallow, both at about 2–3× their width.
export default function SowingSeedsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="40" width="152" height="76" fill="var(--wood-grain)" opacity="0.45" />
      <path d="M4 40h152" stroke="var(--ground)" strokeWidth="2" />
      <ellipse
        cx="50"
        cy="66"
        rx="9"
        ry="6"
        fill="var(--tape)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <ellipse
        cx="110"
        cy="47"
        rx="3"
        ry="2"
        fill="var(--tape)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path d="M68 40v20M64 40h8M64 60h8" stroke="var(--output)" strokeWidth="1.2" />
      <path
        d="M50 40c0-12 4-18 10-22M50 40c0-8-4-14-10-16"
        fill="none"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <path
        d="M60 18c4-2 8 0 8 4-4 2-8 0-8-4zM40 24c-4-2-8 0-8 4 4 2 8 0 8-4z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.2"
      />
      <text x="50" y="92" textAnchor="middle" style={label}>
        BEAN
      </text>
      <text x="110" y="64" textAnchor="middle" style={label}>
        LETTUCE
      </text>
    </svg>
  );
}
