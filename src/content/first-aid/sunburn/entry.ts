import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sunburn",
  category: "first-aid",
  title: "Sunburn",
  aka: ["Sun-burned skin", "UV burn", "Sun poisoning"],
  summary: "Get out of the sun, cool the skin, drink water, and leave blisters alone.",
  key: "Prevention beats treatment: shade, clothing, hat, sunscreen reapplied every two hours.",
  gear: ["Shade", "Cool water and cloths", "Aloe or a plain moisturizer", "Pain reliever"],
  steps: [
    { caption: "Get into shade and cover up." },
    { caption: "Cool the skin with a cool shower, swim or damp cloths." },
    { caption: "Apply aloe or a plain, unperfumed moisturizer." },
    {
      caption:
        "Drink extra water. Burned skin pulls fluid, and sun exposure often comes with heat.",
    },
    { caption: "Leave blisters intact and keep the area covered from more sun while it heals." },
  ],
  getHelp: [
    "Blistering over a large area, or severe pain.",
    "Fever, chills, headache, nausea, dizziness or confusion: may be heat illness too.",
    "A baby or young child is sunburned.",
  ],
  tags: ["first-aid", "burns", "hiking"],
  related: ["heat-exhaustion", "minor-burn", "dehydration"],
  status: "draft",
  order: 12,
});
