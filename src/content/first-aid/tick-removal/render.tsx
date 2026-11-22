// Fine tweezers gripping a tick at the skin line, pulling straight up.
export default function TickRemovalArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M8 86h144v26H8z" fill="var(--part)" />
      <path d="M8 86h144" stroke="var(--ink)" strokeWidth="1.5" />
      <ellipse cx="80" cy="76" rx="10" ry="8" fill="var(--ink)" />
      <circle cx="80" cy="84" r="3" fill="var(--ink)" />
      <g stroke="var(--ink)" strokeWidth="1.2" strokeLinecap="round">
        <path d="M71 72l-8-4M70 78l-9 0M71 82l-7 4M89 72l8-4M90 78l9 0M89 82l7 4" />
      </g>
      <g stroke="var(--metal)" strokeWidth="3" strokeLinecap="round">
        <path d="M76 86L68 20M84 86L92 20" />
      </g>
      <path d="M68 20h24" stroke="var(--ink)" strokeWidth="1.5" />
      <g
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M120 70V30M114 38l6-8 6 8" />
      </g>
    </svg>
  );
}
