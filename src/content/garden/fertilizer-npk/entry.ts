import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "fertilizer-npk",
  category: "garden",
  title: "Fertilizer & N-P-K",
  aka: ["NPK", "10-10-10", "Nitrogen", "Phosphorus", "Potassium", "Plant food", "Side-dressing"],
  kind: "soil",
  summary:
    "The three numbers on a bag are the percent by weight of nitrogen, phosphorus (as phosphate) and potassium (as potash).",
  key: "Test first, feed what's missing, and follow the label. More is not better.",
  body: [
    "A 50 lb bag of 10-10-10 holds 5 lb each of N, P₂O₅ and K₂O; the rest is carrier. Higher numbers mean more nutrient per pound, not a better product.",
    "Too much nitrogen gives big leafy plants and little fruit: tomatoes and peppers are the classic victims. Excess fertilizer also burns roots and washes into streams.",
  ],
  reference: [
    {
      term: "N, nitrogen",
      detail: "Leaves and green growth. Short supply shows as pale yellow older leaves.",
    },
    {
      term: "P, phosphorus",
      detail: "Roots, flowers, fruit, seedlings. Many soils already have plenty; check a test.",
    },
    {
      term: "K, potassium",
      detail: "Overall vigor, disease resistance, water use, fruit quality.",
    },
    {
      term: "Quick-release",
      detail: "Soluble salts or liquids. Fast green-up, easy to overdo, washes away.",
    },
    {
      term: "Slow-release & organic",
      detail:
        "Coated pellets, compost, manure, bone and blood meal. Feed over weeks to months, gentler on roots.",
    },
  ],
  steps: [
    { caption: "Get a soil test to see which nutrients are actually short." },
    { caption: "Measure the bed area and weigh or measure out the rate on the label." },
    { caption: "Spread evenly and water in. Keep granules off wet leaves." },
    {
      caption:
        "Side-dress heavy feeders (corn, squash, tomatoes) mid-season with a little more along the row.",
    },
  ],
  safety: [
    "Store it dry and away from kids and pets; some organic fertilizers attract dogs.",
    "Don't spread right before heavy rain, or on frozen ground.",
  ],
  uses: ["Vegetable beds", "Lawns", "Containers, which run out of nutrients fast"],
  tags: ["soil", "fertilizer"],
  related: ["soil-ph", "compost", "lawn-mowing"],
  status: "draft",
  order: 4,
});
