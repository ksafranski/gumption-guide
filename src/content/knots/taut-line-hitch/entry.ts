import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "taut-line-hitch",
  category: "knots",
  title: "Taut-line hitch",
  aka: ["Tautline", "Rigger's hitch", "Tent-line hitch"],
  kind: "hitch",
  summary:
    "An adjustable loop: slide the hitch to tighten a guyline, and it grips where you leave it.",
  key: "Two turns inside the loop, one outside. Slide to tension.",
  steps: [
    { caption: "Pass the end around the stake or anchor." },
    {
      caption:
        "Wrap the end twice around the standing part, working back toward the stake, inside the loop.",
    },
    {
      caption:
        "Cross over the turns and make one more hitch around the standing part, outside the first turns.",
    },
    { caption: "Snug it, then slide the hitch along the standing part to set the tension." },
  ],
  secure:
    "Grips well on rough line; can slip on slick, stiff or very thin cord. Add a turn if it creeps.",
  untie: "easy",
  uses: ["Tent and tarp guylines", "Clotheslines", "Tensioning a ridgeline"],
  tags: ["hitch", "rope", "camping", "tie-down"],
  related: ["truckers-hitch", "pitch-a-tarp", "two-half-hitches"],
  status: "draft",
  order: 11,
});
