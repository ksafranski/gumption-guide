import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "rack-pinion",
  category: "mechanisms",
  title: "Rack & pinion",
  aka: ["Rack and pinion", "Gear rack"],
  motion: "rot-lin",
  family: "gears",
  summary:
    "A gear meshing with a toothed bar turns rotation into straight-line travel — and back again.",
  body: [
    'The pinion is an ordinary gear; the rack is a gear "unrolled" flat. Each turn of the pinion moves the rack by one pitch circumference.',
    "It is reversible: push the rack and the pinion spins. In this demo the pinion swings back and forth so the rack stays on screen.",
  ],
  key: "Travel per turn = π × pinion pitch diameter.",
  uses: [
    "Car steering",
    "Drill press feed",
    "Camera focus rails",
    "Rack railways",
    "Sliding gates",
  ],
  tags: ["gearing", "rotary-to-linear", "circumference"],
  related: ["spur-gears", "scotch-yoke"],
  outLabel: "Rack position",
  status: "reviewed",
  order: 2,
});
