// Arm's-length hand measures: fist ≈ 10°, finger ≈ 2°, fanning out from the eye.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function AngleArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle cx="16" cy="64" r="5" fill="var(--ink)" />
      <path
        d="M16 64L144 42M16 64L144 86"
        stroke="var(--output)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <path d="M44 59.2a28 28 0 0 1 0 9.6" fill="none" stroke="var(--output)" strokeWidth="2" />
      <rect
        x="112"
        y="46"
        width="22"
        height="36"
        rx="6"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <g stroke="var(--ink)" strokeWidth="1">
        <path d="M112 55h16M112 64h16M112 73h16" />
      </g>
      <text x="56" y="67" style={{ ...label, fill: "var(--output)" }}>
        10°
      </text>
      <text x="123" y="100" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        FIST
      </text>
    </svg>
  );
}
