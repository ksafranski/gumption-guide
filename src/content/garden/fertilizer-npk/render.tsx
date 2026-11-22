const label = { fontFamily: "var(--mono)", fontWeight: 700 } as const;

// A fertilizer bag with its three numbers, and what each one feeds.
export default function FertilizerNpkArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M30 18h64l4 8v76c0 4-2 6-6 6H32c-4 0-6-2-6-6V26z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <path d="M30 18l-4 8h72l-4-8" fill="var(--ground)" opacity="0.5" />
      <text
        x="62"
        y="64"
        textAnchor="middle"
        style={{ ...label, fontSize: 13, fill: "var(--ink)" }}
      >
        10-10-10
      </text>
      <text
        x="62"
        y="80"
        textAnchor="middle"
        style={{ ...label, fontSize: 7, fill: "var(--muted)" }}
      >
        N · P · K
      </text>
      <g style={{ ...label, fontSize: 7 }}>
        <text x="112" y="40" fill="var(--output)">
          N LEAF
        </text>
        <text x="112" y="62" fill="var(--input)">
          P ROOT
        </text>
        <text x="112" y="84" fill="var(--muted)">
          K VIGOR
        </text>
      </g>
    </svg>
  );
}
