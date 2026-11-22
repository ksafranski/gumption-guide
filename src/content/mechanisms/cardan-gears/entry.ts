import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "cardan-gears",
  category: "mechanisms",
  title: "Cardan gears",
  aka: ["Tusi couple", "Hypocycloid straight-line motion", "Cardan circles"],
  motion: "rot-lin",
  family: "gears",
  summary:
    "A gear rolling inside a ring twice its size makes every point on its rim travel in a perfectly straight line.",
  body: [
    "The crank carries the small gear around the inside of the fixed ring. Rolling inside a circle of exactly twice its diameter, the small gear spins backwards at the same rate the crank turns forwards.",
    "Those two motions cancel sideways and add lengthways, so a point on the small gear's pitch circle slides along a diameter of the ring — straight-line motion from pure rotation, with no guides. Nasir al-Din al-Tusi described the idea in the 13th century.",
  ],
  key: "Rolling inside a circle twice its size → rim points move in straight lines.",
  uses: [
    "Printing presses",
    "Some pumps and engines",
    "Astronomical models",
    "Ellipse-drawing tools",
  ],
  tags: ["gearing", "rotary-to-linear", "straight-line"],
  related: ["planetary", "trammel", "scotch-yoke"],
  outLabel: "Point position",
  status: "reviewed",
  order: 12,
});
