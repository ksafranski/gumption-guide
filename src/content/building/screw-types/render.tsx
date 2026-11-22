import { Screw, label } from "@/renderers/illustration/hardware";

// A row of screws: wood (partial thread), deck, drywall (bugle), machine (blunt), lag (hex).
const row = [
  { x: 22, head: "flat", thread: 0.6, len: 84, t: "WOOD" },
  { x: 52, head: "flat", thread: 0.85, len: 84, t: "DECK", fill: "var(--output-fill)" },
  { x: 80, head: "bugle", thread: 1, len: 70, t: "DRYWALL", fill: "var(--ink)" },
  { x: 108, head: "pan", thread: 1, len: 60, t: "MACHINE", tip: false },
  { x: 138, head: "hex", thread: 0.6, len: 90, t: "LAG", w: 10 },
] as const;

export default function ScrewTypesArt() {
  return (
    <svg viewBox="0 0 160 120">
      {row.map((s) => (
        <g key={s.t}>
          <Screw
            x={s.x}
            y={12}
            len={s.len}
            head={s.head}
            thread={s.thread}
            w={"w" in s ? s.w : 7}
            tip={"tip" in s ? s.tip : true}
            fill={"fill" in s ? s.fill : undefined}
          />
          <text x={s.x} y="114" textAnchor="middle" style={{ ...label, fontSize: 6 }}>
            {s.t}
          </text>
        </g>
      ))}
    </svg>
  );
}
