import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "watering",
  category: "garden",
  title: "Watering",
  aka: ["How much to water", "Deep watering", "Drip irrigation", "Soaker hose"],
  kind: "care",
  season: "Growing season",
  summary:
    "Water deeply and less often, at the soil, early in the day. Let the top inch dry between waterings.",
  key: "About 1 in of water a week, rain included. Check with a finger, not the calendar.",
  body: [
    "Deep watering pushes roots down where the soil stays moist; frequent light sprinkles keep them shallow and needy.",
    "One inch over one square foot is about 0.6 US gallons (2.4 L). A tuna can on the ground under a sprinkler shows when you've hit an inch.",
    "Wet leaves overnight invite fungal disease. Morning watering lets foliage dry; drip lines and soaker hoses keep it dry altogether.",
  ],
  steps: [
    { caption: "Push a finger into the soil. If it's dry 1–2 in down, water." },
    {
      caption:
        "Water slowly at the base of plants until the soil is wet 6 in or more deep. Dig a test hole once to see how long that takes.",
    },
    {
      caption:
        "Water containers until it runs out the bottom. In hot weather they may need it daily.",
    },
    { caption: "Mulch to keep the moisture in." },
  ],
  uses: ["Vegetable beds", "New plantings", "Containers", "Lawns"],
  tags: ["water", "care"],
  related: ["mulch", "soil-texture", "volume", "lawn-mowing"],
  status: "draft",
  order: 11,
});
