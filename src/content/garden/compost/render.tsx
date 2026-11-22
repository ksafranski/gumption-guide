// Compost bin in section: browns and greens layered, heat rising from the middle.
export default function CompostArt() {
  const layers = [
    [96, "var(--wood)"],
    [84, "var(--output-fill)"],
    [72, "var(--wood)"],
    [60, "var(--output-fill)"],
    [48, "var(--wood)"],
  ] as const;
  return (
    <svg viewBox="0 0 160 120">
      {layers.map(([y, f]) => (
        <rect key={y} x="34" y={y} width="92" height="12" fill={f} />
      ))}
      <g stroke="var(--wood)" strokeWidth="4">
        {[30, 56, 82, 108, 130].map((x) => (
          <path key={x} d={`M${x} 40v70`} />
        ))}
      </g>
      <path d="M26 110h108" stroke="var(--ground)" strokeWidth="2" />
      <g stroke="var(--input)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M68 40c-4-6 4-10 0-18M80 38c-4-6 4-10 0-18M92 40c-4-6 4-10 0-18" />
      </g>
    </svg>
  );
}
