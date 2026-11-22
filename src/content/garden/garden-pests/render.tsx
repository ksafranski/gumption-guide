// A leaf with an aphid cluster, a ladybug on its way, and a hand lens.
export default function GardenPestsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M20 100C20 50 60 20 120 20c0 60-40 80-100 80z"
        fill="var(--output-fill)"
        stroke="var(--output)"
        strokeWidth="2"
      />
      <path d="M20 100C50 70 80 50 120 20" stroke="var(--output)" strokeWidth="1.5" fill="none" />
      <g fill="var(--ground)">
        {[
          [70, 48],
          [76, 52],
          [66, 54],
          [72, 58],
          [80, 46],
        ].map(([x, y]) => (
          <ellipse key={`${x},${y}`} cx={x} cy={y} rx="2.5" ry="2" />
        ))}
      </g>
      <circle cx="44" cy="72" r="7" fill="var(--warn)" />
      <path d="M44 65v14" stroke="var(--ink)" />
      <circle cx="41" cy="70" r="1.3" fill="var(--ink)" />
      <circle cx="47" cy="74" r="1.3" fill="var(--ink)" />
      <circle cx="44" cy="64" r="3" fill="var(--ink)" />
      <circle cx="120" cy="80" r="16" fill="none" stroke="var(--ink)" strokeWidth="3" />
      <path d="M132 92l16 16" stroke="var(--wood)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
