import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "worm-gear",
  category: "mechanisms",
  title: "Worm & wheel",
  aka: ["Worm gear", "Worm drive", "Endless screw"],
  motion: "rot-rot",
  family: "screws",
  summary:
    "A screw-like worm turns a gear wheel at right angles, giving a huge speed reduction in one step.",
  body: [
    "Each full turn of the single-thread worm pushes the wheel forward by just one tooth, so this 24-tooth wheel turns once for every 24 turns of the worm. Seen from the side, the thread looks like a rack sliding endlessly along.",
    "Friction between the sliding surfaces usually means the wheel cannot drive the worm backwards. That self-locking is a feature: a lifted load stays put when you let go.",
  ],
  key: "Ratio = wheel teeth ÷ worm starts — 24 : 1 here.",
  uses: ["Guitar tuning pegs", "Gate openers", "Conveyor drives", "Steering boxes", "Winches"],
  tags: ["screw", "mechanical-advantage", "speed-ratio"],
  related: ["lead-screw", "rack-pinion", "spur-gears"],
  outLabel: "Wheel angle",
  status: "reviewed",
  order: 20,
});
