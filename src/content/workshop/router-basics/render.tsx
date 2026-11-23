import { label } from "@/renderers/illustration/hardware";

// A board seen from above with arrows: counterclockwise around the outside.
export default function RouterBasicsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="40"
        y="30"
        width="80"
        height="60"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <g fill="none" stroke="var(--input)" strokeWidth="2" strokeLinecap="round">
        <path d="M124 82V38M128 42l-4-4-4 4" />
        <path d="M112 26H48M52 22l-4 4 4 4" />
        <path d="M36 38v44M32 78l4 4 4-4" />
        <path d="M48 94h64M108 90l4 4-4 4" />
      </g>
      <circle cx="124" cy="94" r="8" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M128 90a6 6 0 1 1 -8 0" fill="none" stroke="var(--output)" strokeWidth="1" />
      <text x="80" y="64" textAnchor="middle" style={{ ...label, fill: "var(--ink)" }}>
        CCW
      </text>
      <text x="80" y="114" textAnchor="middle" style={label}>
        OUTSIDE EDGE
      </text>
    </svg>
  );
}
