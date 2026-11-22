import { Screw, label } from "@/renderers/illustration/hardware";

// Section of a butt joint: a pocket bored into the back of one board, the screw angled into the other.
export default function PocketScrewsArt() {
  const w = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 1.2 };
  return (
    <svg viewBox="0 0 160 120">
      <rect x="10" y="60" width="78" height="22" {...w} />
      <rect x="88" y="16" width="22" height="94" {...w} />
      <path d="M40 84L64 77.5" stroke="var(--ink)" strokeWidth="11" />
      <path d="M40 84L64 77.5" stroke="var(--bg)" strokeWidth="9" />
      <g transform="rotate(-105.5 62 78)">
        <Screw x={62} y={78} len={46} w={4.5} head="washer" thread={0.5} pitch={3} />
      </g>
      <text x="36" y="100" textAnchor="middle" style={label}>
        POCKET
      </text>
    </svg>
  );
}
