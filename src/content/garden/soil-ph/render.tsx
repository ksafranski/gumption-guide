const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

// pH scale 4–9 with the vegetable sweet spot (6–7) and blueberries (4.5–5.5) marked.
const X = (ph: number) => 14 + (ph - 4) * 26;

export default function SoilPhArt() {
  return (
    <svg viewBox="0 0 160 120">
      <defs>
        <linearGradient id="ph" x1="0" x2="1">
          <stop offset="0" stopColor="var(--input)" />
          <stop offset="0.6" stopColor="var(--tape)" />
          <stop offset="1" stopColor="var(--output)" />
        </linearGradient>
      </defs>
      <rect x={X(4)} y="54" width={X(9) - X(4)} height="14" rx="3" fill="url(#ph)" />
      {[4, 5, 6, 7, 8, 9].map((p) => (
        <g key={p}>
          <path d={`M${X(p)} 68v5`} stroke="var(--ink)" />
          <text x={X(p)} y="82" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
            {p}
          </text>
        </g>
      ))}
      <path
        d={`M${X(6)} 46h${X(7) - X(6)}M${X(6)} 42v8M${X(7)} 42v8`}
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <text
        x={(X(6) + X(7)) / 2}
        y="36"
        textAnchor="middle"
        style={{ ...label, fill: "var(--ink)" }}
      >
        VEG
      </text>
      <path
        d={`M${X(4.5)} 96h${X(5.5) - X(4.5)}M${X(4.5)} 92v8M${X(5.5)} 92v8`}
        stroke="var(--output)"
        strokeWidth="1.5"
      />
      <circle cx={X(5)} cy="108" r="4" fill="var(--output)" />
      <circle cx={X(5) + 7} cy="110" r="3.5" fill="var(--output)" />
      <text x="14" y="20" style={{ ...label, fill: "var(--input)" }}>
        ACID
      </text>
      <text x="146" y="20" textAnchor="end" style={{ ...label, fill: "var(--output)" }}>
        ALKALINE
      </text>
    </svg>
  );
}
