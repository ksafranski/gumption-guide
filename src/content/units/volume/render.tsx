// Measuring jug with paired scales: litres on the left, US cups on the right.
const label = { fontFamily: "var(--mono)", fontSize: 7, fill: "var(--muted)" } as const;
const head = { ...label, fontSize: 8, fontWeight: 700, fill: "var(--ink)" } as const;
// Jug interior runs y=100 (empty) to y=20; 1 L spans 80 units, so a US cup (0.2366 L) is ~18.9.
const L = 80;
const CUP = L * 0.2365882365;

export default function VolumeArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M50 100V24c0-4 2-6 6-6h50c4 0 6 2 6 6v76c0 4-2 6-6 6H56c-4 0-6-2-6-6z"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <path
        d="M112 34h10c6 0 8 4 8 8v28c0 4-2 8-8 8h-10"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <path d="M52 52h58v46c0 4-2 6-6 6H58c-4 0-6-2-6-6z" fill="var(--output-fill)" />
      <path d="M52 52h58" stroke="var(--output)" strokeWidth="2" />
      <g stroke="var(--ink)" strokeWidth="1">
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <path key={f} d={`M50 ${100 - f * L}h${f === 1 || f === 0.5 ? 10 : 6}`} />
        ))}
        {[1, 2, 3, 4].map((c) => (
          <path key={c} d={`M112 ${100 - c * CUP}h-6`} />
        ))}
      </g>
      <text x="44" y={100 - L + 3} textAnchor="end" style={label}>
        1
      </text>
      <text x="44" y={100 - L / 2 + 3} textAnchor="end" style={label}>
        ½
      </text>
      {[2, 4].map((c) => (
        <text key={c} x="104" y={100 - c * CUP + 3} textAnchor="end" style={label}>
          {c}
        </text>
      ))}
      <text x="44" y="14" textAnchor="end" style={head}>
        L
      </text>
      <text x="116" y="14" style={head}>
        CUP
      </text>
    </svg>
  );
}
