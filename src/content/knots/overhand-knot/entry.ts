import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "overhand-knot",
  category: "knots",
  title: "Overhand knot",
  aka: ["Thumb knot", "Simple knot"],
  kind: "knot",
  summary:
    "A loop with the end passed through it. The smallest stopper, and the start of many others.",
  key: "Easy to tie, hard to untie once loaded. Use a figure eight if you need it back.",
  steps: [
    { caption: "Bring the end around and back across the standing part to make a loop." },
    { caption: "Pass the end up through the loop." },
    { caption: "Pull both ends to snug it down." },
  ],
  secure:
    "Holds as a stopper, but jams tight under load and weakens the rope more than most knots.",
  untie: "hard",
  uses: [
    "Stopper on a thread or cord end",
    "Keeping a line from pulling through a pulley or grommet",
    "Quick backup on the tail of another knot",
  ],
  tags: ["stopper", "rope"],
  related: ["figure-eight-knot"],
  status: "draft",
  order: 6,
});
