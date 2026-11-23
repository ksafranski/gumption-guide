import { label } from "@/renderers/illustration/hardware";

// A GFCI outlet feeding three outlets downstream, all dimmed because it has tripped.
function Outlet({ x, gfci = false }: { x: number; gfci?: boolean }) {
  return (
    <g>
      <rect
        x={x - 12}
        y="40"
        width="24"
        height="40"
        rx="3"
        fill="var(--surface)"
        stroke="var(--ink)"
      />
      <rect x={x - 5} y="48" width="2" height="6" fill="var(--ink)" />
      <rect x={x + 3} y="48" width="2" height="7" fill="var(--ink)" />
      <rect x={x - 5} y="66" width="2" height="6" fill="var(--ink)" />
      <rect x={x + 3} y="66" width="2" height="7" fill="var(--ink)" />
      {gfci ? <rect x={x - 6} y="57" width="12" height="5" rx="1" fill="var(--warn)" /> : null}
    </g>
  );
}
export default function FindADeadOutletArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M22 80v14h116V80" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
      <Outlet x={22} gfci />
      <g opacity="0.45">
        <Outlet x={60} />
        <Outlet x={99} />
        <Outlet x={138} />
      </g>
      <text x="22" y="30" textAnchor="middle" style={label}>
        RESET
      </text>
      <text x="99" y="30" textAnchor="middle" style={label}>
        DEAD
      </text>
      <text x="80" y="110" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        DOWNSTREAM
      </text>
    </svg>
  );
}
