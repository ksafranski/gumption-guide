// Person wrapped in a sleeping bag on a ground pad, wind blocked; heat held at the core.
export default function HypothermiaArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="18"
        y="92"
        width="124"
        height="8"
        rx="2"
        fill="var(--tape)"
        stroke="var(--ground)"
        strokeWidth="1.5"
      />
      <path
        d="M36 92c-10 0-14-8-14-16s6-16 16-16h80c14 0 22 8 22 16s-8 16-22 16z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <circle cx="38" cy="74" r="10" fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M28 70c2-8 18-8 20 0" fill="var(--output)" />
      <g stroke="var(--output)" strokeWidth="1" opacity="0.6">
        <path d="M60 62v28M80 62v28M100 62v28M120 64v24" />
      </g>
      <circle
        cx="84"
        cy="76"
        r="7"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <g
        stroke="var(--ground)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="5 4"
      >
        <path d="M150 24H96M154 36H108M146 48H118" />
      </g>
    </svg>
  );
}
