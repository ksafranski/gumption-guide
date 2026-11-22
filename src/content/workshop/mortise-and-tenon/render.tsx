import { label } from "@/renderers/illustration/hardware";

// A rail with a tenon lined up with the mortise in a leg (side view, mortise dashed).
export default function MortiseAndTenonArt() {
  const w = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 1.2 };
  return (
    <svg viewBox="0 0 160 120">
      <rect x="100" y="6" width="34" height="108" {...w} />
      <rect
        x="100"
        y="44"
        width="24"
        height="16"
        fill="var(--wood-grain)"
        stroke="var(--ink)"
        strokeDasharray="2 2"
      />
      <path d="M12 34h60v10h20v16H72v10H12z" {...w} />
      <path d="M72 44v16" stroke="var(--ink)" />
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M60 84h30M86 80l4 4-4 4" />
      </g>
      <text x="82" y="34" textAnchor="middle" style={label}>
        TENON
      </text>
      <text x="117" y="78" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        MORTISE
      </text>
    </svg>
  );
}
