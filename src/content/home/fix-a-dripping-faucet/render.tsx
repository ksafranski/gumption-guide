import { label } from "@/renderers/illustration/hardware";

// A faucet exploded vertically: handle, nut, cartridge, body, with a drip from the spout.
export default function FixADrippingFaucetArt() {
  return (
    <svg viewBox="0 0 160 120">
      <rect x="22" y="8" width="36" height="10" rx="4" fill="var(--metal)" stroke="var(--ink)" />
      <rect x="30" y="26" width="20" height="10" fill="var(--metal)" stroke="var(--ink)" />
      <rect x="33" y="42" width="14" height="30" rx="2" fill="var(--input)" stroke="var(--ink)" />
      <path d="M33 50h14M33 64h14" stroke="var(--ink)" strokeWidth="0.8" />
      <path
        d="M26 82h28v26H26zM54 88h44a8 8 0 0 1 8 8v4h-10v-2H54z"
        fill="var(--metal)"
        stroke="var(--ink)"
      />
      <path d="M101 104c-3 5-3 7 0 8 3-1 3-3 0-8z" fill="var(--output)" />
      <g stroke="var(--line-strong)" strokeDasharray="2 2">
        <path d="M40 18v8M40 36v6M40 72v10" />
      </g>
      <text x="62" y="16" style={label}>
        HANDLE
      </text>
      <text x="56" y="60" style={label}>
        CARTRIDGE
      </text>
    </svg>
  );
}
