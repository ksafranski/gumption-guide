import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sun-exposure",
  category: "garden",
  title: "Sun & shade",
  aka: ["Full sun", "Part shade", "Full shade", "Sun mapping"],
  kind: "climate",
  summary:
    "Plant labels describe how many hours of direct sun a spot gets. Watch your garden before you plant.",
  key: "Full sun is 6+ hours of direct sun. Fruiting vegetables need it; leafy greens can make do with less.",
  reference: [
    {
      term: "Full sun",
      detail:
        "6 or more hours of direct sun. Tomatoes, peppers, squash, corn, most herbs and fruit.",
    },
    {
      term: "Part sun / part shade",
      detail:
        "3–6 hours. Leafy greens, peas, root crops; many shrubs. Afternoon shade helps in hot climates.",
    },
    {
      term: "Full shade",
      detail:
        "Under 3 hours, or bright light with no direct sun. Ferns, hostas, some groundcovers. Few vegetables.",
    },
  ],
  steps: [
    {
      caption:
        "On a clear day, note where sun and shadow fall every hour or two from morning to evening.",
    },
    {
      caption:
        "Remember the sun is higher in summer: winter shade from a building may clear by midsummer, while trees leafing out add shade.",
    },
    {
      caption:
        "Put the tallest crops on the north side of a bed (south side in the southern hemisphere) so they don't shade the rest.",
    },
  ],
  uses: [
    "Choosing where to put a vegetable bed",
    "Reading plant labels",
    "Planning around trees and buildings",
  ],
  tags: ["climate", "planting"],
  related: ["frost-dates", "raised-beds", "find-north"],
  status: "draft",
  order: 10,
});
