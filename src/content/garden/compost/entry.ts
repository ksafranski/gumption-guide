import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "compost",
  category: "garden",
  title: "Composting",
  aka: ["Compost pile", "Browns and greens", "Hot composting", "Compost bin"],
  kind: "soil",
  season: "Year-round",
  summary:
    "Mix carbon-rich browns with nitrogen-rich greens, keep it as damp as a wrung-out sponge, and give it air.",
  key: "About 2–3 parts browns to 1 part greens by volume. Too wet and smelly: add browns. Dry and slow: add greens and water.",
  body: [
    "Microbes do the work. They need carbon for energy, nitrogen to grow, water, and oxygen. A pile around a cubic yard (1 m³) holds enough heat to reach 130–160 °F (55–70 °C), which kills most weed seeds and breaks things down in a couple of months. Smaller or cold piles still work; they take a year or so.",
    "It's finished when it's dark, crumbly, smells of earth and you can't recognize what went in.",
  ],
  reference: [
    {
      term: "Browns (carbon)",
      detail:
        "Dry leaves, straw, shredded cardboard and paper, wood chips, sawdust (untreated wood).",
    },
    {
      term: "Greens (nitrogen)",
      detail:
        "Grass clippings, vegetable scraps, coffee grounds, fresh plant trimmings, manure from plant-eating animals.",
    },
    {
      term: "Leave out",
      detail:
        "Meat, fish, dairy, oils; diseased plants; weeds gone to seed; pet and human waste; treated wood.",
    },
  ],
  steps: [
    { caption: "Pick a level, part-shaded spot with drainage, close enough that you'll use it." },
    {
      caption: "Start with a layer of coarse browns for airflow, then alternate greens and browns.",
    },
    { caption: "Chop things small; they break down much faster." },
    { caption: "Water as you build until it's evenly damp, not dripping." },
    { caption: "Turn it every week or two to add air. A hot center means it's working." },
    { caption: "Screen out unfinished bits and toss them back in the next pile." },
  ],
  uses: ["Improving any soil", "Mulch", "Potting mixes"],
  tags: ["soil"],
  related: ["soil-texture", "mulch", "fertilizer-npk", "raised-beds"],
  status: "draft",
  order: 3,
});
