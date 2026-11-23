import { label } from "@/renderers/illustration/hardware";

// A cathole in section, 6–8 inches deep, with a trowel; a stream far off with "200 ft".
export default function DigACatholeArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M0 60h160v60H0z" fill="var(--wood)" opacity="0.6" />
      <path d="M0 60h46M74 60h86" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M46 60v26a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V60" fill="var(--bg)" stroke="var(--ink)" />
      <path d="M84 60v30" stroke="var(--output)" strokeWidth="1" />
      <path d="M80 60h8M80 90h8" stroke="var(--output)" strokeWidth="1" />
      <text x="92" y="79" style={label}>
        6–8 IN
      </text>
      <path d="M30 20l18 32" stroke="var(--wood-grain)" strokeWidth="3" strokeLinecap="round" />
      <path d="M48 52l8 10-12 -2z" fill="var(--metal)" stroke="var(--ink)" />
      <path d="M128 56c8-4 16-4 28 0" stroke="var(--output)" strokeWidth="3" fill="none" />
      <path d="M78 40h44M78 36v8M122 36v8" stroke="var(--muted)" />
      <text x="100" y="32" textAnchor="middle" style={label}>
        200 FT
      </text>
    </svg>
  );
}
