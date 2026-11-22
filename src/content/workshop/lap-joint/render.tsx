import { label } from "@/renderers/illustration/hardware";

// Exploded end lap: the top board keeps its upper half, the bottom board its lower half.
export default function LapJointArt() {
  const w = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 1 };
  return (
    <svg viewBox="0 0 160 120">
      <path d="M10 30h100v8H90v8H10z" {...w} />
      <path d="M90 38h20v8H90z" fill="none" stroke="var(--ink)" strokeDasharray="2 2" />
      <path d="M90 74h20v-8h40v16H90z" {...w} />
      <path d="M90 66h20v8H90z" fill="none" stroke="var(--ink)" strokeDasharray="2 2" />
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M100 50v12M96 58l4 4 4-4" />
      </g>
      <text x="80" y="104" textAnchor="middle" style={label}>
        HALF EACH
      </text>
    </svg>
  );
}
