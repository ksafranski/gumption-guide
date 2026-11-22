import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "round-turn-two-half-hitches",
  category: "knots",
  title: "Round turn and two half hitches",
  aka: ["Round turn & two halves"],
  kind: "hitch",
  summary: "Two full turns around the post, then two half hitches on the standing part.",
  key: "The round turn takes the load; the hitches just keep it there.",
  steps: [
    { caption: "Take the line around the post twice, so it fully encircles it two times." },
    {
      caption:
        "Take the end over the standing part, around behind it, and out through the gap: one half hitch.",
    },
    { caption: "Make a second half hitch the same way round, further along." },
    { caption: "Snug the hitches up toward the turns." },
  ],
  secure:
    "More secure than two half hitches alone, and it can be tied or untied while the line is under load.",
  untie: "easy",
  uses: [
    "Mooring to a post or ring",
    "Hanging a food bag line",
    "Anchoring a hoist line to a tree",
  ],
  tags: ["hitch", "rope", "anchor"],
  related: ["two-half-hitches", "clove-hitch", "branch-hoist"],
  status: "draft",
  order: 10,
});
