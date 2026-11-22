import { label } from "@/renderers/illustration/hardware";

// A frame corner: two rails meeting on a 45° line, with a spline across it.
export default function MiterJointArt() {
  const w = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 1.2 };
  return (
    <svg viewBox="0 0 160 120">
      <path d="M30 14L52 36V108H30z" {...w} />
      <path d="M30 14H140V36H52z" {...w} />
      <rect
        x="35"
        y="20"
        width="16"
        height="5"
        fill="var(--wood-grain)"
        stroke="var(--ink)"
        strokeWidth="0.8"
        transform="rotate(-45 41 25)"
      />
      <text x="60" y="52" style={label}>
        45°
      </text>
    </svg>
  );
}
