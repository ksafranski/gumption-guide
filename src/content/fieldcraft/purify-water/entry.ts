import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "purify-water",
  category: "fieldcraft",
  title: "Making water safe to drink",
  aka: ["Water treatment", "Boiling water", "Water filter", "Purification tablets"],
  difficulty: "easy",
  summary:
    "Boil it, filter it, or treat it chemically. Clear-looking water can still make you sick.",
  key: "A rolling boil for one minute kills what makes you sick. Three minutes above 6,500 ft.",
  gear: [
    "Pot and stove, or",
    "A backpacking filter or purifier, or",
    "Chlorine dioxide tablets or drops",
    "A bandana or coffee filter for pre-filtering",
  ],
  steps: [
    {
      caption: "Collect from moving water if you can, away from camps, trails and animal traffic.",
    },
    { caption: "Let silty water settle, then pour or strain it through cloth to clear it." },
    {
      caption:
        "Boil: bring to a rolling boil for 1 minute (3 minutes above about 2,000 m / 6,500 ft). Let it cool covered.",
    },
    {
      caption: "Or filter: use the filter as its maker says, keeping dirty and clean sides apart.",
    },
    {
      caption:
        "Or treat chemically: dose and wait as long as the label says. Cold or cloudy water needs longer.",
    },
  ],
  safety: [
    "Filters don't remove viruses unless they're rated as purifiers. Chemicals don't remove silt or chemical pollution.",
    "None of these methods make water from mine runoff, farm runoff or algae blooms safe. Find another source.",
    "Keep untreated water off the drinking threads and mouthpiece of your bottle.",
  ],
  tags: ["water", "camping"],
  related: ["leave-no-trace", "volume"],
  sources: [
    {
      title: "CDC: Making water safe in an emergency",
      url: "https://www.cdc.gov/water-emergency/about/index.html",
    },
  ],
  status: "draft",
  order: 5,
});
