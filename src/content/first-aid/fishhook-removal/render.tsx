// A hook in the skin: shank pressed down, line looped at the bend, pull along the shank.
export default function FishhookRemovalArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M8 74h144v40H8z" fill="var(--part)" />
      <path d="M8 74h144" stroke="var(--ink)" strokeWidth="1.5" />
      <path
        d="M48 70h38c10 0 14 10 10 18-4 6-12 4-12-2"
        fill="none"
        stroke="var(--metal)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M84 86l-4-6" stroke="var(--metal)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="70" r="3" fill="none" stroke="var(--metal)" strokeWidth="2" />
      <path d="M100 82C110 76 120 70 140 70" fill="none" stroke="var(--output)" strokeWidth="1.5" />
      <g
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M60 50v14M55 58l5 6 5-6" />
        <path d="M112 50h34M140 44l6 6-6 6" />
      </g>
    </svg>
  );
}
