// Pot at a rolling boil on a stove, with a one-minute timer.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 9,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function PurifyWaterArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M30 106h80" stroke="var(--ground)" strokeWidth="2" />
      <path d="M44 106l6-12h40l6 12" fill="none" stroke="var(--ground)" strokeWidth="2" />
      <path
        d="M58 94c-2-6 2-8 4-12 1 4 3 5 4 4 0-4 2-6 4-8 0 5 4 7 4 12z"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M36 50h68v28c0 6-4 10-10 10H46c-6 0-10-4-10-10z" fill="var(--metal)" />
      <path d="M30 50h80" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M40 56h60" stroke="var(--output)" strokeWidth="3" />
      <g fill="none" stroke="var(--output)" strokeWidth="1.5">
        <circle cx="52" cy="40" r="3" />
        <circle cx="70" cy="34" r="4" />
        <circle cx="88" cy="42" r="2.5" />
        <circle cx="62" cy="22" r="2" />
        <circle cx="82" cy="20" r="2.5" />
      </g>
      <circle cx="132" cy="36" r="14" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M132 36V25" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M132 22a14 14 0 1 1 -0.1 0" fill="none" stroke="var(--output)" strokeWidth="3" />
      <text x="132" y="64" textAnchor="middle" style={label}>
        1 MIN
      </text>
    </svg>
  );
}
