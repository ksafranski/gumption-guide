import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "divide-perennials",
  category: "garden",
  title: "Divide perennials",
  aka: [
    "Dividing plants",
    "Split a clump",
    "Hostas",
    "Daylilies",
    "Overcrowded perennials",
    "Free plants",
  ],
  kind: "planting",
  season: "Spring or early fall, in mild weather",
  summary:
    "Crowded clumps that flower less or die out in the middle get new life when you dig them up and split them.",
  key: "Divide spring and summer bloomers in early fall, fall bloomers in spring. Each piece needs roots and a few shoots.",
  body: [
    "A bare, woody center with growth only around the edge is the usual sign. Most clump-forming perennials benefit every few years; some, like peonies, resent being moved and are best left alone.",
    "Water the plant the day before. Divisions establish best in cool, cloudy weather with time to root before heat or hard frost.",
  ],
  gear: [
    "Spade or garden fork",
    "Two forks back to back, or a sharp knife or saw for tough roots",
    "Tarp",
    "Compost",
  ],
  steps: [
    { caption: "Cut the foliage back by about half so the divisions lose less water." },
    { caption: "Dig around the clump, a little wider than its spread, and lever it out." },
    {
      caption:
        "Pull, cut or pry it into pieces, each with healthy roots and several growing points. Discard the dead center.",
    },
    {
      caption:
        "Replant at the same depth as before in soil improved with compost, and water well. Keep them watered for a few weeks.",
    },
  ],
  uses: [
    "Hostas, daylilies, irises, ornamental grasses, asters",
    "Filling new beds",
    "Sharing plants",
  ],
  tags: ["planting", "care"],
  related: ["planting-trees-shrubs", "mulch", "watering", "compost"],
  status: "draft",
  order: 21,
});
