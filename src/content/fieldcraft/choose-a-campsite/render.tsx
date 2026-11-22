// Cross-section of a slope: tent on a raised bench, dead limb crossed out, cold air pooling below.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function ChooseACampsiteArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M4 40C30 46 50 62 62 70h44c14 0 22 20 34 32 4 4 10 6 16 6"
        fill="none"
        stroke="var(--ground)"
        strokeWidth="2"
      />
      <path
        d="M70 70l14-20 14 20z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M84 50v20" stroke="var(--output)" strokeWidth="1" />
      <rect x="22" y="8" width="7" height="38" fill="var(--wood)" />
      <path d="M28 18l26 10" stroke="var(--wood)" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M38 16l12 14M50 16L38 30"
        stroke="var(--warn)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M118 96c8 6 20 10 36 10v6H112z" fill="var(--output-fill)" opacity="0.7" />
      <g stroke="var(--output)" strokeWidth="1.2" fill="none" strokeLinecap="round">
        <path d="M108 78c6 2 10 6 12 12M118 74c6 2 10 8 12 14" strokeDasharray="2 3" />
      </g>
      <text x="138" y="96" textAnchor="middle" style={label}>
        COLD
      </text>
    </svg>
  );
}
