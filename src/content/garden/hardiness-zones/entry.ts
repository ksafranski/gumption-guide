import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "hardiness-zones",
  category: "garden",
  title: "Hardiness zones",
  aka: ["USDA zones", "Plant hardiness", "Zone map", "RHS hardiness"],
  kind: "climate",
  summary:
    "Zone maps rank places by their coldest winter nights, telling you which perennials, shrubs and trees will survive.",
  key: "Zones tell you about winter survival, not frost dates or summer heat.",
  body: [
    "US zones are based on the average annual extreme minimum temperature, in 10 °F bands (zones 1–13), each split into a and b halves of 5 °F. A plant rated to zone 5 should survive winters typical of zone 5 and warmer.",
    "Other countries use their own scales, for example the UK's RHS ratings H1 to H7. Microclimates matter too: a south-facing wall can be a zone warmer than an open, low spot.",
  ],
  reference: [
    { term: "Hardy to your zone or colder", detail: "Safe to plant and leave out all winter." },
    {
      term: "Hardy to one zone warmer",
      detail: "Gamble: give it the warmest, most sheltered spot and mulch heavily.",
    },
    { term: "Annuals", detail: "Zones don't matter: they live one season." },
  ],
  uses: [
    "Buying perennials, shrubs and fruit trees",
    "Overwintering containers (count on one or two zones colder)",
  ],
  tags: ["climate"],
  related: ["frost-dates", "planting-trees-shrubs", "temperature"],
  status: "draft",
  order: 9,
});
