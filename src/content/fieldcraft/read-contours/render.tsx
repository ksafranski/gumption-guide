// A hill on a topo map: rings bunched on the steep east side, spread out on the gentle west side.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;
const rings = [0, 1, 2, 3].map((i) => ({ cx: 80 + i * 6, rx: 66 - i * 15, ry: 44 - i * 10 }));

export default function ReadContoursArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g fill="none" stroke="var(--wood)">
        {rings.map((r, i) => (
          <ellipse key={i} cx={r.cx} cy="60" rx={r.rx} ry={r.ry} strokeWidth={i === 0 ? 2 : 1.2} />
        ))}
      </g>
      <circle cx="98" cy="60" r="2.5" fill="var(--input)" />
      <path d="M120 112h28M144 108l4 4-4 4" fill="none" stroke="var(--output)" strokeWidth="1.5" />
      <path d="M40 112H12M16 108l-4 4 4 4" fill="none" stroke="var(--output)" strokeWidth="1.5" />
      <text x="134" y="104" textAnchor="middle" style={label}>
        STEEP
      </text>
      <text x="26" y="104" textAnchor="middle" style={label}>
        GENTLE
      </text>
      <text x="25" y="63" textAnchor="middle" style={{ ...label, fill: "var(--wood)" }}>
        100
      </text>
    </svg>
  );
}
