// Shadow-stick method, seen from above: two shadow tips mark a west-east line; north is square to it.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 9,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function FindNorthArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g stroke="var(--ground)" strokeWidth="2" strokeLinecap="round">
        <path d="M82 100L42 66" />
        <path d="M82 100L112 62" strokeDasharray="3 4" />
      </g>
      <circle cx="82" cy="100" r="4" fill="var(--ink)" />
      <path d="M22 67.1L134 60.7" stroke="var(--output)" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="42" cy="66" r="5" fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="112" cy="62" r="5" fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M77 64L74.7 25" stroke="var(--input)" strokeWidth="2.5" />
      <path
        d="M69 32l5.7-8 5.3 8.5"
        fill="none"
        stroke="var(--input)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text x="80" y="22" style={{ ...label, fill: "var(--input)" }}>
        N
      </text>
      <text x="10" y="73" style={label}>
        W
      </text>
      <text x="140" y="61" style={label}>
        E
      </text>
    </svg>
  );
}
