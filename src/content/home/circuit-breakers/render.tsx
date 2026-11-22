import { label } from "@/renderers/illustration/hardware";

// A panel with a main breaker and two columns of breakers; one has tripped to the middle.
export default function CircuitBreakersArt() {
  const rows = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="40"
        y="6"
        width="80"
        height="108"
        rx="3"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <rect x="64" y="12" width="32" height="14" rx="1.5" fill="var(--part)" stroke="var(--ink)" />
      <rect x="74" y="15" width="12" height="8" fill="var(--ink)" />
      <text x="80" y="34" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        MAIN
      </text>
      <path d="M80 38v72" stroke="var(--line-strong)" strokeWidth="1" />
      {rows.map((r) =>
        [0, 1].map((c) => {
          const x = c ? 84 : 50;
          const y = 40 + r * 14;
          const tripped = r === 2 && c === 1;
          return (
            <g key={`${r}${c}`}>
              <rect
                x={x}
                y={y}
                width="26"
                height="10"
                rx="1"
                fill="var(--part)"
                stroke="var(--ink)"
                strokeWidth="0.8"
              />
              <rect
                x={tripped ? x + 9 : c ? x + 3 : x + 15}
                y={y + 2.5}
                width="8"
                height="5"
                fill={tripped ? "var(--input)" : "var(--ink)"}
              />
            </g>
          );
        }),
      )}
      <path d="M124 73h12" stroke="var(--input)" strokeWidth="1.5" />
      <text x="138" y="75" style={{ ...label, fontSize: 5 }}>
        TRIPPED
      </text>
    </svg>
  );
}
