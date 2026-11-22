// A joist hanger holding a joist end against a beam, every hole nailed.
export default function StructuralConnectorsArt() {
  const holes = [
    [34, 40],
    [34, 56],
    [34, 72],
    [98, 40],
    [98, 56],
    [98, 72],
    [52, 88],
    [80, 88],
  ];
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="4"
        y="10"
        width="152"
        height="18"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <rect
        x="44"
        y="28"
        width="44"
        height="64"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path d="M44 34v58h44V34" fill="none" stroke="var(--wood-grain)" strokeWidth="0.8" />
      <path
        d="M26 30h18v64h44V30h18v50H88v14H44V80H26z"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.2"
        opacity="0.92"
      />
      <g fill="var(--input)">
        {holes.map(([x, y]) => (
          <circle key={`${x},${y}`} cx={x} cy={y} r="2.5" />
        ))}
      </g>
      <path d="M66 100v14" stroke="var(--output)" strokeWidth="2" />
      <path d="M60 108l6 6 6-6" fill="none" stroke="var(--output)" strokeWidth="2" />
    </svg>
  );
}
