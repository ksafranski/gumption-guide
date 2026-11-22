import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "choose-a-campsite",
  category: "fieldcraft",
  title: "Choosing a campsite",
  aka: ["Site selection", "Where to pitch a tent", "Widowmakers"],
  difficulty: "easy",
  summary:
    "Flat, durable, sheltered ground, with nothing overhead that can fall and nowhere water will run.",
  key: "Look up, look down, look upstream.",
  steps: [
    { caption: "Look up: no dead limbs or leaning dead trees overhead." },
    { caption: "Look down: flat, durable ground. Bare dirt, rock, gravel or an established pad." },
    {
      caption:
        "Look upstream: stay out of washes, gullies and low hollows where rain runs and pools.",
    },
    { caption: "Stay about 200 ft (70 steps) back from lakes and streams." },
    { caption: "Hollows trap cold air at night. A slightly raised spot is warmer and drier." },
    { caption: "Put the narrow end of the tent into the wind, and pitch before dark." },
  ],
  safety: [
    "Avoid lone tall trees, ridgetops and open high ground if storms are possible.",
    "In bear country, cook and store food well away and downwind from where you sleep.",
  ],
  tags: ["camping", "shelter"],
  related: ["leave-no-trace", "pitch-a-tarp", "read-contours"],
  status: "draft",
  order: 9,
});
