import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "concrete-mix",
  category: "building",
  title: "Mixing concrete",
  aka: ["Concrete ratio", "1-2-3 mix", "Curing concrete", "Post footing", "Bagged concrete"],
  kind: "material",
  difficulty: "moderate",
  summary:
    "Cement, sand, gravel and as little water as you can work with. Then keep it damp while it cures.",
  key: "1 : 2 : 3 cement, sand, gravel by volume. More water is easier to pour and weaker when set.",
  body: [
    "Concrete hardens by a chemical reaction, not by drying. Keeping it damp for the first week lets it gain strength; it reaches its design strength in about 28 days.",
    "An 80 lb bag of premix makes about 0.6 ft³. A cubic yard takes about 45 of those bags; past a few bags per post, consider ordering ready-mix.",
  ],
  gear: [
    "Wheelbarrow or mixing tub",
    "Hoe or mixer",
    "Bucket for measuring",
    "Gloves, eye protection, long sleeves",
  ],
  steps: [
    {
      caption:
        "Measure dry ingredients by volume with the same bucket: 1 cement, 2 sand, 3 gravel. Or use bagged premix.",
    },
    { caption: "Mix dry until the color is even." },
    {
      caption:
        "Add water gradually and mix until it holds its shape like thick oatmeal: no dry pockets, no puddles.",
    },
    { caption: "Place it, work it to push out air pockets, and screed it level." },
    {
      caption:
        "Cover with plastic or mist it so it stays damp for about a week. Protect it from freezing.",
    },
  ],
  safety: [
    "Wet cement is caustic and can burn skin. Wash off splashes promptly and don't kneel in it.",
    "Wear a dust mask when tipping bags.",
    "Footings for structures go below the local frost line. Check code.",
  ],
  uses: ["Fence and deck post footings", "Small pads and steps", "Setting anchors"],
  tags: ["materials", "outdoor-build"],
  related: ["wall-anchors", "volume", "mass"],
  status: "draft",
  order: 19,
});
