// Bolt from a cloud, sound waves spreading, a stopwatch counting the gap.
const label = { fontFamily: "var(--mono)", fontSize: 8, fontWeight: 700 } as const;

export default function LightningDistanceArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M14 34c-8 0-10-12 0-14 0-12 18-14 22-6 6-6 20-2 18 8 10 0 10 12 0 12z"
        fill="var(--part)"
        stroke="var(--ground)"
        strokeWidth="1.5"
      />
      <path
        d="M32 40l-8 22h10l-8 28 20-34H36l8-16z"
        fill="var(--input)"
        stroke="var(--input)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <g fill="none" stroke="var(--output)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M60 64a20 20 0 0 1 0 26M70 56a32 32 0 0 1 0 42M80 48a44 44 0 0 1 0 58" />
      </g>
      <circle cx="128" cy="68" r="18" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <path d="M124 46h8M128 50v-4" stroke="var(--ink)" strokeWidth="2" />
      <path d="M128 68V56M128 68l8 4" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
      <text x="128" y="104" textAnchor="middle" style={{ ...label, fill: "var(--muted)" }}>
        ÷3 = KM
      </text>
    </svg>
  );
}
