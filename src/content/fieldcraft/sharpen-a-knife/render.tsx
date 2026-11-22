// Blade on a stone at a held angle, with the 20° wedge marked.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function SharpenAKnifeArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="14"
        y="84"
        width="132"
        height="18"
        rx="2"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <rect x="14" y="84" width="132" height="6" fill="var(--ground)" opacity="0.4" />
      <path
        d="M56 82L118 60l4 6-60 20z"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M118 60l28-10 4 8-28 8z"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M56 84h40" stroke="var(--output)" strokeWidth="1.5" />
      <path d="M86 84a30 30 0 0 0-1.5-9" fill="none" stroke="var(--output)" strokeWidth="2" />
      <text x="94" y="78" style={{ ...label, fill: "var(--output)" }}>
        20°
      </text>
      <g
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M30 40h40M62 34l8 6-8 6" />
      </g>
    </svg>
  );
}
