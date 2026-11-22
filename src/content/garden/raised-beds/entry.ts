import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "raised-beds",
  category: "garden",
  title: "Raised beds",
  aka: ["Raised garden bed", "Bed size", "Filling a raised bed", "Hardware cloth"],
  kind: "planting",
  summary:
    "A framed bed of loose, rich soil that drains well, warms early, and never gets walked on.",
  key: "No wider than 4 ft so you can reach the middle; at least 12 in deep for most vegetables.",
  body: [
    "Width is the important dimension: you should be able to reach the center from either side without stepping in. 3 ft is better against a wall or fence.",
    "Untreated cedar, larch and other rot-resistant woods last years. Modern pressure-treated lumber is generally considered fine for edible beds; avoid old railroad ties and wood treated with CCA (pre-2004 in North America).",
  ],
  gear: [
    "Lumber or bed kit",
    "Screws or brackets for corners",
    "Hardware cloth (if burrowing animals)",
    "Topsoil and compost",
  ],
  steps: [
    { caption: "Pick a level spot with full sun, close to water." },
    { caption: "Build the frame and check it's square by measuring the diagonals." },
    { caption: "If gophers or moles are around, staple hardware cloth across the bottom." },
    { caption: "Loosen the ground below with a fork so roots can go deeper." },
    {
      caption:
        "Fill with a blend of good topsoil and compost, roughly 60/40, and water it in. It will settle a few inches.",
    },
    { caption: "Top up with compost every year." },
  ],
  uses: ["Poor or compacted native soil", "Small spaces", "Easier access and less bending"],
  tags: ["planting", "soil", "outdoor-build"],
  related: ["square-foot-spacing", "soil-texture", "compost", "square-level-plumb", "screw-types"],
  status: "draft",
  order: 14,
});
