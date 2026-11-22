// Spring scale: frame (gray) holds the spring (blue, output reading); the hanging load (orange) is the input force.
const label = { fontFamily: "var(--mono)", fontSize: 9, fontWeight: 700 } as const;

const spring = Array.from({ length: 8 }, (_, i) => `L${i % 2 ? 86 : 74} ${30 + i * 5}`).join("");

export default function ForceArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M44 10h72" stroke="var(--ground)" strokeWidth="2" />
      <path
        d="M50 10l-6-6M60 10l-6-6M70 10l-6-6M80 10l-6-6M90 10l-6-6M100 10l-6-6M110 10l-6-6"
        stroke="var(--ground)"
        strokeWidth="1"
      />
      <path d="M80 10v8" stroke="var(--ground)" strokeWidth="2" />
      <rect
        x="68"
        y="18"
        width="24"
        height="60"
        rx="3"
        fill="var(--surface)"
        stroke="var(--ground)"
        strokeWidth="2"
      />
      <path
        d={`M80 24L80 28${spring}L80 72`}
        fill="none"
        stroke="var(--output)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <g stroke="var(--ground)" strokeWidth="1">
        {[30, 40, 50, 60, 70].map((y) => (
          <path key={y} d={`M92 ${y}h5`} />
        ))}
      </g>
      <path d="M80 72v14" stroke="var(--ink)" strokeWidth="1.5" />
      <path d="M80 86a4 4 0 1 1-4 4" fill="none" stroke="var(--ink)" strokeWidth="1.5" />
      <rect
        x="64"
        y="94"
        width="32"
        height="18"
        rx="2"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <path d="M118 80v26" stroke="var(--input)" strokeWidth="2.5" />
      <path
        d="M112 100l6 8 6-8"
        fill="none"
        stroke="var(--input)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text x="126" y="94" style={{ ...label, fill: "var(--input)" }}>
        F
      </text>
    </svg>
  );
}
