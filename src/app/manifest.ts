import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gumption Guide",
    short_name: "Gumption",
    description: "A field manual for practical know-how.",
    id: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#171614",
    theme_color: "#171614",
    icons: [
      { src: "/icons/icon.svg?v=2", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/icon-192.png?v=2", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png?v=2", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-maskable-512.png?v=2",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
