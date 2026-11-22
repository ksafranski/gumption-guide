// Shared hardware drawings for building illustrations (viewBox 0 0 160 120). Client-only, hook-free.

export const label = {
  fontFamily: "var(--mono)",
  fontSize: 7,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

type Head = "flat" | "pan" | "hex" | "dome" | "bugle" | "washer" | "none";

function headPath(x: number, y: number, w: number, head: Head): { d: string; h: number } {
  const r = w / 2;
  switch (head) {
    case "flat":
      return {
        d: `M${x - w * 1.1} ${y}h${w * 2.2}l${-(w * 1.1 - r)} ${w * 0.8}h${-w}z`,
        h: w * 0.8,
      };
    case "bugle":
      return {
        d: `M${x - w * 1.1} ${y}h${w * 2.2}c0 ${w * 0.5} ${-w * 0.4} ${w * 0.9} ${-(w * 1.1 - r)} ${w * 0.9}h${-w}c${-w * 0.2} 0 ${-(w * 0.6 - r) - w * 0.1} ${-w * 0.4} ${-(w * 0.6)} ${-w * 0.9}z`,
        h: w * 0.9,
      };
    case "pan":
      return {
        d: `M${x - w} ${y + w * 0.7}c0-${w * 0.8} ${w * 2}-${w * 0.8} ${w * 2} 0z`,
        h: w * 0.7,
      };
    case "dome":
      return {
        d: `M${x - w * 1.3} ${y + w * 0.7}c0-${w} ${w * 2.6}-${w} ${w * 2.6} 0z`,
        h: w * 0.7,
      };
    case "hex":
      return { d: `M${x - w} ${y}h${w * 2}v${w * 0.8}h${-w * 2}z`, h: w * 0.8 };
    case "washer":
      return {
        d: `M${x - w * 1.4} ${y + w * 0.4}h${w * 2.8}v${w * 0.3}h${-w * 2.8}zM${x - w * 0.8} ${y}h${w * 1.6}v${w * 0.4}h${-w * 1.6}z`,
        h: w * 0.7,
      };
    case "none":
      return { d: "", h: 0 };
  }
}

/** A screw or bolt standing upright, head at y, overall length len. */
export function Screw({
  x,
  y,
  len,
  w = 8,
  head = "flat",
  tip = true,
  thread = 1,
  pitch = 4,
  fill = "var(--metal)",
}: {
  x: number;
  y: number;
  len: number;
  w?: number;
  head?: Head;
  tip?: boolean;
  /** Fraction of the shank that is threaded, from the tip up. */
  thread?: number;
  pitch?: number;
  fill?: string;
}) {
  const hd = headPath(x, y, w, head);
  const top = y + hd.h;
  const tipLen = tip ? w * 1.2 : 0;
  const shankEnd = y + len - tipLen;
  const tStart = shankEnd - (shankEnd - top) * thread;
  let threads = "";
  for (let yy = shankEnd - 1; yy > tStart; yy -= pitch)
    threads += `M${x - w / 2 - 1.5} ${yy}L${x + w / 2 + 1.5} ${yy - pitch * 0.6}`;
  return (
    <g>
      <rect
        x={x - w / 2}
        y={top}
        width={w}
        height={shankEnd - top}
        fill={fill}
        stroke="var(--ink)"
        strokeWidth="1"
      />
      {tip ? (
        <path
          d={`M${x - w / 2} ${shankEnd}L${x} ${y + len}L${x + w / 2} ${shankEnd}z`}
          fill={fill}
          stroke="var(--ink)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      ) : null}
      <path d={threads} stroke="var(--ink)" strokeWidth="1.2" />
      {hd.d ? (
        <path d={hd.d} fill={fill} stroke="var(--ink)" strokeWidth="1" strokeLinejoin="round" />
      ) : null}
    </g>
  );
}

/** A hex nut seen from the side. */
export function Nut({
  x,
  y,
  w = 8,
  h = 6,
  fill = "var(--metal)",
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  fill?: string;
}) {
  return (
    <g>
      <rect
        x={x - w * 1.1}
        y={y}
        width={w * 2.2}
        height={h}
        fill={fill}
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path
        d={`M${x - w * 0.4} ${y}v${h}M${x + w * 0.4} ${y}v${h}`}
        stroke="var(--ink)"
        strokeWidth="0.8"
      />
    </g>
  );
}

/** A board in section or side view. */
export function Board({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="var(--wood)"
        stroke="var(--ink)"
        strokeWidth="1"
      />
      <path
        d={`M${x + 4} ${y + h * 0.35}h${w - 12}M${x + 10} ${y + h * 0.7}h${w - 20}`}
        stroke="var(--wood-grain)"
        strokeWidth="1"
      />
    </g>
  );
}
