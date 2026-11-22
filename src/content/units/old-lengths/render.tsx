// A surveyor's chain: links and brass tallies, laid out against a 66 ft span.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function OldLengthsArt() {
  const links = Array.from({ length: 11 }, (_, i) => 14 + i * 12);
  return (
    <svg viewBox="0 0 160 120">
      <g fill="none" stroke="var(--metal)" strokeWidth="2.5">
        {links.map((x, i) => (
          <rect key={x} x={x} y={i % 2 ? 54 : 52} width="14" height={i % 2 ? 6 : 10} rx="3" />
        ))}
      </g>
      <g fill="var(--input)">
        <path d="M74 44l4 6 4-6z" />
        <path d="M26 44l4 6 4-6z" />
        <path d="M122 44l4 6 4-6z" />
      </g>
      <rect x="4" y="50" width="8" height="14" rx="2" fill="var(--wood)" />
      <rect x="148" y="50" width="8" height="14" rx="2" fill="var(--wood)" />
      <path d="M8 82h144M8 76v12M152 76v12" stroke="var(--output)" strokeWidth="1.5" />
      <text x="80" y="100" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        1 CHAIN = 66 FT
      </text>
      <text x="80" y="30" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        100 LINKS
      </text>
    </svg>
  );
}
