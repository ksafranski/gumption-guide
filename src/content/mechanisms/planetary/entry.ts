import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "planetary",
  category: "mechanisms",
  title: "Planetary gears",
  aka: ["Epicyclic gear train", "Sun and planet gears", "Planetary gearbox"],
  motion: "rot-rot",
  family: "gears",
  summary:
    "A sun gear drives planets that roll around inside a fixed ring, turning their carrier slowly with great force.",
  body: [
    "The ring gear is held still. As the sun turns, the planets mesh with both the sun and the ring, so they must walk around the inside of the ring, taking the carrier with them.",
    "With 14 sun teeth and 34 ring teeth the carrier turns 14 ÷ (14 + 34) — about 0.29× the sun speed — a big reduction in a small, coaxial package. Holding a different member (sun, ring or carrier) gives a different ratio, which is how automatic gearboxes change gear.",
  ],
  key: "Ring fixed: carrier speed = sun speed × sun teeth ÷ (sun + ring teeth).",
  uses: [
    "Automatic transmissions",
    "Electric screwdrivers",
    "Bicycle hub gears",
    "Wind turbines",
    "Robot joints",
  ],
  tags: ["gearing", "speed-ratio"],
  related: ["spur-gears", "cardan-gears"],
  outLabel: "Carrier angle",
  status: "reviewed",
  order: 11,
});
