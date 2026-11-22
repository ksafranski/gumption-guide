import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "planting-trees-shrubs",
  category: "garden",
  title: "Planting trees & shrubs",
  aka: ["Transplanting", "Root flare", "Root-bound", "Planting hole", "Staking trees"],
  kind: "planting",
  season: "Fall or early spring",
  summary:
    "Dig wide, not deep. Set the root flare at ground level, backfill with the native soil, and water well.",
  key: "Hole two to three times as wide as the root ball and no deeper. The root flare stays visible.",
  steps: [
    {
      caption:
        "Find the root flare, where the trunk widens into roots. Scrape away extra soil in the pot if it's buried.",
    },
    {
      caption:
        "Dig a wide, shallow hole: two to three times the width of the root ball, and only as deep as from the flare down.",
    },
    {
      caption:
        "Tease out or cut circling roots so they grow outward rather than strangling the plant.",
    },
    { caption: "Set the plant with the flare at or slightly above grade. It will settle." },
    {
      caption:
        "Backfill with the soil you dug out. Heavily amended holes act like a pot, and roots stay in them.",
    },
    {
      caption:
        "Water deeply to settle the soil, mulch in a wide ring kept off the trunk, and water weekly through the first season.",
    },
    {
      caption:
        "Stake only if it won't stand on its own, with loose, wide ties low on the trunk. Remove them after a year.",
    },
  ],
  safety: ["Call your local utility locate service before digging deep or with power tools."],
  uses: ["Fruit trees", "Hedges", "Shade trees", "Moving a shrub"],
  tags: ["planting", "care"],
  related: ["mulch", "watering", "pruning-cuts", "hardiness-zones"],
  status: "draft",
  order: 13,
});
