import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "square-foot-spacing",
  category: "garden",
  title: "Plant spacing by the square foot",
  aka: ["Square foot gardening", "Intensive planting", "How many plants per square"],
  kind: "planting",
  summary:
    "Divide a bed into 1-ft squares and plant 1, 4, 9 or 16 per square depending on the plant's mature size.",
  key: "Big plants 1 per square, medium 4, small 9, tiny 16.",
  body: [
    "Close, even spacing shades out weeds and makes the most of a small bed. It needs rich soil and regular water, since the plants compete for both.",
  ],
  reference: [
    {
      term: "1 per square",
      detail:
        "Tomato (staked), pepper, broccoli, cabbage, eggplant. Squash and melons may need 2 or more squares, or a trellis.",
    },
    { term: "4 per square", detail: "Lettuce (heads), Swiss chard, marigolds, parsley." },
    { term: "9 per square", detail: "Bush beans, spinach, beets, peas (along a trellis)." },
    { term: "16 per square", detail: "Carrots, radishes, onions (green), scallions." },
  ],
  steps: [
    { caption: "Lay a grid of string or thin strips across the bed at 1 ft spacing." },
    {
      caption:
        "For 4 per square, press a finger in at the middle of each quarter; for 9, a 3 × 3 grid; for 16, 4 × 4.",
    },
    { caption: "Drop 1–2 seeds in each hole, or set one transplant, and thin to one." },
    { caption: "Plant something new in a square as soon as you harvest it." },
  ],
  uses: ["Raised beds", "Small gardens", "Planning seed quantities"],
  tags: ["planting", "seeds"],
  related: ["raised-beds", "sowing-seeds", "area", "crop-rotation"],
  status: "draft",
  order: 15,
});
