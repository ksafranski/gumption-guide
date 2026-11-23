import { label } from "@/renderers/illustration/hardware";

// A grid of tiles, a rubber float pushing grout diagonally across the joints.
export default function RegroutTileArt() {
  const cells = [0, 1, 2, 3];
  return (
    <svg viewBox="0 0 160 120">
      <rect x="10" y="10" width="140" height="100" fill="var(--line-strong)" />
      {cells.map((i) =>
        [0, 1, 2].map((j) => (
          <rect
            key={`${i}${j}`}
            x={13 + i * 35}
            y={13 + j * 33}
            width="31"
            height="29"
            fill="var(--surface)"
            stroke="var(--ink)"
            strokeWidth="0.6"
          />
        )),
      )}
      <g transform="rotate(-45 100 64)">
        <rect x="76" y="56" width="48" height="16" rx="2" fill="var(--input)" stroke="var(--ink)" />
        <rect x="94" y="44" width="12" height="12" rx="2" fill="var(--wood)" stroke="var(--ink)" />
      </g>
      <text x="40" y="108" style={label}>
        DIAGONAL
      </text>
    </svg>
  );
}
