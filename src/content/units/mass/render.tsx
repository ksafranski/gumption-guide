// Balance beam: a 1 kg weight (left) level with 2.2 lb (right).
const label = { fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700 } as const;

export default function MassArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M60 108h40M80 108V28" stroke="var(--ground)" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 28h112" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M74 20h12l-6 8z" fill="var(--ground)" />
      <g stroke="var(--ink)" strokeWidth="1">
        <path d="M30 28l-10 40M30 28l10 40M130 28l-10 40M130 28l10 40" />
      </g>
      <path d="M14 68h32M114 68h32" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M20 66l4-20h12l4 20z"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="118"
        y="44"
        width="24"
        height="22"
        rx="3"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <text x="30" y="88" textAnchor="middle" style={{ ...label, fill: "var(--input)" }}>
        1 kg
      </text>
      <text x="130" y="88" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        2.2 lb
      </text>
    </svg>
  );
}
