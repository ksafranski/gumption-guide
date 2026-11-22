// Person lying in shade under a tree, feet raised, water bottle at hand.
export default function HeatExhaustionArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle
        cx="140"
        cy="18"
        r="10"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <path d="M8 104h144" stroke="var(--ground)" strokeWidth="2" />
      <rect x="24" y="44" width="8" height="60" fill="var(--wood)" />
      <ellipse
        cx="28"
        cy="36"
        rx="26"
        ry="20"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.5"
      />
      <path d="M14 104l18-44h0l80 44z" fill="var(--output-fill)" opacity="0.5" />
      <circle cx="46" cy="94" r="7" fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5" />
      <path
        d="M54 92h40l10-8h12l2 6-14 6H54z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect
        x="108"
        y="92"
        width="22"
        height="12"
        rx="2"
        fill="var(--tape)"
        stroke="var(--ground)"
        strokeWidth="1.5"
      />
      <rect x="70" y="80" width="8" height="14" rx="2" fill="var(--output)" />
    </svg>
  );
}
