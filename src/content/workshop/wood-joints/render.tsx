import { label } from "@/renderers/illustration/hardware";

// Butt joint vs half-lap: end grain against a face, and two notched pieces crossing.
export default function WoodJointsArt() {
  const w = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 1 };
  return (
    <svg viewBox="0 0 160 120">
      <rect x="12" y="20" width="16" height="70" {...w} />
      <rect x="28" y="62" width="46" height="16" {...w} />
      <rect x="28" y="62" width="3" height="16" fill="var(--wood-grain)" />
      <path d="M86 70h68v16H86zM112 14h16v56h-16z" {...w} />
      <path
        d="M112 70h16v16h-16z"
        fill="var(--wood-grain)"
        stroke="var(--ink)"
        strokeDasharray="2 1.5"
      />
      <text x="42" y="108" textAnchor="middle" style={label}>
        BUTT
      </text>
      <text x="120" y="108" textAnchor="middle" style={label}>
        HALF-LAP
      </text>
    </svg>
  );
}
