import { Screw, label } from "@/renderers/illustration/hardware";

// A bolt lying flat with its callouts: diameter, pitch and length (measured under the head).
export default function ThreadSizesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g transform="rotate(-90 80 60) translate(0 -10)">
        <Screw x={80} y={-4} len={128} head="hex" tip={false} thread={0.75} w={22} pitch={7} />
      </g>
      <path d="M34 92h116M34 86v12M150 86v12" stroke="var(--output)" strokeWidth="1.5" />
      <text x="92" y="108" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        LENGTH
      </text>
      <path d="M156 40v20M152 40h8M152 60h8" stroke="var(--input)" strokeWidth="1.5" />
      <text x="96" y="24" textAnchor="middle" style={{ ...label, fill: "var(--input)" }}>
        1/4-20 · M8×1.25
      </text>
    </svg>
  );
}
