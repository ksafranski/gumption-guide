// Drive recesses seen head-on: Phillips, square, star, slotted, hex socket.
const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;
const R = 13;
const heads = [
  { x: 30, y: 36, t: "PHILLIPS", d: "M-2-9h4v7h7v4h-7v7h-4v-7h-7v-4h7z" },
  { x: 80, y: 36, t: "SQUARE", d: "M-5-5h10v10h-10z" },
  { x: 130, y: 36, t: "STAR", d: "" },
  { x: 55, y: 84, t: "SLOTTED", d: "M-10-1.5h20v3h-20z" },
  { x: 105, y: 84, t: "HEX", d: "M-6 0l3-5.2h6l3 5.2-3 5.2h-6z" },
];
const star =
  Array.from({ length: 12 }, (_, i) => {
    const a = (i * Math.PI) / 6;
    const r = i % 2 ? 4 : 8;
    return `${i ? "L" : "M"}${(r * Math.cos(a)).toFixed(2)} ${(r * Math.sin(a)).toFixed(2)}`;
  }).join("") + "z";

export default function ScrewDrivesArt() {
  return (
    <svg viewBox="0 0 160 120">
      {heads.map((h) => (
        <g key={h.t} transform={`translate(${h.x} ${h.y})`}>
          <circle r={R} fill="var(--metal)" stroke="var(--ink)" strokeWidth="1.5" />
          <path d={h.d || star} fill="var(--ink)" />
          <text y={R + 10} textAnchor="middle" style={label}>
            {h.t}
          </text>
        </g>
      ))}
    </svg>
  );
}
