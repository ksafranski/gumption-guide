// Ruler: metric along the top edge, inches along the bottom, drawn to true ratio (1 in = 2.54 cm).
const IN = 50;
const CM = IN / 2.54;
const X0 = 12;
const END = 148;
const label = { fontFamily: "var(--mono)", fontSize: 8, fill: "var(--tape-ink)" } as const;

function ticks(step: number, len: (i: number) => number, y: number, dir: 1 | -1) {
  let d = "";
  for (let i = 0; X0 + i * step <= END; i++)
    d += `M${(X0 + i * step).toFixed(2)} ${y}v${dir * len(i)}`;
  return d;
}

const mm = ticks(CM / 10, (i) => (i % 10 === 0 ? 12 : i % 5 === 0 ? 8 : 5), 38, 1);
const eighths = ticks(
  IN / 8,
  (i) => (i % 8 === 0 ? 14 : i % 4 === 0 ? 10 : i % 2 === 0 ? 7 : 4),
  86,
  -1,
);

export default function LengthArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="6" y="38" width="148" height="48" rx="2" fill="var(--tape)" />
      <g stroke="var(--tape-ink)" strokeWidth="0.8">
        <path d={mm} />
        <path d={eighths} />
      </g>
      {[1, 2, 3, 4, 5, 6].map((k) => (
        <text key={k} x={X0 + k * CM} y="59" textAnchor="middle" style={label}>
          {k}
        </text>
      ))}
      {[1, 2].map((k) => (
        <text key={k} x={X0 + k * IN} y="69" textAnchor="middle" style={label}>
          {k}
        </text>
      ))}
      <text x="10" y="59" style={{ ...label, fontWeight: 700 }}>
        cm
      </text>
      <text x="10" y="69" style={{ ...label, fontWeight: 700 }}>
        in
      </text>
    </svg>
  );
}
