import { label } from "@/renderers/illustration/hardware";

// Pipe ends in section: copper, PEX, PVC and cast iron, by wall thickness and color.
const pipes = [
  { x: 24, r: 10, w: 1.5, fill: "var(--input)", t: "COPPER" },
  { x: 60, r: 10, w: 2.5, fill: "var(--warn)", t: "PEX" },
  { x: 98, r: 14, w: 2.5, fill: "var(--surface)", t: "PVC" },
  { x: 138, r: 16, w: 4, fill: "var(--ground)", t: "IRON" },
];
export default function PipeTypesArt() {
  return (
    <svg viewBox="0 0 160 120">
      {pipes.map((p) => (
        <g key={p.t}>
          <circle cx={p.x} cy="54" r={p.r} fill={p.fill} stroke="var(--ink)" strokeWidth="1" />
          <circle
            cx={p.x}
            cy="54"
            r={p.r - p.w}
            fill="var(--bg)"
            stroke="var(--ink)"
            strokeWidth="0.6"
          />
          <text x={p.x} y="96" textAnchor="middle" style={{ ...label, fontSize: 6 }}>
            {p.t}
          </text>
        </g>
      ))}
    </svg>
  );
}
