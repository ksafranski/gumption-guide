// Teepee lay: kindling cone over a tinder bundle, gap left on the upwind side.
const sticks = [
  [44, 104, 80, 26],
  [100, 104, 82, 24],
  [116, 104, 78, 26],
  [90, 106, 80, 22],
  [70, 106, 81, 24],
];

export default function FireLayArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M14 106h132" stroke="var(--ground)" strokeWidth="2" />
      <g stroke="var(--rope)" strokeWidth="4" strokeLinecap="round">
        {sticks.map(([x1, y1, x2, y2]) => (
          <path key={`${x1}-${y1}`} d={`M${x1} ${y1}L${x2} ${y2}`} />
        ))}
      </g>
      <path
        d="M80 104c-12 0-15-10-9-19 2 5 5 6 6 6-2-9 2-17 9-22-1 8 4 11 6 16 2 5 1 19-12 19z"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <ellipse cx="80" cy="101" rx="11" ry="5" fill="var(--tape)" />
      <g stroke="var(--output)" strokeWidth="1.5" fill="none" strokeLinecap="round">
        <path d="M14 70h28M10 80h34M18 90h24" strokeDasharray="5 4" />
        <path d="M40 76l6 4-6 4" strokeLinejoin="round" />
      </g>
      <text x="12" y="62" style={{ fontFamily: "var(--mono)", fontSize: 8, fill: "var(--muted)" }}>
        WIND
      </text>
    </svg>
  );
}
