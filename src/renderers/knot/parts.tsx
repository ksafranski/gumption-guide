// Shared SVG parts for knot diagrams. Original drawings; schematic, not to scale.

export function Post({
  x = 140,
  w = 40,
  y = 6,
  h = 228,
}: {
  x?: number;
  w?: number;
  y?: number;
  h?: number;
}) {
  return (
    <g className="k-wood">
      <rect x={x} y={y} width={w} height={h} rx={3} />
      <path
        d={`M${x + w * 0.3} ${y + 10} v${h - 30} M${x + w * 0.62} ${y + 30} v${h - 70}`}
        className="k-grain"
      />
    </g>
  );
}

export function Spar({
  y = 98,
  h = 44,
  x = 14,
  w = 292,
}: {
  y?: number;
  h?: number;
  x?: number;
  w?: number;
}) {
  return (
    <g className="k-wood">
      <rect x={x} y={y} width={w} height={h} rx={3} />
      <path
        d={`M${x + 16} ${y + h * 0.32} h${w - 60} M${x + 50} ${y + h * 0.68} h${w - 90}`}
        className="k-grain"
      />
    </g>
  );
}

export function Ring({ cx, cy, r = 14 }: { cx: number; cy: number; r?: number }) {
  return (
    <g className="k-metal">
      <circle cx={cx} cy={cy} r={r} />
    </g>
  );
}

export function Anchor({ x, y, w = 80 }: { x: number; y: number; w?: number }) {
  return (
    <g className="k-ground">
      <path d={`M${x - w / 2} ${y} h${w}`} />
      {Array.from({ length: Math.floor(w / 8) }, (_, i) => (
        <path key={i} d={`M${x - w / 2 + 6 + i * 8} ${y} l-5 7`} />
      ))}
    </g>
  );
}

/** Dashed direction arrow. */
export function Pull({ d }: { d: string }) {
  return <path d={d} className="k-pull" markerEnd="url(#k-arrow)" />;
}

export function Label({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text x={x} y={y} className="k-label">
      {children}
    </text>
  );
}
