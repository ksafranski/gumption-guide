// Direct pressure: a pad held firmly on a wound, pressure pushing straight down.
export default function StopBleedingArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M10 70h112c12 0 18 6 18 12s-6 12-18 12H10z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M97 72c3 4 4 9 2 14"
        fill="none"
        stroke="var(--warn)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="58"
        y="58"
        width="40"
        height="14"
        rx="2"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <g stroke="var(--line-strong)" strokeWidth="1">
        <path d="M58 65h40M78 58v14" />
      </g>
      <g
        stroke="var(--input)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M66 16v32M60 41l6 8 6-8" />
        <path d="M90 16v32M84 41l6 8 6-8" />
      </g>
    </svg>
  );
}
