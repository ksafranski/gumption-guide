const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Before and after: a blind rivet with its mandrel, then set with the tail swelled behind two sheets.
export default function BlindRivetsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <g fill="var(--part)" stroke="var(--ink)" strokeWidth="1">
        <rect x="10" y="58" width="60" height="6" />
        <rect x="10" y="64" width="60" height="6" />
        <rect x="90" y="58" width="60" height="6" />
        <rect x="90" y="64" width="60" height="6" />
      </g>
      <path d="M40 18v68" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="40" cy="86" r="2.5" fill="var(--ink)" />
      <rect x="36" y="58" width="8" height="26" fill="var(--metal)" stroke="var(--ink)" />
      <rect x="31" y="54" width="18" height="4" rx="1.5" fill="var(--metal)" stroke="var(--ink)" />
      <rect x="116" y="58" width="8" height="12" fill="var(--metal)" stroke="var(--ink)" />
      <rect x="111" y="54" width="18" height="4" rx="1.5" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M114 70h12l2 6h-16z" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M78 64h6M80 60l4 4-4 4" fill="none" stroke="var(--input)" strokeWidth="1.5" />
      <text x="40" y="104" textAnchor="middle" style={label}>
        BEFORE
      </text>
      <text x="120" y="104" textAnchor="middle" style={label}>
        SET
      </text>
    </svg>
  );
}
