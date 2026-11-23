import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "card-scraper",
  category: "workshop",
  title: "Card scraper",
  aka: ["Cabinet scraper", "Scraper burr", "Burnisher", "Scrape instead of sanding"],
  kind: "finishing",
  difficulty: "moderate",
  summary:
    "A flat steel card with a tiny hooked burr on its edge takes fine shavings, leaving a smoother surface than sandpaper on tricky grain.",
  key: "Flex the card slightly, tilt it forward, and push or pull until you get shavings, not dust.",
  body: [
    "Scrapers shine where planes tear out: figured, curly or reversing grain. They also remove glue squeeze-out and old finish.",
    "Dust instead of shavings means the burr is worn. A few strokes of the burnisher bring it back; when that stops working, file and hone the edge flat and roll a new burr.",
  ],
  gear: ["Card scraper", "Mill file", "Fine stone", "Burnisher (or a hard, smooth steel rod)"],
  steps: [
    {
      caption:
        "File the long edge straight and square, then hone the faces and edge smooth on a stone.",
    },
    {
      caption:
        "Lay the card flat and draw the burnisher along each face near the edge, firmly, to draw the steel out.",
    },
    {
      caption:
        "Hold the burnisher a few degrees off square and run it along the edge a few times to turn the burr.",
    },
    {
      caption:
        "Hold the card with thumbs behind the middle, bow it slightly, tilt it, and push. Adjust the tilt until it cuts.",
    },
  ],
  safety: [
    "The card heats up and the burr is sharp. Wear a thumb guard or tape for long sessions.",
  ],
  uses: ["Figured wood", "Removing glue squeeze-out", "Final smoothing before finish"],
  tags: ["tools", "wood", "finishing", "sharpening"],
  related: ["hand-plane-basics", "sandpaper-grits", "wood-finishes"],
  status: "draft",
  order: 41,
});
