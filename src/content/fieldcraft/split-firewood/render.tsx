// A round on the chopping block with drying checks, a maul coming down along a crack.
export default function SplitFirewoodArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 112h152" stroke="var(--ground)" strokeWidth="2" />
      <rect
        x="40"
        y="86"
        width="80"
        height="26"
        rx="3"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <ellipse cx="80" cy="86" rx="40" ry="8" fill="var(--wood-grain)" />
      <rect
        x="52"
        y="56"
        width="56"
        height="30"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <ellipse
        cx="80"
        cy="56"
        rx="28"
        ry="6"
        fill="var(--tape)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <path d="M80 56l-6-4M80 56l10-3M80 56l-3 5" stroke="var(--ink)" strokeWidth="1" />
      <path d="M74 52l-2 34" stroke="var(--input)" strokeWidth="1.5" strokeDasharray="3 3" />
      <path
        d="M62 20l22 4-4 12-20-6z"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M82 28l50-34" stroke="var(--wood)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
