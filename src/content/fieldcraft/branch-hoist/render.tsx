// Rope over a padded limb: load (blue) on one side, the pull (orange) on the other with a 3:1 loop to a stake.
export default function BranchHoistArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 112h152" stroke="var(--ground)" strokeWidth="2" />
      <rect x="8" y="4" width="12" height="108" rx="2" fill="var(--wood)" />
      <path
        d="M18 24c40-4 80-2 136 6"
        stroke="var(--wood)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="70" y="18" width="16" height="10" rx="2" fill="var(--tape)" />
      <g stroke="var(--rope)" strokeWidth="2" fill="none">
        <path d="M70 26C60 26 58 40 58 70" />
        <path d="M86 26c10 0 12 14 12 40" />
        <path d="M98 66l20 42M98 66l8 42M106 108l12 0" />
      </g>
      <circle cx="98" cy="66" r="4" fill="none" stroke="var(--rope)" strokeWidth="2" />
      <rect
        x="46"
        y="70"
        width="24"
        height="20"
        rx="3"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <path d="M118 108l3 6" stroke="var(--metal)" strokeWidth="3" strokeLinecap="round" />
      <g
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M130 70l14 24M140 84l4 10-10-2" />
      </g>
    </svg>
  );
}
