const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Drywall in section with three anchors: plastic plug, threaded anchor, toggle opened behind the board.
export default function WallAnchorsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="66"
        y="6"
        width="12"
        height="104"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <path d="M66 6v104M78 6v104" stroke="var(--ink)" strokeWidth="1.2" />
      <g fill="var(--tape)" stroke="var(--ink)" strokeWidth="1">
        <path d="M60 20h4v-2h16l4 3-4 3H64v-2h-4z" />
      </g>
      <path d="M38 21h22" stroke="var(--metal)" strokeWidth="4" />
      <g fill="var(--output-fill)" stroke="var(--output)" strokeWidth="1.2">
        <path d="M62 52h4v-6h18l3 6-3 6H66v-6" />
      </g>
      <path d="M38 52h24" stroke="var(--metal)" strokeWidth="4" />
      <path d="M30 88h62" stroke="var(--metal)" strokeWidth="4" />
      <path
        d="M92 88l18-16M92 88l18 16"
        stroke="var(--input)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="56" y="83" width="8" height="10" rx="1" fill="var(--metal)" stroke="var(--ink)" />
      <text x="112" y="23" style={label}>
        PLUG
      </text>
      <text x="112" y="55" style={label}>
        THREADED
      </text>
      <text x="116" y="92" style={label}>
        TOGGLE
      </text>
      <text x="72" y="118" textAnchor="middle" style={label}>
        DRYWALL
      </text>
    </svg>
  );
}
