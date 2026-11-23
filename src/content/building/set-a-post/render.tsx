import { label } from "@/renderers/illustration/hardware";

// A post in section: gravel at the bottom, backfill crowned at the top, frost line dashed.
export default function SetAPostArt() {
  return (
    <svg viewBox="0 0 160 120">
      <path d="M0 40h160v80H0z" fill="var(--part)" />
      <path d="M0 40h160" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M56 40l-4 4v70h56V44l-4-4z" fill="var(--metal)" opacity="0.45" stroke="var(--ink)" />
      <path d="M52 38q28 -8 56 0v6H52z" fill="var(--metal)" opacity="0.6" />
      <rect x="52" y="102" width="56" height="12" fill="var(--ground)" stroke="var(--ink)" />
      <rect x="70" y="4" width="20" height="98" fill="var(--wood)" stroke="var(--ink)" />
      <path d="M0 88h160" stroke="var(--output)" strokeWidth="1" strokeDasharray="4 3" />
      <text x="114" y="84" style={label}>
        FROST
      </text>
      <text x="114" y="112" style={label}>
        GRAVEL
      </text>
    </svg>
  );
}
