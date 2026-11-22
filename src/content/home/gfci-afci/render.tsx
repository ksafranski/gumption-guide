import { label } from "@/renderers/illustration/hardware";

// A GFCI outlet face with TEST and RESET buttons between the two sockets.
export default function GfciAfciArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="50"
        y="6"
        width="60"
        height="108"
        rx="5"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      {[30, 90].map((y) => (
        <g key={y} fill="var(--ink)">
          <rect x="68" y={y - 7} width="3" height="11" rx="1" />
          <rect x="87" y={y - 7} width="3.6" height="13" rx="1" />
          <path d={`M76 ${y + 10}a3.5 3.5 0 0 1 7 0v3h-7z`} />
        </g>
      ))}
      <rect
        x="60"
        y="50"
        width="18"
        height="12"
        rx="2"
        fill="var(--warn-fill)"
        stroke="var(--warn)"
      />
      <rect x="82" y="50" width="18" height="12" rx="2" fill="var(--part)" stroke="var(--ink)" />
      <text
        x="69"
        y="58"
        textAnchor="middle"
        style={{ ...label, fontSize: 4.5, fill: "var(--warn)" }}
      >
        TEST
      </text>
      <text x="91" y="58" textAnchor="middle" style={{ ...label, fontSize: 4.5 }}>
        RESET
      </text>
      <circle cx="104" cy="46" r="2" fill="var(--c-garden)" />
    </svg>
  );
}
