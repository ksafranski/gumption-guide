// A sealed, labeled bucket tucked among rocks, with a map pin for its logged location.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--tape-ink)",
} as const;

export default function FoodCacheArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 108h152" stroke="var(--ground)" strokeWidth="2" />
      <path
        d="M8 108c2-18 12-26 26-24 10 2 14 12 14 24zM112 108c0-16 10-26 24-24 12 2 18 12 18 24z"
        fill="var(--part)"
        stroke="var(--ground)"
        strokeWidth="1.5"
      />
      <path
        d="M54 54h52l-5 54H59z"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="50" y="48" width="60" height="8" rx="2" fill="var(--ink)" />
      <rect x="62" y="68" width="36" height="22" rx="1" fill="var(--tape)" />
      <text x="80" y="77" textAnchor="middle" style={label}>
        NAME · TEL
      </text>
      <text x="80" y="85" textAnchor="middle" style={label}>
        PICKUP 6/12
      </text>
      <path
        d="M128 14c-8 0-12 6-12 12 0 8 12 20 12 20s12-12 12-20c0-6-4-12-12-12z"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <circle cx="128" cy="26" r="4" fill="var(--input)" />
    </svg>
  );
}
