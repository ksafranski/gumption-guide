import { label } from "@/renderers/illustration/hardware";

// A spade blade with a file stroking along its front edge, bevel on the top side.
export default function GardenToolCareArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="74" y="4" width="12" height="40" fill="var(--wood)" stroke="var(--ink)" />
      <path
        d="M50 44h60v44l-6 14H56l-6-14z"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <path d="M56 98h48" stroke="var(--surface)" strokeWidth="2" />
      <g transform="rotate(-12 110 96)">
        <rect x="70" y="102" width="80" height="7" fill="var(--part)" stroke="var(--ink)" />
        {Array.from({ length: 12 }, (_, i) => 74 + i * 6).map((x) => (
          <path key={x} d={`M${x} 102l3 7`} stroke="var(--ink)" strokeWidth="0.6" />
        ))}
      </g>
      <g stroke="var(--input)" strokeWidth="1.5" fill="none">
        <path d="M128 80h-24M108 76l-4 4 4 4" />
      </g>
      <text x="16" y="70" style={label}>
        BEVEL
      </text>
    </svg>
  );
}
