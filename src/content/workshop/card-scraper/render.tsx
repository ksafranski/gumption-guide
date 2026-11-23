import { label } from "@/renderers/illustration/hardware";

// The scraper's edge, enlarged: a tiny hook turned over on each corner.
export default function CardScraperArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect
        x="64"
        y="10"
        width="32"
        height="80"
        fill="var(--metal)"
        stroke="var(--ink)"
        strokeWidth="1.2"
      />
      <path
        d="M64 90c-2 4-6 6-10 6M96 90c2 4 6 6 10 6"
        fill="none"
        stroke="var(--input)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M16 104h128" stroke="var(--wood-grain)" strokeWidth="3" />
      <text x="40" y="82" textAnchor="middle" style={label}>
        BURR
      </text>
      <text x="80" y="58" textAnchor="middle" style={{ ...label, fill: "var(--ink)" }}>
        STEEL
      </text>
    </svg>
  );
}
