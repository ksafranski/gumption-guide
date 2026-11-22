import { label } from "@/renderers/illustration/hardware";

// Two boards pulled apart, two fluted dowels between their matching holes.
export default function DowelJointArt() {
  const w = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 1.2 };
  const ys = [40, 76];
  return (
    <svg viewBox="0 0 160 120">
      <rect x="8" y="20" width="44" height="76" {...w} />
      <rect x="108" y="20" width="44" height="76" {...w} />
      {ys.map((y) => (
        <g key={y}>
          <rect
            x="36"
            y={y - 4}
            width="16"
            height="8"
            fill="var(--bg)"
            stroke="var(--ink)"
            strokeDasharray="2 1.5"
          />
          <rect
            x="108"
            y={y - 4}
            width="16"
            height="8"
            fill="var(--bg)"
            stroke="var(--ink)"
            strokeDasharray="2 1.5"
          />
          <rect
            x="62"
            y={y - 4}
            width="36"
            height="8"
            rx="2"
            fill="var(--wood-grain)"
            stroke="var(--ink)"
          />
          {[70, 80, 90].map((x) => (
            <path key={x} d={`M${x} ${y - 4}v8`} stroke="var(--ink)" strokeWidth="0.6" />
          ))}
        </g>
      ))}
      <text x="80" y="112" textAnchor="middle" style={label}>
        DOWELS
      </text>
    </svg>
  );
}
