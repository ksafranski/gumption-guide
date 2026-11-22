// Cool the burn: a tap running water over a forearm, with the 20-minute timer.
const label = { fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700 } as const;

export default function MinorBurnArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M30 14h46v10h-14v10"
        fill="none"
        stroke="var(--ground)"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path d="M44 8h18" stroke="var(--ground)" strokeWidth="4" strokeLinecap="round" />
      <g stroke="var(--output)" strokeWidth="2" strokeLinecap="round">
        <path d="M58 40v28M62 40v28M66 40v28" />
      </g>
      <path
        d="M14 76h106c10 0 14 4 14 9s-4 9-14 9H14z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <ellipse
        cx="62"
        cy="80"
        rx="10"
        ry="4"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="1.5"
      />
      <g stroke="var(--output)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M48 98l-3 6M58 98l-1 7M68 98l1 7M78 98l3 6" />
      </g>
      <circle cx="122" cy="38" r="16" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M122 38V26" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M122 22a16 16 0 0 1 13.9 24" fill="none" stroke="var(--output)" strokeWidth="3" />
      <text x="122" y="66" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        20 MIN
      </text>
    </svg>
  );
}
