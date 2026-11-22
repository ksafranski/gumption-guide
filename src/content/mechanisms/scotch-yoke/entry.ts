import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "scotch-yoke",
  category: "mechanisms",
  title: "Scotch yoke",
  aka: ["Slotted yoke", "Slotted link", "Slotted crosshead"],
  motion: "rot-lin",
  family: "linkages",
  summary:
    "A crank pin sliding in a slotted frame produces perfectly smooth, sinusoidal back-and-forth motion.",
  body: [
    "Only the side-to-side position of the pin reaches the yoke; its up-and-down motion is absorbed as the pin slides along the slot.",
    "So the output is exactly r·cos θ — pure simple harmonic motion, which a slider-crank can only approximate. It is compact, but the sliding contact wears faster than a pinned joint.",
  ],
  key: "Output = crank radius × cos(angle).",
  uses: ["Valve actuators", "Shake tables", "Some compressors", "Pipe-cutting saws"],
  tags: ["linkage", "rotary-to-linear"],
  related: ["slider-crank", "cam"],
  outLabel: "Rod position",
  status: "reviewed",
  order: 4,
});
