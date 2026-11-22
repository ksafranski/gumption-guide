import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "slider-crank",
  category: "mechanisms",
  title: "Slider-crank",
  aka: ["Crank and connecting rod", "Piston and crank", "Crank slider"],
  motion: "rot-lin",
  family: "linkages",
  summary:
    "A turning crank and a connecting rod drive a slider back and forth — or a pushing piston turns the crank.",
  body: [
    "The crank pin travels in a circle. The connecting rod carries its position to a slider that can only move along a straight guide. The stroke is twice the crank radius.",
    'Because the rod tilts as it works, the motion is not a perfect sine wave — the slider moves a little faster on the half nearest the crank. At the two "dead centres" the rod and crank line up, and a piston alone could not start it moving; a flywheel carries it through.',
  ],
  key: "Stroke = 2 × crank radius.",
  uses: ["Car engines", "Steam engines", "Air compressors", "Pumps", "Jigsaws"],
  tags: ["linkage", "rotary-to-linear"],
  related: ["rack-pinion"],
  outLabel: "Slider position",
  status: "reviewed",
  order: 3,
});
