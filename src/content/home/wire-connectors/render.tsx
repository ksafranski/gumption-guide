import { label } from "@/renderers/illustration/hardware";

// A twist-on wire nut joining two wires, beside a lever connector.
export default function WireConnectorsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g fill="none" strokeLinecap="round">
        <path d="M20 110C24 90 34 80 40 60" stroke="var(--ink)" strokeWidth="5" />
        <path d="M20 110C24 90 34 80 40 60" stroke="var(--tape-ink)" strokeWidth="3" />
        <path d="M60 110C56 90 46 80 40 60" stroke="var(--ink)" strokeWidth="5" />
        <path d="M60 110C56 90 46 80 40 60" stroke="var(--surface)" strokeWidth="3" />
      </g>
      <path d="M28 62L34 14h12l6 48z" fill="var(--tape)" stroke="var(--ink)" strokeWidth="1.2" />
      {[24, 34, 44, 54].map((y) => (
        <path
          key={y}
          d={`M${31 + (y - 14) * 0.08} ${y}h${18 - (y - 14) * 0.16}`}
          stroke="var(--ink)"
          strokeWidth="0.6"
        />
      ))}
      <rect
        x="92"
        y="40"
        width="52"
        height="30"
        rx="3"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      {[100, 116, 132].map((x) => (
        <g key={x}>
          <rect
            x={x - 4}
            y="30"
            width="9"
            height="16"
            rx="1.5"
            fill="var(--input)"
            stroke="var(--ink)"
          />
          <circle cx={x + 0.5} cy="60" r="3" fill="var(--part)" stroke="var(--ink)" />
        </g>
      ))}
      <text x="40" y="8" textAnchor="middle" style={label}>
        TWIST-ON
      </text>
      <text x="118" y="84" textAnchor="middle" style={label}>
        LEVER
      </text>
    </svg>
  );
}
