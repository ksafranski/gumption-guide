// Stick method: eye, upright stick, tree. Equal sides of a 45° triangle.
export default function MeasureTreeHeightArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 108h152" stroke="var(--ground)" strokeWidth="2" />
      <rect x="128" y="22" width="8" height="86" fill="var(--wood)" />
      <path
        d="M132 4l-20 26h40zM132 18l-22 28h44z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="60" r="6" fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5" />
      <path
        d="M20 66v26l-6 16M20 92l6 16M20 74l14 0"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M36 48v26" stroke="var(--rope)" strokeWidth="3" strokeLinecap="round" />
      <g stroke="var(--input)" strokeWidth="1.2" strokeDasharray="3 3">
        <path d="M22 58L132 6M22 60L132 108" />
      </g>
      <path d="M20 114h112" stroke="var(--output)" strokeWidth="1.5" />
      <path d="M20 110v8M132 110v8" stroke="var(--output)" strokeWidth="1.5" />
    </svg>
  );
}
