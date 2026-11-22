const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Nails drawn to relative length: common 16d, box, finish, ring shank, roofing.
function Nail({
  x,
  len,
  w,
  head,
  ring,
}: {
  x: number;
  len: number;
  w: number;
  head: number;
  ring?: boolean;
}) {
  const y = 12;
  let rings = "";
  if (ring)
    for (let yy = y + 20; yy < y + len - 10; yy += 4) rings += `M${x - w / 2 - 1} ${yy}h${w + 2}`;
  return (
    <g>
      <path
        d={`M${x - w / 2} ${y + 2}v${len - 8}l${w / 2} 6l${w / 2}-6v${-(len - 8)}z`}
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <rect
        x={x - head / 2}
        y={y}
        width={head}
        height="3"
        rx="1"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path d={rings} stroke="var(--ink)" strokeWidth="1" />
    </g>
  );
}

export default function NailTypesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <Nail x={22} len={88} w={5} head={11} />
      <Nail x={52} len={88} w={3.5} head={9} />
      <Nail x={80} len={63} w={3} head={4} />
      <Nail x={106} len={63} w={3.5} head={9} ring />
      <Nail x={136} len={32} w={3.5} head={16} />
      {[
        [22, "16d"],
        [52, "BOX"],
        [80, "FINISH"],
        [106, "RING"],
        [136, "ROOF"],
      ].map(([x, t]) => (
        <text key={t} x={x} y="114" textAnchor="middle" style={label}>
          {t}
        </text>
      ))}
    </svg>
  );
}
