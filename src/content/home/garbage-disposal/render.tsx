import { label } from "@/renderers/illustration/hardware";

// The disposal under the sink, a hex key in the bottom socket and the red reset button.
export default function GarbageDisposalArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M30 10h100l-8 14H38z" fill="var(--surface)" stroke="var(--ink)" />
      <rect
        x="54"
        y="24"
        width="52"
        height="64"
        rx="8"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <rect x="106" y="40" width="22" height="10" fill="var(--part)" stroke="var(--ink)" />
      <circle cx="80" cy="96" r="6" fill="var(--part)" stroke="var(--ink)" />
      <path
        d="M80 92v20h24"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <circle cx="66" cy="94" r="3.5" fill="var(--warn)" stroke="var(--ink)" strokeWidth="0.6" />
      <text x="40" y="112" style={{ ...label, fontSize: 5 }}>
        RESET
      </text>
      <text x="110" y="114" style={{ ...label, fontSize: 5 }}>
        HEX KEY
      </text>
    </svg>
  );
}
