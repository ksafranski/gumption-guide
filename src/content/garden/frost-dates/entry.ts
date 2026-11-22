import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "frost-dates",
  category: "garden",
  title: "Frost dates & the growing season",
  aka: ["Last frost", "First frost", "Cool-season crops", "Warm-season crops", "Frost protection"],
  kind: "climate",
  summary:
    "Your average last spring frost and first fall frost set when to plant what. Everything on a seed packet hangs off them.",
  key: "Cool-season crops go in around the last frost; warm-season crops after it, once the soil is warm.",
  body: [
    "Frost dates are averages, so there's still a real chance of frost a week or two after the last one. Local weather services and extension offices publish them by postcode or zip code.",
    "Clear, still nights are the coldest; clouds and wind keep frost away. Low spots collect cold air and frost first.",
  ],
  reference: [
    {
      term: "Cool-season",
      detail:
        "Lettuce, spinach, peas, radishes, cabbage family, carrots, onions. Handle light frost; bolt or turn bitter in heat.",
    },
    {
      term: "Warm-season",
      detail:
        "Tomatoes, peppers, squash, cucumbers, beans, corn, basil. Killed or stunted by frost; need warm soil.",
    },
    {
      term: "Growing season",
      detail:
        'Days between last spring and first fall frost. Compare with "days to maturity" on the packet.',
    },
  ],
  steps: [
    { caption: "Look up your average last and first frost dates." },
    {
      caption:
        "Count back from them using the seed packet timings, and write planting dates on a calendar.",
    },
    {
      caption:
        "If frost threatens tender plants, water the soil during the day (moist soil holds heat), then cover the plants at dusk with frost cloth or old sheets reaching the ground.",
    },
    { caption: "Remove covers in the morning so plants don't overheat." },
  ],
  uses: ["Planning the year", "Reading seed packets", "Saving plants on a cold night"],
  tags: ["climate", "planting"],
  related: ["hardiness-zones", "starting-seeds-indoors", "sowing-seeds", "temperature"],
  status: "draft",
  order: 8,
});
