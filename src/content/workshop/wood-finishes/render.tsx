import { label } from "@/renderers/illustration/hardware";

// A board in section: bare, oiled (soaked in), and with a built-up film on top.
export default function WoodFinishesArt() {
  const cols = [
    { x: 12, t: "BARE" },
    { x: 60, t: "OIL" },
    { x: 108, t: "FILM" },
  ];
  return (
    <svg viewBox="0 0 160 120">
      {cols.map((c, i) => (
        <g key={c.t}>
          <rect x={c.x} y="50" width="40" height="34" fill="var(--wood)" stroke="var(--ink)" />
          {i === 1 ? (
            <rect x={c.x} y="50" width="40" height="10" fill="var(--wood-grain)" opacity="0.8" />
          ) : null}
          {i === 2 ? (
            <>
              <rect x={c.x} y="50" width="40" height="4" fill="var(--wood-grain)" opacity="0.8" />
              <rect
                x={c.x}
                y="42"
                width="40"
                height="8"
                fill="var(--tape)"
                opacity="0.6"
                stroke="var(--ink)"
                strokeWidth="0.8"
              />
            </>
          ) : null}
          <text x={c.x + 20} y="100" textAnchor="middle" style={label}>
            {c.t}
          </text>
        </g>
      ))}
    </svg>
  );
}
