// Sun over a shoulder; brim of shade cast by a hat.
export default function SunburnArt() {
  return (
    <svg viewBox="0 0 160 120">
      <circle
        cx="130"
        cy="26"
        r="12"
        fill="var(--input-fill)"
        stroke="var(--input)"
        strokeWidth="2"
      />
      <g stroke="var(--input)" strokeWidth="1.5" strokeLinecap="round">
        <path d="M130 6v-4M150 26h4M144 12l3-3M116 12l-3-3M144 40l3 3" />
      </g>
      <circle cx="62" cy="54" r="16" fill="var(--part)" stroke="var(--ink)" strokeWidth="1.5" />
      <path
        d="M30 112c0-26 14-40 32-40s32 14 32 40z"
        fill="var(--part)"
        stroke="var(--ink)"
        strokeWidth="1.5"
      />
      <path
        d="M80 82c8 6 12 16 14 30"
        fill="none"
        stroke="var(--warn)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path d="M30 44h64" stroke="var(--wood)" strokeWidth="4" strokeLinecap="round" />
      <path d="M46 44c0-14 6-20 16-20s16 6 16 20z" fill="var(--wood)" />
      <path d="M30 46l14 22h36l14-22" fill="var(--output-fill)" opacity="0.5" />
    </svg>
  );
}
