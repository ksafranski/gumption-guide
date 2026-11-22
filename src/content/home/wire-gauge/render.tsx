import { label } from "@/renderers/illustration/hardware";

// Three conductor cross-sections, thicker as the gauge number falls.
const wires = [
  { x: 34, r: 8, t: "14", a: "15A" },
  { x: 78, r: 10, t: "12", a: "20A" },
  { x: 126, r: 12.5, t: "10", a: "30A" },
];
export default function WireGaugeArt() {
  return (
    <svg viewBox="0 0 160 120">
      {wires.map((w) => (
        <g key={w.t}>
          <circle
            cx={w.x}
            cy="52"
            r={w.r + 6}
            fill="var(--part)"
            stroke="var(--ink)"
            strokeWidth="1"
          />
          <circle
            cx={w.x}
            cy="52"
            r={w.r}
            fill="var(--input)"
            stroke="var(--ink)"
            strokeWidth="1"
          />
          <text
            x={w.x}
            y="92"
            textAnchor="middle"
            style={{ ...label, fontSize: 9, fill: "var(--ink)" }}
          >
            {w.t} AWG
          </text>
          <text x={w.x} y="104" textAnchor="middle" style={label}>
            {w.a}
          </text>
        </g>
      ))}
    </svg>
  );
}
