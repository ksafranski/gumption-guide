const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--ink)",
} as const;

// Four beds and the families moving one bed along each year.
const beds = [
  { x: 26, y: 26, t: "NIGHTSHADE" },
  { x: 92, y: 26, t: "LEGUME" },
  { x: 92, y: 74, t: "BRASSICA" },
  { x: 26, y: 74, t: "ROOT" },
];

export default function CropRotationArt() {
  return (
    <svg viewBox="0 0 160 120">
      {beds.map((b) => (
        <g key={b.t}>
          <rect
            x={b.x}
            y={b.y}
            width="42"
            height="26"
            rx="2"
            fill="var(--wood-grain)"
            opacity="0.5"
            stroke="var(--wood)"
            strokeWidth="1.5"
          />
          <text x={b.x + 21} y={b.y + 16} textAnchor="middle" style={label}>
            {b.t}
          </text>
        </g>
      ))}
      <g
        fill="none"
        stroke="var(--input)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M70 39h20M86 35l4 4-4 4" />
        <path d="M113 54v18M109 68l4 4 4-4" />
        <path d="M90 87H70M74 83l-4 4 4 4" />
        <path d="M47 72V54M43 58l4-4 4 4" />
      </g>
    </svg>
  );
}
