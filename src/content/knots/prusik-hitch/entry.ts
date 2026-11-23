import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "prusik-hitch",
  category: "knots",
  title: "Prusik hitch",
  aka: ["Prusik", "Prusik knot", "Friction hitch", "Prusik loop"],
  kind: "hitch",
  summary:
    "A loop of thinner cord wrapped around a rope: it slides when unloaded and grips when pulled.",
  key: "Three wraps to start. Slips: add a wrap. Won't slide: take one off.",
  body: [
    "The grip comes from friction, so it depends on the pairing: the cord must be clearly thinner than the main rope, and wet, icy or slick rope needs more wraps.",
    "It grips in both directions, which makes it a good progress capture on a haul line and a backup when lowering.",
  ],
  steps: [
    { caption: "Hold a closed loop of cord behind the main rope." },
    { caption: "Pass the end of the loop around the rope and through itself, inside the wraps." },
    { caption: "Repeat for three wraps in all, keeping them neat and side by side." },
    {
      caption:
        "Dress it so no wraps cross, then load the tail. To move it, push the knot itself, not the tail.",
    },
  ],
  secure:
    "Grips well when dressed and matched to the rope. Test it before trusting it with a load; for climbing, get trained.",
  untie: "easy",
  uses: ["Progress capture in a Z-drag", "Ascending a fixed rope", "Adjustable tarp ridgeline"],
  tags: ["rope", "hitch", "mechanical-advantage"],
  related: ["z-drag", "taut-line-hitch", "pitch-a-tarp"],
  status: "draft",
  order: 14,
});
