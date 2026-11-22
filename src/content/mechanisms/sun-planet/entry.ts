import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sun-planet",
  category: "mechanisms",
  title: "Sun & planet",
  aka: ["Sun and planet gear", "Watt's sun and planet", "Epicyclic crank"],
  motion: "lin-rot",
  family: "gears",
  summary:
    "A gear fixed to the end of a connecting rod orbits a central gear, turning it twice per stroke cycle — no crank needed.",
  body: [
    "The planet gear is rigidly attached to the rod, so it cannot spin on its own; it can only travel around the sun gear, held in mesh by a link. Walking around the sun without spinning forces the sun to turn — twice for each orbit when the gears are equal.",
    "James Watt adopted it in 1781 to turn his engines' beam motion into rotation while the simple crank was tied up by someone else's patent. The doubled speed was a bonus.",
  ],
  key: "Equal gears: the sun makes two turns per orbit of the planet.",
  uses: ["Watt rotative steam engines", "Museum engines", "Mechanical models"],
  tags: ["gearing", "rotary-to-linear"],
  related: ["planetary", "slider-crank", "oscillating-engine"],
  outLabel: "Sun angle",
  status: "reviewed",
  order: 31,
});
