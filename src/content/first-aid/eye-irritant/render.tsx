// An eye with a stream of water poured across it from the inner corner.
export default function EyeIrritantArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M30 70c20-26 80-26 100 0-20 26-80 26-100 0z"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <circle
        cx="80"
        cy="70"
        r="14"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <circle cx="80" cy="70" r="6" fill="var(--ink)" />
      <circle cx="96" cy="64" r="2" fill="var(--warn)" />
      <path d="M22 18h22l-6 10h-10z" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
      <g stroke="var(--output)" strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M34 28c2 12 4 24 8 34" />
        <path d="M44 68c20 8 50 10 80 4" strokeDasharray="4 3" />
      </g>
    </svg>
  );
}
