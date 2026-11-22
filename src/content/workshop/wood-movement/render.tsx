import { label } from "@/renderers/illustration/hardware";

// A board with grain lines: big arrows across the grain, a tiny one along it.
export default function WoodMovementArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="20"
        y="34"
        width="120"
        height="44"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      {[42, 50, 58, 64, 72].map((y, i) => (
        <path
          key={y}
          d={`M20 ${y}C60 ${y + (i % 2 ? 4 : -4)} 100 ${y + (i % 2 ? -4 : 4)} 140 ${y}`}
          fill="none"
          stroke="var(--wood-grain)"
          strokeWidth="1"
        />
      ))}
      <g stroke="var(--input)" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M80 30V8M74 14l6-6 6 6M80 82v22M74 98l6 6 6-6" />
      </g>
      <g stroke="var(--output)" strokeWidth="1.5" fill="none">
        <path d="M142 56h6M146 53l3 3-3 3" />
      </g>
      <text x="100" y="20" style={label}>
        ACROSS: LOTS
      </text>
      <text x="104" y="96" style={label}>
        ALONG: ~0
      </text>
    </svg>
  );
}
