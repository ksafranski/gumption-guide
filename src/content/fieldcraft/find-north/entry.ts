import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "find-north",
  category: "fieldcraft",
  title: "Finding north without a compass",
  aka: ["Shadow stick", "North Star", "Polaris", "Natural navigation"],
  difficulty: "easy",
  summary: "Use the sun's shadow by day or the North Star by night to get a rough bearing.",
  key: "Shadow tips move west to east. First mark is west, second is east.",
  gear: ["A straight stick about 3 ft long", "Two small stones or pegs"],
  steps: [
    { caption: "Push a stick upright into level ground in full sun." },
    { caption: "Mark the tip of its shadow with a stone." },
    { caption: "Wait 15 to 20 minutes and mark the new tip." },
    { caption: "A line from the first mark to the second runs roughly west to east." },
    {
      caption:
        "Stand with the first mark on your left and the second on your right. You're facing north (either hemisphere).",
    },
  ],
  safety: [
    "These are rough bearings. Carry a real map and compass when it matters.",
    "Accuracy drops near the equator around midday, and with short waits between marks.",
  ],
  tags: ["navigation", "camping"],
  related: ["fire-lay"],
  status: "draft",
  order: 2,
});
