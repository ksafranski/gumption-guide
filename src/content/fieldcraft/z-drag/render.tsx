// The Z: load on the left, anchor tree on the right, traveling pulley between, haul end back left.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function ZDragArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle cx="140" cy="40" r="14" fill="var(--wood)" />
      <rect
        x="6"
        y="28"
        width="30"
        height="24"
        rx="4"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <g stroke="var(--rope)" strokeWidth="2" fill="none">
        <path d="M36 40H122" />
        <path d="M122 40c6 0 6 22 0 22H74" />
        <path d="M74 62c-6 0-6 22 0 22H128" />
      </g>
      <path d="M126 40h2" stroke="var(--rope)" strokeWidth="2" />
      <circle cx="123" cy="51" r="7" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
      <circle cx="73" cy="73" r="7" fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M73 66V40" stroke="var(--ground)" strokeWidth="1.5" strokeDasharray="2 2" />
      <g
        stroke="var(--input)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M132 84h20M146 78l6 6-6 6" />
      </g>
      <text x="20" y="66" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        LOAD
      </text>
      <text x="80" y="108" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        3 : 1
      </text>
    </svg>
  );
}
