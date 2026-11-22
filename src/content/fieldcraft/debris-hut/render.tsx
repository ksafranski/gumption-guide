// Ridgepole on a stump, ribs down both sides, a thick mound of leaves.
export default function DebrisHutArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 106h152" stroke="var(--ground)" strokeWidth="2" />
      <rect x="18" y="62" width="16" height="44" rx="2" fill="var(--wood)" />
      <path
        d="M10 106c0-30 14-52 26-54 30-2 70 26 114 54z"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="1.5"
      />
      <g fill="var(--input)" opacity="0.6">
        {[
          [40, 70],
          [60, 74],
          [80, 82],
          [100, 90],
          [50, 88],
          [74, 96],
          [120, 98],
          [30, 90],
        ].map(([x, y]) => (
          <ellipse
            key={`${x},${y}`}
            cx={x}
            cy={y}
            rx="5"
            ry="2.5"
            transform={`rotate(-20 ${x} ${y})`}
          />
        ))}
      </g>
      <path d="M26 58L148 106" stroke="var(--wood)" strokeWidth="4" strokeLinecap="round" />
      <path d="M20 106c0-14 6-26 12-30" fill="var(--ink)" opacity="0.6" />
    </svg>
  );
}
