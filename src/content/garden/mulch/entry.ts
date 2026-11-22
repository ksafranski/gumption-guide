import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "mulch",
  category: "garden",
  title: "Mulching",
  aka: ["Mulch", "Wood chips", "Straw mulch", "Mulch volcano"],
  kind: "soil",
  season: "Spring, once soil has warmed; topped up in fall",
  summary:
    "A layer over the soil that holds moisture, smothers weeds and evens out soil temperature.",
  key: "2–3 in deep, and pulled back a hand's width from stems and trunks.",
  body: [
    "Organic mulches (wood chips, shredded leaves, straw, compost) break down and feed the soil, so they need topping up. Gravel and fabric don't, but they don't improve the soil either.",
    "Fresh wood chips are fine on the surface around trees, shrubs and paths. Dug into vegetable beds, they tie up nitrogen while they rot.",
  ],
  reference: [
    { term: "Wood chips / bark", detail: "Trees, shrubs, paths, perennials. Long-lasting." },
    { term: "Straw", detail: "Vegetable beds. Make sure it's straw, not hay full of seeds." },
    {
      term: "Shredded leaves",
      detail: "Free, excellent in vegetable and flower beds. Shred them so they don't mat.",
    },
    { term: "Compost", detail: "Feeds as it mulches; thinner layer, 1–2 in." },
    { term: "Gravel", detail: "Dry gardens and plants that rot in damp mulch." },
  ],
  steps: [
    { caption: "Weed and water the bed first; mulch holds in whatever's there." },
    { caption: "Spread 2–3 in evenly. Deeper smothers roots and keeps soil soggy." },
    {
      caption:
        'Pull it back a few inches from stems and trunks. Mulch piled against a trunk (a "volcano") rots bark and invites pests.',
    },
    { caption: "Top up as it thins." },
  ],
  uses: ["Saving water", "Cutting weeding", "Protecting roots over winter"],
  tags: ["soil", "water"],
  related: ["compost", "watering", "planting-trees-shrubs"],
  status: "draft",
  order: 5,
});
