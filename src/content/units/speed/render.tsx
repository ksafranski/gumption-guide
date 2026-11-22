// Speedometer face: mph on the outer ring, km/h on the inner ring, needle at 60 mph.
const label = { fontFamily: "var(--mono)", fontSize: 7, fill: "var(--ink)" } as const;
const CX = 80;
const CY = 70;
const MAX = 100; // mph
const ang = (mph: number) => ((-200 + (mph / MAX) * 220) * Math.PI) / 180;
const pt = (mph: number, r: number) => [CX + r * Math.cos(ang(mph)), CY + r * Math.sin(ang(mph))];

export default function SpeedArt() {
  const [nx, ny] = pt(60, 29);
  return (
    <svg viewBox="0 0 160 120">
      <path
        d={`M${pt(0, 50).join(" ")}A50 50 0 1 1 ${pt(MAX, 50).join(" ")}`}
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2.5"
      />
      <g stroke="var(--ink)" strokeWidth="1.2">
        {[0, 20, 40, 60, 80, 100].map((m) => {
          const [x1, y1] = pt(m, 50);
          const [x2, y2] = pt(m, 43);
          return <path key={m} d={`M${x1} ${y1}L${x2} ${y2}`} />;
        })}
      </g>
      {[0, 20, 40, 60, 80, 100].map((m) => {
        const [x, y] = pt(m, 35);
        return (
          <text key={m} x={x} y={y + 3} textAnchor="middle" style={label}>
            {m}
          </text>
        );
      })}
      {[0, 40, 80, 120, 160].map((k) => {
        const [x, y] = pt(k / 1.609344, 22);
        return (
          <text
            key={k}
            x={x}
            y={y + 2}
            textAnchor="middle"
            style={{ ...label, fontSize: 5, fill: "var(--output)" }}
          >
            {k}
          </text>
        );
      })}
      <path
        d={`M${CX} ${CY}L${nx} ${ny}`}
        stroke="var(--input)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx={CX} cy={CY} r="4" fill="var(--input)" />
      <text
        x={CX}
        y={CY + 24}
        textAnchor="middle"
        style={{ ...label, fontWeight: 700, fill: "var(--muted)" }}
      >
        MPH
      </text>
      <text
        x={CX}
        y={CY + 33}
        textAnchor="middle"
        style={{ ...label, fontSize: 6, fill: "var(--output)" }}
      >
        km/h
      </text>
    </svg>
  );
}
