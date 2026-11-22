import { label } from "@/renderers/illustration/hardware";

// A meter with a dial and display, black and red leads out of COM and V.
export default function MultimeterBasicsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="30"
        y="6"
        width="64"
        height="108"
        rx="6"
        fill="var(--tape)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <rect x="38" y="14" width="48" height="22" rx="2" fill="var(--surface)" stroke="var(--ink)" />
      <text x="82" y="31" textAnchor="end" style={{ ...label, fontSize: 12, fill: "var(--ink)" }}>
        12.6
      </text>
      <circle cx="62" cy="62" r="16" fill="var(--part)" stroke="var(--ink)" />
      <path d="M62 62l-8-12" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          cx={44 + i * 18}
          cy="98"
          r="4"
          fill={i === 0 ? "var(--ink)" : i === 2 ? "var(--warn)" : "var(--part)"}
          stroke="var(--ink)"
        />
      ))}
      <path d="M44 102C44 116 120 116 130 70" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M80 102C82 112 140 104 146 60" fill="none" stroke="var(--warn)" strokeWidth="2.5" />
      <path
        d="M130 70l-2-14M146 60l-1-14"
        stroke="var(--metal)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text x="44" y="90" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        COM
      </text>
      <text x="80" y="90" textAnchor="middle" style={{ ...label, fontSize: 5 }}>
        VΩ
      </text>
    </svg>
  );
}
