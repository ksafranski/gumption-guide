import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "ferro-rod",
  category: "fieldcraft",
  title: "Lighting a fire with a ferro rod",
  aka: ["Firesteel", "Ferrocerium", "Flint and steel", "Spark rod"],
  difficulty: "moderate",
  summary: "Scrape hot sparks from a ferrocerium rod into fine, dry, fluffy tinder.",
  key: "Hold the striker still and pull the rod back, so you don't smash the tinder.",
  gear: [
    "Ferro rod and striker (or the spine of a knife, if square-edged)",
    "Fine tinder: cotton balls with petroleum jelly, birch bark curls, fatwood shavings, dry grass",
    "Kindling and fuel sorted and ready",
  ],
  steps: [
    { caption: "Build the fire lay first and have kindling ready to hand." },
    { caption: "Fluff the tinder into a loose nest; sparks need air and lots of fine edges." },
    { caption: "On a new rod, scrape off the dark coating until you see bright metal." },
    { caption: "Rest the rod tip in the tinder, press the striker against it at a steep angle." },
    {
      caption:
        "Hold the striker still and pull the rod back firmly and fast. Sparks land in the tinder.",
    },
    { caption: "When it catches, shield it from wind and feed it small pieces." },
  ],
  safety: [
    "Sparks are around 3,000 °F (1,650 °C). Keep them away from fuel canisters and dry ground litter.",
  ],
  tags: ["fire", "camping", "tools"],
  related: ["fire-lay", "split-firewood"],
  status: "draft",
  order: 20,
});
