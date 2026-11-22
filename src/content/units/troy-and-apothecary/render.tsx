// A jeweller's pan scale with a tiny stack of grain weights.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 8,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function TroyArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M80 104V30M58 104h44" stroke="var(--ground)" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 30h92" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="80" cy="30" r="3" fill="var(--ink)" />
      <g stroke="var(--ink)" strokeWidth="1">
        <path d="M38 30l-12 34M38 30l12 34M122 30l-12 34M122 30l12 34" />
      </g>
      <path d="M22 64h32a16 6 0 0 1-32 0zM106 64h32a16 6 0 0 1-32 0z" fill="var(--metal)" />
      <path
        d="M32 62l6-8 6 8z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.5"
      />
      <g fill="var(--input)">
        <rect x="114" y="58" width="6" height="6" rx="1" />
        <rect x="122" y="60" width="4" height="4" rx="1" />
        <rect x="128" y="61" width="3" height="3" rx="0.5" />
      </g>
      <text x="38" y="88" textAnchor="middle" style={label}>
        ct
      </text>
      <text x="122" y="88" textAnchor="middle" style={label}>
        gr
      </text>
    </svg>
  );
}
