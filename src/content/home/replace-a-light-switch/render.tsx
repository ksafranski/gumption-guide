import { label } from "@/renderers/illustration/hardware";

// Single-pole and three-way switches side by side; the three-way's common screw is dark.
function Switch({ x, three }: { x: number; three: boolean }) {
  return (
    <g>
      <rect
        x={x - 12}
        y="14"
        width="24"
        height="84"
        rx="3"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <rect x={x - 5} y="44" width="10" height="20" rx="2" fill="var(--part)" stroke="var(--ink)" />
      <circle cx={x + 12} cy="32" r="4" fill="var(--tape)" stroke="var(--ink)" />
      <circle cx={x + 12} cy="80" r="4" fill="var(--tape)" stroke="var(--ink)" />
      {three ? <circle cx={x - 12} cy="80" r="4" fill="var(--ink)" stroke="var(--ink)" /> : null}
      <circle cx={x - 12} cy="92" r="3" fill="var(--c-garden)" stroke="var(--ink)" />
    </g>
  );
}
export default function ReplaceALightSwitchArt() {
  return (
    <svg viewBox="0 0 160 120">
      <Switch x={44} three={false} />
      <Switch x={116} three />
      <text x="44" y="112" textAnchor="middle" style={label}>
        SINGLE
      </text>
      <text x="116" y="112" textAnchor="middle" style={label}>
        3-WAY
      </text>
      <path d="M84 80h14" stroke="var(--input)" strokeWidth="1.5" />
      <text x="80" y="76" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        COMMON
      </text>
    </svg>
  );
}
