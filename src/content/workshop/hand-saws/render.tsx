import { label } from "@/renderers/illustration/hardware";

// Rip and crosscut tooth profiles, enlarged.
function Teeth({ y, rip }: { y: number; rip: boolean }) {
  let d = `M20 ${y}`;
  for (let x = 20; x < 140; x += 12) d += rip ? `l2 12l10 -12` : `l6 12l6 -12`;
  return (
    <g>
      <rect x="20" y={y - 14} width="120" height="14" fill="var(--metal)" stroke="var(--ink)" />
      <path d={d} fill="var(--metal)" stroke="var(--ink)" />
    </g>
  );
}
export default function HandSawsArt() {
  return (
    <svg viewBox="0 0 160 120">
      <Teeth y={30} rip />
      <Teeth y={78} rip={false} />
      <text x="80" y="58" textAnchor="middle" style={label}>
        RIP · CHISEL
      </text>
      <text x="80" y="106" textAnchor="middle" style={label}>
        CROSSCUT · KNIFE
      </text>
    </svg>
  );
}
