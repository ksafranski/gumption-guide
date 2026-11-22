// Skin in cross-section with an angled splinter; tweezers pull back along the same line.
export default function SplinterArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M8 70h144v40H8z" fill="var(--part)" />
      <path d="M8 70h144" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M58 64L96 92" stroke="var(--wood)" strokeWidth="4" strokeLinecap="round" />
      <path d="M58 64L96 92" stroke="var(--wood-grain)" strokeWidth="1" />
      <g stroke="var(--metal)" strokeWidth="3" strokeLinecap="round">
        <path d="M56 62L18 20M60 60L28 14" />
      </g>
      <path d="M18 20L28 14" stroke="var(--ink)" strokeWidth="1.5" />
      <g
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M108 64L80 43M80 43l10 1M80 43l4 9" />
      </g>
    </svg>
  );
}
