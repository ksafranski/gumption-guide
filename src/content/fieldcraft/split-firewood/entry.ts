import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "split-firewood",
  category: "fieldcraft",
  title: "Splitting firewood",
  aka: ["Splitting maul", "Axe", "Batoning", "Kindling"],
  difficulty: "moderate",
  summary:
    "Stand the round on a chopping block, read the cracks, and let the tool's weight do the work.",
  key: "Split along the cracks, from the edge in. Aim through the wood, not at it.",
  gear: [
    "Splitting maul or axe",
    "A wide, solid chopping block",
    "Boots, gloves and eye protection",
    "Wedge and sledge for tough rounds",
  ],
  steps: [
    {
      caption:
        "Clear a full circle around you: no people, branches or clutter within two tool-lengths.",
    },
    { caption: "Set the round on a chopping block so a miss hits wood, not ground or your shin." },
    {
      caption:
        "Look for checks (drying cracks) and aim along them. Knots resist; split around them.",
    },
    { caption: "On big rounds, take slabs off the edge rather than going for the middle." },
    {
      caption:
        "Stand so the bit would hit the block or ground, not your legs, if it glances. Feet apart, knees soft.",
    },
    {
      caption: "For kindling, set a knife on a small split and tap its spine with a baton of wood.",
    },
  ],
  safety: [
    "Glancing blows are the main hazard. Never split with the round on bare ground at your feet.",
    "Keep the head tight on the handle; a loose head flies.",
    "Stop when you're tired. Accuracy goes first.",
  ],
  tags: ["fire", "tools"],
  related: ["fire-lay", "wood-volume", "sharpen-a-knife", "ferro-rod"],
  status: "draft",
  order: 19,
});
