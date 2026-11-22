import { label } from "@/renderers/illustration/hardware";

// Two wires twisted in an inline splice, with heat-shrink parked on one side.
export default function WireSplicesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M4 60h56" stroke="var(--warn)" strokeWidth="7" strokeLinecap="round" />
      <path d="M100 60h56" stroke="var(--warn)" strokeWidth="7" strokeLinecap="round" />
      <path d="M58 60h44" stroke="var(--input)" strokeWidth="3" />
      {[64, 70, 76].map((x) => (
        <ellipse
          key={x}
          cx={x}
          cy="60"
          rx="2"
          ry="4.5"
          fill="none"
          stroke="var(--input)"
          strokeWidth="1.5"
        />
      ))}
      {[84, 90, 96].map((x) => (
        <ellipse
          key={x}
          cx={x}
          cy="60"
          rx="2"
          ry="4.5"
          fill="none"
          stroke="var(--input)"
          strokeWidth="1.5"
        />
      ))}
      <rect x="118" y="54" width="30" height="12" rx="2" fill="var(--ink)" opacity="0.85" />
      <g stroke="var(--muted)" strokeWidth="1.2" fill="none">
        <path d="M116 78h-24M98 74l-6 4 6 4" />
      </g>
      <text x="133" y="48" textAnchor="middle" style={label}>
        SHRINK
      </text>
      <text x="80" y="40" textAnchor="middle" style={label}>
        SPLICE
      </text>
    </svg>
  );
}
