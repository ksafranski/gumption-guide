import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "four-bar",
  category: "mechanisms",
  title: "Four-bar linkage",
  aka: ["Crank-rocker", "Four-bar crank rocker", "Coupler curve"],
  motion: "rot-osc",
  family: "linkages",
  summary:
    "Four links joined in a loop turn a full rotation into a rocking swing, while the middle link traces a rich curve.",
  body: [
    "The frame between the two fixed pivots is the fourth link. The short crank turns all the way round; the coupler connects it to the rocker, which can only swing back and forth.",
    "Whether the crank can rotate fully is set by Grashof's rule: shortest + longest link must not exceed the sum of the other two. The dashed loop is the path of one point on the coupler — engineers once catalogued thousands of these curves.",
  ],
  key: "Shortest + longest ≤ the other two → the crank can turn fully.",
  uses: [
    "Windscreen wipers",
    "Oil pump jacks",
    "Walking machines",
    "Folding seats",
    "Exercise machines",
  ],
  tags: ["linkage"],
  related: ["slider-crank", "quick-return"],
  outLabel: "Rocker angle",
  status: "reviewed",
  order: 7,
});
