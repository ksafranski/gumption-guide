// A-frame tarp, seen end-on: ridgeline between the trees, panels staked out to the ground.
export default function PitchATarpArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M8 104h144" stroke="var(--ground)" strokeWidth="2" />
      <rect x="10" y="14" width="10" height="90" rx="2" fill="var(--wood)" />
      <rect x="140" y="14" width="10" height="90" rx="2" fill="var(--wood)" />
      <path d="M20 40H140" stroke="var(--rope)" strokeWidth="2" />
      <path
        d="M80 40L36 98H124Z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M80 40v58" stroke="var(--output)" strokeWidth="1" strokeDasharray="3 3" />
      <g stroke="var(--rope)" strokeWidth="1.5">
        <path d="M36 98L28 104M124 98L132 104" />
      </g>
      <g stroke="var(--metal)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M27 101l-3 8M133 101l3 8" />
      </g>
      <circle cx="80" cy="40" r="3" fill="var(--input)" />
    </svg>
  );
}
