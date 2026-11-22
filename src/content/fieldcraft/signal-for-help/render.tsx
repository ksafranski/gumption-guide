// Mirror flash aimed through a V of fingers toward a plane; three whistle blasts.
export default function SignalForHelpArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M118 22l18-4 6 4-8 4 4 8-4 1-6-7-10 2z" fill="var(--ground)" />
      <path d="M30 96L126 26" stroke="var(--input)" strokeWidth="1.5" strokeDasharray="4 3" />
      <rect
        x="18"
        y="92"
        width="18"
        height="12"
        rx="2"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        transform="rotate(-36 27 98)"
      />
      <path d="M66 74l-6-16M66 74l4-17" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      <g fill="var(--output)">
        <rect x="96" y="96" width="12" height="4" rx="2" />
        <rect x="114" y="96" width="12" height="4" rx="2" />
        <rect x="132" y="96" width="12" height="4" rx="2" />
      </g>
    </svg>
  );
}
