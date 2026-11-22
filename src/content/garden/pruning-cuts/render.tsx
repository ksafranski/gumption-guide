const label = { fontFamily: "var(--mono)", fontSize: 6, fontWeight: 700 } as const;

// Trunk and branch: the collar, the right cut just outside it, a stub and a flush cut marked wrong.
export default function PruningCutsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="20"
        y="4"
        width="34"
        height="112"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path
        d="M54 50c8 2 14 2 20 6l70-24v20l-66 22c-8 4-16 6-24 6z"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path
        d="M54 48c6 0 10 4 12 10 0 10-4 18-12 22"
        fill="none"
        stroke="var(--wood-grain)"
        strokeWidth="3"
      />
      <path d="M70 46l-2 40" stroke="var(--output)" strokeWidth="2.5" />
      <path d="M100 34l2 36" stroke="var(--warn)" strokeWidth="2" strokeDasharray="3 2" />
      <path d="M56 44l0 44" stroke="var(--warn)" strokeWidth="2" strokeDasharray="3 2" />
      <text x="72" y="100" style={{ ...label, fill: "var(--output)" }}>
        CUT HERE
      </text>
      <text x="104" y="84" style={{ ...label, fill: "var(--warn)" }}>
        NOT A STUB
      </text>
      <text x="60" y="30" style={{ ...label, fill: "var(--warn)" }}>
        NOT FLUSH
      </text>
    </svg>
  );
}
