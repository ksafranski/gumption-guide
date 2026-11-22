// Foot in profile with a ring pad around a heel blister.
export default function BlistersArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M30 20h26v52c0 6 6 10 14 12l58 10c10 2 14 8 12 12H28c-10 0-14-8-14-20 0-12 6-20 16-24z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="86" r="14" fill="var(--tape)" stroke="var(--ground)" strokeWidth="1.5" />
      <circle
        cx="30"
        cy="86"
        r="6"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <g stroke="var(--output)" strokeWidth="1.5" strokeLinecap="round" fill="none">
        <path d="M62 40c8 4 8 12 0 16M70 34c12 6 12 22 0 28" />
      </g>
    </svg>
  );
}
