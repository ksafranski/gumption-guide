import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sowing-seeds",
  category: "garden",
  title: "Sowing seeds outdoors",
  aka: ["Direct sowing", "Seed depth", "Thinning seedlings", "Succession sowing"],
  kind: "planting",
  season: "Per seed packet, by your frost dates",
  summary:
    "Plant at the right depth in warm enough soil, keep it evenly moist, and thin to the right spacing.",
  key: "Sow at a depth of two to three times the seed's width. Tiny seeds barely covered.",
  body: [
    "Seeds need moisture, air and a minimum soil temperature to germinate. Cold, wet soil rots them; most warm-season crops want soil around 60 °F (16 °C) or warmer.",
    "Some seeds, like lettuce, germinate better with light, so they're pressed onto the surface and barely covered.",
  ],
  steps: [
    {
      caption:
        "Read the packet: depth, spacing, days to germinate, and when to sow relative to your frost dates.",
    },
    { caption: "Rake the bed smooth and fine; seeds need good contact with the soil." },
    {
      caption:
        "Make a furrow at the right depth, sow along it, cover and firm gently with your palm.",
    },
    {
      caption:
        "Water with a gentle spray and keep the surface damp until they come up. A crust or a dry day can kill them.",
    },
    {
      caption:
        "Thin seedlings to the packet spacing once they have their first true leaves. Snip them; don't pull.",
    },
    {
      caption:
        "For a steady harvest, sow small batches of fast crops (lettuce, radishes, beans) every 2–3 weeks.",
    },
  ],
  uses: [
    "Root crops that hate transplanting (carrots, beets, radishes)",
    "Beans, peas, corn, squash",
  ],
  tags: ["seeds", "planting"],
  related: ["starting-seeds-indoors", "frost-dates", "square-foot-spacing", "watering"],
  status: "draft",
  order: 6,
});
