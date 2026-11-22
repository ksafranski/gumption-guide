// A card scraping a stinger out sideways from the skin.
export default function BeeStingArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M8 76h144v36H8z" fill="var(--part)" />
      <path d="M8 76h144" stroke="var(--ink)" strokeWidth="1.5" />
      <ellipse cx="80" cy="78" rx="20" ry="5" fill="var(--warn-fill)" />
      <path d="M80 86V64" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="80" cy="62" rx="3" ry="4" fill="var(--ink)" />
      <rect
        x="16"
        y="36"
        width="54"
        height="34"
        rx="4"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
        transform="rotate(-20 43 53)"
      />
      <g
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M84 44h44M120 38l8 6-8 6" />
      </g>
    </svg>
  );
}
