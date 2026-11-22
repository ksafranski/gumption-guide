import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "z-drag",
  category: "fieldcraft",
  title: "Z-drag (3:1 haul)",
  aka: ["Z-pulley", "3:1 haul system", "Boat recovery", "Pinned canoe"],
  difficulty: "hard",
  summary:
    "A rope folded into a Z between an anchor and the load, with two pulleys and grabbing hitches, for a 3:1 pull.",
  key: "Anchor pulley, traveling pulley, haul. The rope makes a Z; you pull three times as far as the load moves.",
  gear: [
    "Static rope",
    "Two pulleys (or carabiners, with much more friction)",
    "Two short loops of thinner cord for prusik hitches",
    "Slings and carabiners for the anchor",
  ],
  steps: [
    {
      caption:
        "Build a solid anchor: a sling around the base of a big live tree, with a pulley clipped in.",
    },
    { caption: "Run the rope from the load through the anchor pulley." },
    {
      caption:
        "A little way back toward the load, tie a prusik onto the load line and clip the second (traveling) pulley to it.",
    },
    {
      caption:
        "Run the free end back through the traveling pulley and out toward the haulers. The rope now makes a Z.",
    },
    {
      caption:
        "Pull. When the traveling pulley reaches the anchor, hold the load and slide the prusik back out to reset.",
    },
    { caption: "A second prusik at the anchor pulley holds the load while you reset." },
  ],
  safety: [
    "A Z-drag can put several times the pull on the anchor and rope. Rope can snap or anchors fail violently.",
    "Stand to the side, never in line with the rope, and keep everyone out of the danger zone near the anchor.",
    "Not for lifting people without proper training and rated gear.",
    "Pulling a vehicle? Use rated recovery gear and a damper on the line; don't improvise with old rope.",
  ],
  tags: ["mechanical-advantage", "rope", "pulley", "anchor"],
  related: ["branch-hoist", "block-tackle", "truckers-hitch", "force"],
  status: "draft",
  order: 14,
});
