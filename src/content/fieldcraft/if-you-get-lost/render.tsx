// The four letters of S.T.O.P., each on an octagonal sign.
const t = {
  fontFamily: "var(--display)",
  fontSize: 22,
  fontWeight: 700,
  fill: "var(--ink)",
} as const;
const s = {
  fontFamily: "var(--mono)",
  fontSize: 5,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;
const words = ["STOP", "THINK", "OBSERVE", "PLAN"];
const octagon = (cx: number, cy: number, r: number) =>
  Array.from({ length: 8 }, (_, i) => {
    const a = ((i * 45 + 22.5) * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
export default function IfYouGetLostArt() {
  return (
    <svg viewBox="0 0 160 120">
      {words.map((w, i) => {
        const x = 22 + i * 38.5;
        return (
          <g key={w}>
            <polygon
              points={octagon(x, 54, 17)}
              fill={i === 0 ? "var(--warn-fill)" : "var(--surface)"}
              stroke={i === 0 ? "var(--warn)" : "var(--ink)"}
            />
            <text x={x} y="62" textAnchor="middle" style={t}>
              {w[0]}
            </text>
            <text x={x} y="86" textAnchor="middle" style={s}>
              {w}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
