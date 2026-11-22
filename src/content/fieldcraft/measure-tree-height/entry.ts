import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "measure-tree-height",
  category: "fieldcraft",
  title: "Measuring a tree's height",
  aka: ["Stick method", "Shadow method", "Estimating height", "Woodsman's rule"],
  difficulty: "easy",
  summary:
    "Use a stick and your arm to make a 45° triangle, or compare shadows, and pace off the answer.",
  key: "Stick as long as your arm, held upright at arm's length: where top and base line up, your distance is the height.",
  gear: ["A straight stick", "Your pace count, or a tape"],
  steps: [
    {
      caption:
        "Cut a stick as long as the distance from your eye to your fist with your arm straight out.",
    },
    {
      caption:
        "Hold it upright at arm's length, so the length above your fist equals the reach from your eye.",
    },
    {
      caption:
        "Walk toward or away from the tree until the stick tip lines up with the treetop and your fist with the base.",
    },
    { caption: "Your distance from the trunk is now about the tree's height. Pace it off." },
    {
      caption:
        "Shadow method: tree height = your height × (tree's shadow ÷ your shadow). Measure both shadows at the same moment.",
    },
  ],
  safety: [
    "Felling a tree needs more than a height estimate. Leave it to someone trained if it could hit anything.",
  ],
  uses: [
    "Will it reach the tent?",
    "Picking a hang branch",
    "Firewood estimates",
    "Rope length for a hoist",
  ],
  tags: ["measuring", "navigation"],
  related: ["pace-count", "angle", "branch-hoist", "choose-a-campsite"],
  status: "draft",
  order: 17,
});
