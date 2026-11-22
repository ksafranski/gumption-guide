import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "figure-eight-knot",
  category: "knots",
  title: "Figure-eight knot",
  aka: ["Figure-of-eight", "Flemish knot", "Stopper knot"],
  kind: "knot",
  summary: "A stopper with one extra turn over the overhand. Bulkier, and it unties after loading.",
  key: "If it doesn't look like an 8, it isn't one.",
  steps: [
    { caption: "Make a loop by bringing the end back across the standing part." },
    { caption: "Take the end around behind the standing part." },
    { caption: "Bring it over the front and down through the loop." },
    { caption: "Dress it so the two lobes of the 8 are clear, then pull both ends." },
  ],
  secure: "A reliable stopper. Doesn't jam the way an overhand does.",
  untie: "easy",
  uses: [
    "Stopper on sheets and halyards",
    "End of a line running through a block or fairlead",
    "Base for the figure-eight loop and follow-through",
  ],
  tags: ["stopper", "rope"],
  related: ["overhand-knot", "block-tackle"],
  status: "draft",
  order: 7,
});
