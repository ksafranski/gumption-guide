// Three nested layers in cross-section: base (warm, next to skin), mid (insulation), shell (weather).
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function DressInLayersArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M20 108V58c0-26 18-44 40-44s40 18 40 44v50"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="3"
      />
      <path
        d="M30 108V60c0-20 13-35 30-35s30 15 30 35v48"
        fill="var(--tape)"
        stroke="var(--ground)"
        strokeWidth="2"
        strokeDasharray="2 3"
      />
      <path
        d="M40 108V62c0-14 9-25 20-25s20 11 20 25v46"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <g stroke="var(--output)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M128 20l-4 8M138 26l-4 8M148 20l-4 8M132 42l-4 8M144 46l-4 8" />
      </g>
      <text x="60" y="80" textAnchor="middle" style={{ ...label, fill: "var(--input)" }}>
        BASE
      </text>
      <text x="108" y="84" style={{ ...label, fill: "var(--muted)" }}>
        MID
      </text>
      <text x="108" y="104" style={{ ...label, fill: "var(--output)" }}>
        SHELL
      </text>
    </svg>
  );
}
