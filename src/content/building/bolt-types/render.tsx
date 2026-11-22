import { Nut, Screw, label } from "@/renderers/illustration/hardware";

// Hex bolt with nut, carriage bolt with square neck, and grade marks on hex heads.
export default function BoltTypesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <Screw x={26} y={14} len={80} head="hex" tip={false} thread={0.5} w={9} />
      <Nut x={26} y={70} w={9} h={7} />
      <Screw x={64} y={14} len={80} head="dome" tip={false} thread={0.5} w={9} />
      <rect
        x="59.5"
        y="20"
        width="9"
        height="8"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      {[
        { x: 108, n: 3, t: "GR 5" },
        { x: 140, n: 6, t: "GR 8" },
      ].map((g) => (
        <g key={g.t} transform={`translate(${g.x} 46)`}>
          <path
            d="M-13 0l6.5-11.3h13L13 0 6.5 11.3h-13z"
            fill="var(--metal)"
            stroke="var(--ink)"
            strokeWidth="1.5"
          />
          {Array.from({ length: g.n }, (_, i) => {
            const a = (i * 2 * Math.PI) / g.n - Math.PI / 2;
            return (
              <path
                key={i}
                d={`M${(3 * Math.cos(a)).toFixed(1)} ${(3 * Math.sin(a)).toFixed(1)}L${(8 * Math.cos(a)).toFixed(1)} ${(8 * Math.sin(a)).toFixed(1)}`}
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
            );
          })}
          <text y="24" textAnchor="middle" style={label}>
            {g.t}
          </text>
        </g>
      ))}
      <text x="26" y="110" textAnchor="middle" style={label}>
        HEX
      </text>
      <text x="64" y="110" textAnchor="middle" style={label}>
        CARRIAGE
      </text>
    </svg>
  );
}
