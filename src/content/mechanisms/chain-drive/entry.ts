import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "chain-drive",
  category: "mechanisms",
  title: "Chain & sprockets",
  aka: ["Roller chain", "Sprocket drive", "Bicycle chain"],
  motion: "rot-rot",
  family: "belts",
  summary:
    "A loop of linked rollers wraps toothed sprockets, carrying rotation over a distance without slipping.",
  body: [
    "Each roller drops into a gap between sprocket teeth, so unlike a belt the chain cannot slip. Both sprockets move the same number of links per second, so the speed ratio is the tooth ratio: 18 teeth drive 12, making the small sprocket turn 1.5× faster.",
    "The chain must be a whole number of links, which is why the shaft spacing is chosen carefully (or a tensioner takes up the slack).",
  ],
  key: "Speed ratio = driver teeth ÷ driven teeth, with no slip.",
  uses: ["Bicycles", "Motorcycles", "Camshaft timing", "Conveyors", "Chainsaws"],
  tags: ["pulley", "speed-ratio"],
  related: ["belt-drive", "spur-gears"],
  outLabel: "Small sprocket angle",
  status: "reviewed",
  order: 22,
});
