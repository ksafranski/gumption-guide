import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "lawn-mowing",
  category: "garden",
  title: "Mowing a lawn",
  aka: ["Mowing height", "One-third rule", "Grasscycling", "Lawn care"],
  kind: "care",
  season: "Whenever the grass is growing",
  summary:
    "Mow high, mow often enough that you never cut more than a third of the blade, and leave the clippings.",
  key: "Never take off more than a third of the height in one mowing.",
  body: [
    "Taller grass shades out weeds and grows deeper roots that handle drought. Cool-season grasses (fescue, bluegrass, ryegrass) do best around 3–4 in; warm-season grasses (Bermuda, zoysia) can go shorter.",
    "Clippings left on the lawn break down fast and return nitrogen. They don't cause thatch.",
  ],
  steps: [
    {
      caption:
        "Set the deck height first. Lower it gradually if you must; scalping stresses the lawn.",
    },
    {
      caption:
        "Sharpen the blade at least once a season. A dull blade tears grass and leaves ragged, browning tips.",
    },
    {
      caption:
        "Mow when the grass is dry, and change direction each time to avoid ruts and leaning grass.",
    },
    { caption: "In drought or heat, raise the height and mow less." },
  ],
  safety: [
    "Clear sticks, stones and toys first. Wear closed shoes and eye protection.",
    "Keep kids and pets well away. Never pull a running mower backward toward you.",
    "Mow across slopes with a push mower and up and down with a riding mower.",
  ],
  uses: ["Lawns", "Paths through meadows", "Orchard grass"],
  tags: ["care", "water"],
  related: ["watering", "fertilizer-npk", "sharpen-a-knife"],
  status: "draft",
  order: 18,
});
