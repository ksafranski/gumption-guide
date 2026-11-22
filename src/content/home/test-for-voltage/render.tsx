import { label } from "@/renderers/illustration/hardware";

// A non-contact tester held to an outlet, its tip lit with signal arcs.
export default function TestForVoltageArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="18"
        y="20"
        width="52"
        height="80"
        rx="4"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      {[38, 70].map((y) => (
        <g key={y} fill="var(--ink)">
          <rect x="34" y={y - 6} width="3" height="10" rx="1" />
          <rect x="50" y={y - 6} width="3.6" height="12" rx="1" />
          <path d={`M41 ${y + 12}a3 3 0 0 1 6 0v3h-6z`} />
        </g>
      ))}
      <g transform="rotate(-30 110 70)">
        <rect x="76" y="62" width="70" height="14" rx="7" fill="var(--tape)" stroke="var(--ink)" />
        <path d="M76 66l-10 3 10 3z" fill="var(--input)" stroke="var(--ink)" strokeWidth="0.8" />
        <rect x="120" y="65" width="14" height="8" rx="2" fill="var(--ink)" />
      </g>
      <g fill="none" stroke="var(--input)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M70 86a10 10 0 0 0 -4 -14" />
        <path d="M76 90a17 17 0 0 0 -6 -24" />
      </g>
      <text x="44" y="112" textAnchor="middle" style={label}>
        LIVE?
      </text>
    </svg>
  );
}
