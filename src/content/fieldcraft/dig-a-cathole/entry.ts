import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "dig-a-cathole",
  category: "fieldcraft",
  title: "Dig a cathole",
  aka: [
    "Bathroom in the woods",
    "Poop in the woods",
    "Human waste",
    "Trowel",
    "Leave No Trace toilet",
  ],
  difficulty: "easy",
  summary:
    "Where there's no toilet, bury human waste in a small hole well away from water, trails and camp.",
  key: "6–8 inches deep, 200 feet (about 70 steps) from water, trail and camp. Pack out the paper.",
  body: [
    "The top few inches of soil hold the most organisms that break waste down, which is why a cathole is shallow rather than deep.",
    "Some places require you to pack out all human waste: deserts with little soil life, high alpine areas, river canyons, snow and popular areas. Check before you go and carry a waste bag where it's required.",
  ],
  gear: [
    "Small trowel",
    "Toilet paper in a zip bag",
    "A second bag for used paper",
    "Hand sanitizer",
  ],
  steps: [
    {
      caption:
        "Walk about 200 feet away from water, trails and campsites, somewhere out of the way with soft, organic soil.",
    },
    { caption: "Dig a hole 6–8 inches deep and 4–6 inches across." },
    { caption: "Use it, then mix in a little soil with a stick." },
    {
      caption:
        "Fill the hole, disguise it with leaves or duff, and pack used paper out in the bag.",
    },
    { caption: "Clean your hands." },
  ],
  safety: ["Waste near water spreads illness downstream; the distance from water matters most."],
  uses: ["Backpacking", "Dispersed camping", "Day hikes"],
  tags: ["camping", "hiking", "water"],
  related: ["leave-no-trace", "choose-a-campsite", "purify-water", "pace-count"],
  sources: [
    {
      title: "Leave No Trace: Dispose of Waste Properly",
      url: "https://lnt.org/why/7-principles/dispose-of-waste-properly/",
    },
  ],
  status: "draft",
  order: 31,
});
