import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "crop-rotation",
  category: "garden",
  title: "Crop rotation",
  aka: ["Rotating crops", "Plant families", "Nightshades", "Brassicas", "Legumes"],
  kind: "planting",
  season: "Plan in winter",
  summary:
    "Don't grow the same plant family in the same spot year after year. It starves the soil of the same nutrients and builds up pests.",
  key: "Move each family to a new bed every year, and don't return for three or four years.",
  body: [
    "Rotation works by family, not by crop: tomatoes followed by potatoes is no rotation at all, since both are nightshades and share diseases.",
    "Legumes (peas and beans) host bacteria that fix nitrogen from the air. Following them with a hungry leafy crop uses that bonus.",
  ],
  reference: [
    { term: "Nightshades", detail: "Tomatoes, potatoes, peppers, eggplant." },
    {
      term: "Brassicas (cabbage family)",
      detail: "Cabbage, broccoli, kale, cauliflower, Brussels sprouts, radish, turnip.",
    },
    { term: "Legumes", detail: "Peas, beans." },
    { term: "Cucurbits", detail: "Squash, zucchini, pumpkins, cucumbers, melons." },
    { term: "Alliums", detail: "Onions, garlic, leeks, shallots." },
    { term: "Umbellifers", detail: "Carrots, parsnips, celery, dill, parsley." },
  ],
  steps: [
    { caption: "Divide the garden into three or four areas and list which families go in each." },
    { caption: "Each year, move every group one area along." },
    { caption: "Keep a simple map each year; you will not remember." },
  ],
  uses: ["Vegetable gardens", "Planning beds", "Reducing soil-borne disease"],
  tags: ["planting", "pests"],
  related: ["square-foot-spacing", "garden-pests", "fertilizer-npk"],
  status: "draft",
  order: 16,
});
