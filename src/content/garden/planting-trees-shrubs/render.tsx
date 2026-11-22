const label = { fontFamily: "var(--mono)", fontSize: 6, fontWeight: 700 } as const;

// Wide, shallow hole: root ball sits with the flare at grade; hole about 3× as wide.
export default function PlantingTreesShrubsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="4" y="60" width="152" height="56" fill="var(--wood-grain)" opacity="0.4" />
      <path d="M4 60h152" stroke="var(--ground)" strokeWidth="2" />
      <path
        d="M20 60c10 30 110 30 120 0"
        fill="var(--wood)"
        opacity="0.4"
        stroke="var(--ground)"
        strokeDasharray="3 3"
      />
      <ellipse
        cx="80"
        cy="74"
        rx="22"
        ry="14"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <rect
        x="76"
        y="10"
        width="8"
        height="52"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path d="M76 58c-2 2-4 3-8 4M84 58c2 2 4 3 8 4" stroke="var(--ink)" fill="none" />
      <circle
        cx="80"
        cy="16"
        r="14"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="1.5"
      />
      <path d="M20 104h120M20 100v8M140 100v8" stroke="var(--output)" strokeWidth="1.2" />
      <text x="80" y="116" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        2–3 × ROOT BALL
      </text>
      <path d="M96 56h20" stroke="var(--input)" strokeWidth="1.2" />
      <text x="118" y="54" style={{ ...label, fill: "var(--input)" }}>
        FLARE
      </text>
    </svg>
  );
}
