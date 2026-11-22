const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Bits side by side: twist, brad-point, spade, Forstner, masonry.
export default function DrillBitsArt() {
  const twist = (x: number) => {
    let d = "";
    for (let y = 30; y < 92; y += 6) d += `M${x - 4} ${y}l8 4`;
    return d;
  };
  return (
    <svg viewBox="0 0 160 120">
      <g fill="var(--metal)" stroke="var(--ink)" strokeWidth="1">
        <path d="M18 10h8v82l-4 6-4-6z" />
        <path d="M44 10h8v84h-2l-2 6-2-6h-2z" />
        <path d="M78 10v56h-10v24l10 8 10-8V66H78" />
        <path d="M104 10h6v62h-12v18h24V72h-12" />
        <path d="M134 10h8v82l-4 6-4-6z" />
        <path d="M133 88h10l-5 10z" fill="var(--input)" />
      </g>
      <path d={twist(22) + twist(48) + twist(138)} stroke="var(--ink)" strokeWidth="1" />
      {[
        [22, "TWIST"],
        [48, "BRAD"],
        [78, "SPADE"],
        [110, "FORSTNER"],
        [138, "MASONRY"],
      ].map(([x, t]) => (
        <text key={t} x={x} y="114" textAnchor="middle" style={label}>
          {t}
        </text>
      ))}
    </svg>
  );
}
