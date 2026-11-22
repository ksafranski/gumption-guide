import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "square-lashing",
  category: "knots",
  title: "Square lashing",
  aka: ["Cross lashing"],
  kind: "lashing",
  summary:
    "Binds two poles crossing at a right angle: wraps to hold, fraps to tighten, a hitch each end.",
  key: "Start with a clove hitch, wrap three or four times, frap twice, finish with a clove hitch.",
  steps: [
    { caption: "Tie a clove hitch on the upright, just below the crosspiece." },
    {
      caption:
        "Wrap: up over the crosspiece, behind the upright, down over the crosspiece, behind the upright. Three or four rounds, pulled tight, lying side by side.",
    },
    {
      caption:
        "Frap: two or three turns between the poles, around the wraps, pulling hard to cinch them.",
    },
    { caption: "Finish with a clove hitch on the crosspiece." },
  ],
  secure:
    "As good as how hard you pull each turn. Wet natural rope shrinks and tightens; synthetic can loosen.",
  untie: "hard",
  uses: ["Camp tables and racks", "Shelter frames", "Trellises", "Scaffold-style frames"],
  tags: ["lashing", "rope"],
  related: ["clove-hitch", "timber-hitch"],
  status: "draft",
  order: 5,
});
