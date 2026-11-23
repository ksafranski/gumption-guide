import { label } from "@/renderers/illustration/hardware";

// A clump lifted out and split into three pieces, each with roots and shoots.
function Piece({ x }: { x: number }) {
  return (
    <g>
      <ellipse cx={x} cy="66" rx="16" ry="8" fill="var(--wood)" stroke="var(--ink)" />
      {[-8, -2, 4, 10].map((dx) => (
        <path
          key={dx}
          d={`M${x + dx} 72q-2 12 2 22`}
          fill="none"
          stroke="var(--wood-grain)"
          strokeWidth="1.2"
        />
      ))}
      {[-8, 0, 8].map((dx) => (
        <path
          key={dx}
          d={`M${x + dx} 60c-4-12 0-26 ${dx / 2} -34`}
          fill="none"
          stroke="var(--c-garden)"
          strokeWidth="2.5"
        />
      ))}
    </g>
  );
}
export default function DividePerennialsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <Piece x={30} />
      <Piece x={80} />
      <Piece x={130} />
      <path d="M55 30v70M105 30v70" stroke="var(--input)" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="80" y="114" textAnchor="middle" style={label}>
        ROOTS + SHOOTS EACH
      </text>
    </svg>
  );
}
