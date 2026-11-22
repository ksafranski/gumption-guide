// Thermometer with paired scales: freezing and boiling of water in °C (left) and °F (right).
const label = { fontFamily: "var(--mono)", fontSize: 8, fill: "var(--muted)" } as const;
const head = { ...label, fontWeight: 700, fill: "var(--ink)" } as const;

// Bulb top at y=88; 0 °C at y=76, 100 °C at y=26.
const marks = [
  { y: 76, c: "0", f: "32" },
  { y: 26, c: "100", f: "212" },
];

export default function TemperatureArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="73"
        y="12"
        width="14"
        height="82"
        rx="7"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <circle cx="80" cy="98" r="11" fill="var(--input)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="77" y="46" width="6" height="50" fill="var(--input)" />
      <g stroke="var(--ground)" strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => 26 + i * 5).map((y) => (
          <path
            key={y}
            d={`M68 ${y}h-${(y - 26) % 25 === 0 ? 8 : 4}M92 ${y}h${(y - 26) % 25 === 0 ? 8 : 4}`}
          />
        ))}
      </g>
      {marks.map((m) => (
        <g key={m.c}>
          <text x="56" y={m.y + 3} textAnchor="end" style={label}>
            {m.c}
          </text>
          <text x="104" y={m.y + 3} style={label}>
            {m.f}
          </text>
        </g>
      ))}
      <text x="56" y="14" textAnchor="end" style={head}>
        °C
      </text>
      <text x="104" y="14" style={head}>
        °F
      </text>
    </svg>
  );
}
