// Three-leaflet leaf: the middle leaflet on a longer stalk.
export default function PoisonIvyArt() {
  const leaf = "M0 0c-10-6-12-22-2-34 4 8 12 14 10 24-2 8-6 10-8 10z";
  return (
    <svg viewBox="0 0 160 120">
      <path
        d="M80 112C80 90 80 76 80 62M80 76L56 70M80 76l24-6"
        stroke="var(--wood)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <g fill="var(--output-fill)" stroke="var(--output)" strokeWidth="2" strokeLinejoin="round">
        <path d={leaf} transform="translate(80 62) scale(1.3)" />
        <path d={leaf} transform="translate(56 70) rotate(-70) scale(1.1)" />
        <path d={leaf} transform="translate(104 70) rotate(70) scale(1.1) scale(-1 1)" />
      </g>
    </svg>
  );
}
