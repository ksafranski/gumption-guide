import { Board, Screw } from "@/renderers/illustration/hardware";

const label = {
  fontFamily: "var(--mono)",
  fontSize: 6,
  fontWeight: 700,
  fill: "var(--muted)",
} as const;

// Two boards in section: clearance hole in the top board, pilot hole in the bottom, screw pulling them tight.
export default function PilotHolesArt() {
  return (
    <svg viewBox="0 0 160 120">
      <Board x={20} y={30} w={90} h={22} />
      <Board x={20} y={52} w={90} h={48} />
      <rect x="61" y="30" width="8" height="22" fill="var(--surface)" />
      <rect x="62.5" y="52" width="5" height="34" fill="var(--surface)" />
      <path d="M55 30l10 7 10-7z" fill="var(--surface)" />
      <Screw x={65} y={30} len={58} head="flat" thread={0.55} w={7} />
      <path d="M116 41h10M116 69h10" stroke="var(--output)" strokeWidth="1.5" />
      <text x="128" y="43" style={{ ...label, fill: "var(--output)" }}>
        CLEAR
      </text>
      <text x="128" y="71" style={{ ...label, fill: "var(--output)" }}>
        PILOT
      </text>
    </svg>
  );
}
