// Wrench on a nut: push (orange) at the handle end, lever arm (blue) from the pivot.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function TorqueArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M30 56l10-6 10 6v12l-10 6-10-6z" fill="var(--ground)" />
      <circle cx="40" cy="62" r="4" fill="var(--surface)" />
      <path
        d="M52 54h86c4 0 6 3 6 8s-2 8-6 8H52"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <path
        d="M26 46a20 20 0 0 1 28 0M26 78a20 20 0 0 0 28 0"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="6"
      />
      <path d="M40 92h96" stroke="var(--output)" strokeWidth="1.5" />
      <path d="M40 86v12M136 86v12" stroke="var(--output)" strokeWidth="1.5" />
      <text x="88" y="108" textAnchor="middle" style={{ ...label, fill: "var(--output)" }}>
        LEVER
      </text>
      <g
        stroke="var(--input)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M136 14v32M130 40l6 8 6-8" />
      </g>
      <text x="124" y="22" textAnchor="end" style={{ ...label, fill: "var(--input)" }}>
        FORCE
      </text>
    </svg>
  );
}
