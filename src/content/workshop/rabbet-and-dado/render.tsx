import { label } from "@/renderers/illustration/hardware";

// End view of two boards: a rabbet on the left board's edge, a dado across the right one.
export default function RabbetAndDadoArt() {
  const w = { fill: "var(--wood)", stroke: "var(--ink)", strokeWidth: 1.2 };
  return (
    <svg viewBox="0 0 160 120">
      <path d="M12 40h48v40H32V60H12z" {...w} />
      <path d="M12 60h20v20H12z" fill="none" stroke="var(--input)" strokeDasharray="2 2" />
      <path d="M88 40h60v40h-20V60h-20v20H88z" {...w} />
      <path d="M108 60h20v20h-20z" fill="none" stroke="var(--input)" strokeDasharray="2 2" />
      <text x="36" y="100" textAnchor="middle" style={label}>
        RABBET
      </text>
      <text x="118" y="100" textAnchor="middle" style={label}>
        DADO
      </text>
    </svg>
  );
}
