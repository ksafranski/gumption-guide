import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "stamp-mill",
  category: "mechanisms",
  title: "Wiper cam & stamp",
  aka: ["Stamp mill", "Tappet and wiper", "Trip hammer"],
  motion: "rot-lin",
  family: "cams",
  summary:
    "Arms on a turning shaft catch a collar, lift a heavy stamp, then let it drop under its own weight.",
  body: [
    "Each wiper arm slides under the tappet collar and raises the stamp as the shaft turns. When the arm's tip slips past, nothing holds the stamp and it falls.",
    "This turns steady rotation into a slow lift and a sudden blow — the jagged graph says it all. Water-wheel shafts drove rows of these to crush ore, forge iron and pound cloth for centuries.",
  ],
  key: "Slow lift, free fall: rotation becomes repeated impact.",
  uses: ["Ore stamp mills", "Trip hammers", "Fulling mills", "Rice pounders"],
  tags: ["cam", "rotary-to-linear"],
  related: ["cam", "heart-cam", "ratchet"],
  outLabel: "Stamp height",
  status: "reviewed",
  order: 34,
});
