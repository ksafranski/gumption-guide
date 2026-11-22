import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sharpen-a-knife",
  category: "fieldcraft",
  title: "Sharpening a knife",
  aka: ["Whetstone", "Honing", "Burr", "Stropping", "Edge angle"],
  difficulty: "moderate",
  summary:
    "Hold a steady angle on the stone until a burr forms along the whole edge, then refine and remove it.",
  key: "Same angle every stroke. No burr, not done.",
  gear: [
    "Coarse and fine stones (or a combination stone)",
    "Water or oil, as the stone requires",
    "Marker pen",
    "Leather strop (optional)",
  ],
  steps: [
    {
      caption:
        "Color the bevel with a marker. After a few strokes, where the ink is gone shows where you're actually grinding.",
    },
    {
      caption:
        "Set the angle: about 20° per side for an outdoor or kitchen knife; lower is keener but more fragile.",
    },
    {
      caption:
        "Push the edge across the coarse stone as if slicing a thin layer off it, heel to tip, keeping the angle.",
    },
    {
      caption:
        "Feel for a burr: a tiny rough lip on the opposite side. Keep going until it runs the full length.",
    },
    {
      caption:
        "Switch sides and repeat until the burr flips back. Then move to the fine stone with lighter strokes.",
    },
    {
      caption:
        "Finish with a few alternating light strokes, then strop edge-trailing on leather to clean off the burr.",
    },
  ],
  safety: [
    "Keep fingers behind the edge and above the stone, never in front of the stroke.",
    "Test sharpness on paper, not your thumb.",
  ],
  tags: ["tools", "camping"],
  related: ["split-firewood", "angle"],
  status: "draft",
  order: 18,
});
