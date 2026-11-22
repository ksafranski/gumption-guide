// Two eyes, one thumb: lines of sight diverge and land a "jump" apart on the far scene.
const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

export default function ThumbDistanceArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle cx="12" cy="52" r="4" fill="var(--ink)" />
      <circle cx="12" cy="68" r="4" fill="var(--ink)" />
      <rect
        x="40"
        y="56"
        width="8"
        height="8"
        rx="3"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <g stroke="var(--input)" strokeWidth="1.2" strokeDasharray="3 3">
        <path d="M12 52L148 86M12 68L148 34" />
      </g>
      <path d="M148 20v80" stroke="var(--ground)" strokeWidth="2" />
      <path d="M152 34v52" stroke="var(--output)" strokeWidth="2" />
      <path d="M148 34h8M148 86h8" stroke="var(--output)" strokeWidth="2" />
      <text x="140" y="112" textAnchor="end" style={{ ...label, fill: "var(--output)" }}>
        JUMP × 10
      </text>
    </svg>
  );
}
