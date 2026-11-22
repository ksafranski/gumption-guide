import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "crossed-belt",
  category: "mechanisms",
  title: "Crossed belt",
  aka: ["Cross belt drive", "Reversing belt", "Figure-eight belt"],
  motion: "rot-rot",
  family: "belts",
  summary: "Twisting a belt into a figure-eight makes the driven pulley turn the opposite way.",
  body: [
    "Each strand of the belt leaves the top of one pulley and arrives at the bottom of the other, so the two pulleys turn in opposite directions — like a pair of gears, but over a distance.",
    "The crossed belt wraps further around each pulley, so it grips better than an open belt, but the strands rub where they cross. Old workshops used a shifting belt between open and crossed pulleys to reverse machines.",
  ],
  key: "Crossing the belt reverses direction; the ratio is still the diameter ratio.",
  uses: ["Line-shaft workshops", "Lathe reversing", "Spinning wheels", "Toys"],
  tags: ["pulley", "speed-ratio"],
  related: ["belt-drive", "spur-gears"],
  outLabel: "Driven pulley angle",
  status: "reviewed",
  order: 13,
});
