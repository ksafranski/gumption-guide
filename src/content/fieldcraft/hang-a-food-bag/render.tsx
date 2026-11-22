// A food bag hung from a branch: clear of the trunk, below the branch, high off the ground.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--output)",
} as const;

export default function HangAFoodBagArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 112h152" stroke="var(--ground)" strokeWidth="2" />
      <rect x="18" y="6" width="12" height="106" rx="2" fill="var(--wood)" />
      <path
        d="M28 22c30-2 70 0 120 6"
        stroke="var(--wood)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M98 24v22M98 24c6 0 10 20 12 60"
        stroke="var(--rope)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="98" cy="48" r="2" fill="var(--metal)" />
      <path
        d="M90 50h16l2 20c0 4-4 6-10 6s-10-2-10-6z"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <g stroke="var(--output)" strokeWidth="1" strokeDasharray="2 2">
        <path d="M30 62H88M120 26v24M120 76v36" />
      </g>
      <text x="58" y="58" textAnchor="middle" style={label}>
        6 FT
      </text>
      <text x="124" y="98" style={label}>
        12 FT
      </text>
      <text x="124" y="40" style={label}>
        6 FT
      </text>
    </svg>
  );
}
