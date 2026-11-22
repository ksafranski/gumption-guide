import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "soil-ph",
  category: "garden",
  title: "Soil pH",
  aka: ["Acidic soil", "Alkaline soil", "Lime", "Sulfur", "Soil test"],
  kind: "soil",
  season: "Test in fall; amend well before planting",
  summary:
    "pH sets how easily plants can take up nutrients. Most vegetables like it just below neutral.",
  key: "Aim for 6.0–7.0 for most vegetables. Test before you add lime or sulfur, never guess.",
  body: [
    "pH runs from 0 (acid) to 14 (alkaline), with 7 neutral. Each whole number is a tenfold change, so 5.0 is ten times more acidic than 6.0.",
    "Outside a plant's range, nutrients are present but locked up: yellowing leaves on acid-loving plants in alkaline soil are often iron they can't absorb, not a lack of fertilizer.",
    "Changes are slow. Lime and sulfur take months to work, so amend in fall for spring planting, and re-test after a season.",
  ],
  reference: [
    { term: "Most vegetables & lawns", detail: "6.0–7.0." },
    { term: "Blueberries, azaleas, rhododendrons", detail: "Acid lovers: 4.5–5.5." },
    { term: "Potatoes", detail: "Slightly acid, 5.0–6.0, which also discourages scab." },
    {
      term: "To raise pH",
      detail:
        "Garden lime (ground limestone); wood ash also raises it, quickly and less predictably.",
    },
    {
      term: "To lower pH",
      detail: "Elemental sulfur, worked in. Pine needles and peat do very little.",
    },
  ],
  steps: [
    { caption: "Take small samples from several spots in the bed, root depth, and mix them." },
    {
      caption:
        "Use a home kit for a rough reading, or send it to a soil lab or extension service for pH plus nutrients and an amendment rate.",
    },
    { caption: "Apply only the amount the test recommends, spread evenly, and work it in." },
  ],
  uses: ["New beds", "Blueberries", "Plants yellowing for no obvious reason"],
  tags: ["soil", "fertilizer"],
  related: ["soil-texture", "fertilizer-npk", "compost"],
  status: "draft",
  order: 2,
});
