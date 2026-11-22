// Seedlings in cells under a grow light, a few inches above the leaves.
export default function StartingSeedsIndoorsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="20"
        y="16"
        width="120"
        height="8"
        rx="3"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path d="M40 4v12M120 4v12" stroke="var(--ink)" />
      <g fill="var(--input-fill)" opacity="0.6">
        <path d="M24 24h112l10 50H14z" />
      </g>
      <rect x="16" y="88" width="128" height="14" fill="var(--ground)" />
      {[28, 52, 76, 100, 124].map((x) => (
        <g key={x}>
          <path
            d={`M${x - 9} 88l2-12h14l2 12z`}
            fill="var(--wood)"
            stroke="var(--ink)"
            strokeWidth="0.8"
          />
          <path d={`M${x} 76V62`} stroke="var(--output)" strokeWidth="2" />
          <path
            d={`M${x} 62c-2-6-8-8-12-6 2 6 8 8 12 6zM${x} 62c2-6 8-8 12-6-2 6-8 8-12 6z`}
            fill="var(--output-fill)"
            stroke="var(--output)"
            strokeWidth="1.2"
          />
        </g>
      ))}
    </svg>
  );
}
