import { label } from "@/renderers/illustration/hardware";

// End view of a glued panel: growth-ring arcs alternating, clamps above and below.
export default function EdgeJoiningArt() {
  const boards = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 160 120">
      {boards.map((i) => {
        const x = 16 + i * 32;
        const up = i % 2 === 0;
        return (
          <g key={i}>
            <rect x={x} y="48" width="32" height="20" fill="var(--wood)" stroke="var(--ink)" />
            {[0, 1, 2].map((k) => (
              <path
                key={k}
                d={
                  up
                    ? `M${x + 2 + k * 3} 68C${x + 8} ${54 + k * 4} ${x + 24} ${54 + k * 4} ${x + 30 - k * 3} 68`
                    : `M${x + 2 + k * 3} 48C${x + 8} ${62 - k * 4} ${x + 24} ${62 - k * 4} ${x + 30 - k * 3} 48`
                }
                fill="none"
                stroke="var(--wood-grain)"
                strokeWidth="1"
              />
            ))}
          </g>
        );
      })}
      <rect x="8" y="36" width="144" height="6" fill="var(--metal)" stroke="var(--ink)" />
      <rect x="8" y="74" width="144" height="6" fill="var(--metal)" stroke="var(--ink)" />
      <text x="80" y="104" textAnchor="middle" style={label}>
        RINGS ALTERNATE
      </text>
    </svg>
  );
}
