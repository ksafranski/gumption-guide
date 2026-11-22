// Dial gauge reading 2 bar, with the psi scale on the inside ring.
const label = { fontFamily: "var(--mono)", fontSize: 7, fill: "var(--muted)" } as const;
const CX = 80;
const CY = 64;
// Sweep 240°, 0–4 bar, from lower-left to lower-right.
const ang = (bar: number) => ((-210 + (bar / 4) * 240) * Math.PI) / 180;
const pt = (bar: number, r: number) => [CX + r * Math.cos(ang(bar)), CY + r * Math.sin(ang(bar))];

export default function PressureArt() {
  const [nx, ny] = pt(2, 21);
  return (
    <svg viewBox="0 0 160 120">
      <circle cx={CX} cy={CY} r="46" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
      <g stroke="var(--ink)" strokeWidth="1.2">
        {[0, 1, 2, 3, 4].map((b) => {
          const [x1, y1] = pt(b, 42);
          const [x2, y2] = pt(b, 35);
          return <path key={b} d={`M${x1} ${y1}L${x2} ${y2}`} />;
        })}
      </g>
      {[0, 1, 2, 3, 4].map((b) => {
        const [x, y] = pt(b, 27);
        return (
          <text
            key={b}
            x={x}
            y={y + 3}
            textAnchor="middle"
            style={{ ...label, fill: "var(--ink)" }}
          >
            {b}
          </text>
        );
      })}
      {[0, 20, 40].map((p) => {
        const [x, y] = pt(p / 14.5038, 16);
        return (
          <text key={p} x={x} y={y + 2} textAnchor="middle" style={{ ...label, fontSize: 5 }}>
            {p}
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
      <text x={CX} y={CY + 26} textAnchor="middle" style={{ ...label, fontWeight: 700 }}>
        BAR
      </text>
      <rect x="74" y="110" width="12" height="8" fill="var(--metal)" />
    </svg>
  );
}
