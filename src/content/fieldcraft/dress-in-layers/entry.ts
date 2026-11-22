import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "dress-in-layers",
  category: "fieldcraft",
  title: "Dressing in layers",
  aka: ["Layering", "Base layer", "Mid layer", "Shell"],
  difficulty: "easy",
  summary: "A wicking base, an insulating middle and a weather shell you add and remove as you go.",
  key: "Stay dry first, warm second. Shed a layer before you sweat, add one before you shiver.",
  gear: [
    "Base: wool or synthetic, next to skin",
    "Mid: fleece, wool or a puffy jacket",
    "Shell: wind- and rain-proof jacket and pants",
    "Hat and gloves",
  ],
  steps: [
    {
      caption: "Base layer moves sweat off your skin. Skip cotton; it holds water and chills you.",
    },
    { caption: "Mid layer traps warm air. Two thin ones adjust better than one thick one." },
    { caption: "Shell blocks wind and rain. Vent it rather than letting it fog up inside." },
    { caption: "Start a hike slightly cool. You'll warm up within ten minutes of walking." },
    {
      caption: "At every stop, put a warm layer on straight away, then take it off before moving.",
    },
  ],
  safety: [
    "Wet clothing in wind is how mild weather turns into hypothermia. Carry a dry spare layer.",
  ],
  tags: ["cold-weather", "camping"],
  related: ["hypothermia", "temperature"],
  status: "draft",
  order: 6,
});
