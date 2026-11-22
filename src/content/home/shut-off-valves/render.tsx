import { label } from "@/renderers/illustration/hardware";

// A ball valve open (handle along the pipe) and closed (handle across it).
function Valve({ x, open }: { x: number; open: boolean }) {
  return (
    <g>
      <rect
        x={x - 32}
        y="56"
        width="64"
        height="12"
        fill="var(--output-fill)"
        stroke="var(--ink)"
      />
      <rect
        x={x - 12}
        y="50"
        width="24"
        height="24"
        rx="4"
        fill="var(--tape)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <circle cx={x} cy="62" r="3" fill="var(--ink)" />
      {open ? (
        <rect
          x={x - 4}
          y="34"
          width="34"
          height="8"
          rx="3"
          fill="var(--input)"
          stroke="var(--ink)"
          transform={`rotate(0 ${x} 38)`}
        />
      ) : (
        <rect
          x={x - 4}
          y="8"
          width="8"
          height="34"
          rx="3"
          fill="var(--input)"
          stroke="var(--ink)"
        />
      )}
      <path d={`M${x} 42v8`} stroke="var(--ink)" strokeWidth="3" />
    </g>
  );
}
export default function ShutOffValvesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <Valve x={42} open />
      <Valve x={118} open={false} />
      <g stroke="var(--output)" strokeWidth="2" fill="none">
        <path d="M14 88h40M48 84l6 4-6 4" />
      </g>
      <text x="42" y="106" textAnchor="middle" style={label}>
        OPEN
      </text>
      <text x="118" y="106" textAnchor="middle" style={label}>
        CLOSED
      </text>
    </svg>
  );
}
