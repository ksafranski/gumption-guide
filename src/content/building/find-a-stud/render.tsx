// Wall face: an outlet box on a stud edge, screw heads in a vertical line, a magnet finding them.
export default function FindAStudArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="4"
        y="4"
        width="152"
        height="112"
        fill="var(--surface)"
        stroke="var(--line-strong)"
      />
      {[40, 104].map((x) => (
        <rect key={x} x={x - 6} y="4" width="12" height="112" fill="var(--wood)" opacity="0.3" />
      ))}
      <g fill="var(--metal)" stroke="var(--ink)" strokeWidth="0.8">
        {[16, 40, 64, 88].map((y) => (
          <circle key={y} cx="104" cy={y} r="2" />
        ))}
      </g>
      <rect
        x="44"
        y="70"
        width="16"
        height="24"
        rx="2"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <path d="M50 78v4M54 78v4M50 86v4M54 86v4" stroke="var(--ink)" strokeWidth="1.2" />
      <rect x="96" y="32" width="16" height="16" rx="3" fill="var(--input)" />
      <path d="M40 112V4M104 112V4" stroke="var(--output)" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M44 104h56M44 100v8M100 100v8" stroke="var(--output)" strokeWidth="1.2" />
    </svg>
  );
}
