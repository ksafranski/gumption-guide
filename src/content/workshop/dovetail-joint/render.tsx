import { label } from "@/renderers/illustration/hardware";

// Face view of a tail board: three flared tails, with half-pin sockets between.
export default function DovetailJointArt() {
  const tails = [0, 1, 2].map((i) => 26 + i * 40);
  return (
    <svg viewBox="0 0 160 120">
      <path
        d={`M10 100V40 ${tails.map((x) => `H${x - 6}L${x - 12} 14H${x + 12}L${x + 6} 40`).join(" ")} H150V100z`}
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <path d="M10 40h140" stroke="var(--ink)" strokeDasharray="2 2" />
      <text x="80" y="76" textAnchor="middle" style={label}>
        TAILS
      </text>
    </svg>
  );
}
