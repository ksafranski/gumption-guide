const label = { fontFamily: "var(--mono)", fontSize: 7, fontWeight: 700 } as const;

// Section through a mulch layer around a trunk: 2–3 in deep, held back from the bark.
export default function MulchArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="80" width="152" height="36" fill="var(--wood-grain)" opacity="0.5" />
      <path d="M4 80h60M96 80h60" stroke="var(--ground)" />
      <rect x="10" y="66" width="54" height="14" fill="var(--wood)" />
      <rect x="96" y="66" width="54" height="14" fill="var(--wood)" />
      <g fill="var(--wood-grain)">
        {[16, 28, 40, 52, 102, 114, 126, 138].map((x) => (
          <rect
            key={x}
            x={x}
            y="70"
            width="7"
            height="3"
            rx="1"
            transform={`rotate(${x % 3 ? 15 : -10} ${x} 71)`}
          />
        ))}
      </g>
      <rect
        x="72"
        y="10"
        width="16"
        height="106"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path
        d="M72 80c-4 4-8 8-10 14M88 80c4 4 8 8 10 14"
        fill="none"
        stroke="var(--wood)"
        strokeWidth="4"
      />
      <path d="M154 66v14M150 66h8M150 80h8" stroke="var(--output)" strokeWidth="1.2" />
      <text x="150" y="60" textAnchor="end" style={{ ...label, fill: "var(--output)" }}>
        2–3 IN
      </text>
      <path d="M64 58h8M88 58h8" stroke="var(--input)" strokeWidth="1.5" />
      <text
        x="80"
        y="54"
        textAnchor="middle"
        style={{ ...label, fill: "var(--input)", fontSize: 6 }}
      >
        GAP
      </text>
    </svg>
  );
}
