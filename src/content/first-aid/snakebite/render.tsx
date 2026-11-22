// Two puncture marks on a forearm, a pen line marking the swelling edge with the time.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

export default function SnakebiteArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M8 56h120c12 0 18 6 18 14s-6 14-18 14H8z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <circle cx="76" cy="66" r="2.5" fill="var(--warn)" />
      <circle cx="86" cy="66" r="2.5" fill="var(--warn)" />
      <ellipse
        cx="81"
        cy="70"
        rx="26"
        ry="11"
        fill="none"
        stroke="var(--input)"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
      <text x="108" y="50" style={{ ...label, fill: "var(--input)" }}>
        14:20
      </text>
      <path
        d="M50 28c10-14 24 6 36-6s22 4 30-4"
        fill="none"
        stroke="var(--ground)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M116 18l6-2-2 6" fill="none" stroke="var(--ground)" strokeWidth="2" />
      <text x="80" y="104" textAnchor="middle" style={label}>
        KEEP STILL
      </text>
    </svg>
  );
}
