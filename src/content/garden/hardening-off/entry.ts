import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "hardening-off",
  category: "garden",
  title: "Hardening off seedlings",
  aka: ["Harden off", "Acclimate seedlings", "Transplant shock", "Moving seedlings outside"],
  kind: "planting",
  season: "Spring, the week or two before transplanting",
  summary:
    "Indoor seedlings need a week or two of gradually longer outdoor time before they can take full sun, wind and cool nights.",
  key: "Start with an hour or two in shade, out of the wind, and add a little more sun and time each day.",
  body: [
    "Seedlings raised under lights or on a windowsill have soft leaves that scorch in direct sun and stems that snap in wind. Gradual exposure toughens them up.",
    "Bring them in on cold nights until the risk of frost has passed and nights stay mild for the crop. Warm-season crops like tomatoes, peppers and squash are the most sensitive to cold.",
  ],
  steps: [
    {
      caption:
        "Water the seedlings and set them out in a sheltered, shady spot for an hour or two.",
    },
    { caption: "Each day, leave them out longer and give them a little more morning sun." },
    {
      caption:
        "Over a week or two, work up to full sun and leaving them out overnight when it's mild.",
    },
    { caption: "Transplant on a cloudy day or in the evening, and water them in well." },
  ],
  uses: ["Tomatoes, peppers, brassicas", "Annual flowers", "Anything started indoors"],
  tags: ["seeds", "planting"],
  related: ["starting-seeds-indoors", "frost-dates", "sun-exposure"],
  status: "draft",
  order: 20,
});
