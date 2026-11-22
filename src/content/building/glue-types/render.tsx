// Two boards glued and clamped, a bead of squeeze-out along the joint.
export default function GlueTypesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="20"
        y="40"
        width="120"
        height="20"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <rect
        x="20"
        y="60"
        width="120"
        height="20"
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path d="M20 60h120" stroke="var(--tape)" strokeWidth="3" />
      <g fill="var(--tape)">
        {[34, 56, 92, 118].map((x) => (
          <circle key={x} cx={x} cy="60" r="2.5" />
        ))}
      </g>
      {[48, 112].map((x) => (
        <g key={x} fill="none" stroke="var(--input)" strokeWidth="3">
          <path d={`M${x - 10} 32V24h20v8M${x - 10} 88v8h20v-8`} />
          <path d={`M${x + 10} 24v72`} />
        </g>
      ))}
    </svg>
  );
}
