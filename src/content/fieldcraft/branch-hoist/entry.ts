import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "branch-hoist",
  category: "fieldcraft",
  title: "Makeshift hoist: rope and tree",
  aka: ["Improvised pulley", "Branch pulley", "Rope over a limb", "Field hoist"],
  difficulty: "moderate",
  summary:
    "Use a sound limb as a fixed pulley and a trucker's-hitch loop to gain advantage for lifting or pulling.",
  key: "A limb changes direction but costs you friction. Build advantage in the rope, not the tree.",
  gear: [
    "Strong rope rated well above the load",
    "A tree sling, webbing or sacrificial sleeve to protect bark and rope",
    "Optional: carabiners or a pulley, which cut friction a lot",
  ],
  steps: [
    {
      caption:
        "Pick a live, thick limb close to the trunk, or a second tree as an anchor. Never a dead or cracked limb.",
    },
    {
      caption:
        "Pad the contact point, or hang a sling over the limb with a carabiner in it as a smooth turning point.",
    },
    {
      caption:
        "Run the rope from the load up over the limb (or through the carabiner) and down to where you'll pull.",
    },
    {
      caption:
        "For advantage, tie a fixed loop partway down the hauling side, take the end around a ground anchor and back through the loop: a 3:1 like a trucker's hitch.",
    },
    {
      caption:
        "Haul with steady pulls, then lock off with a couple of half hitches around the anchor.",
    },
  ],
  safety: [
    "Nobody stands under a lifted load, or in line with a loaded rope that could snap or slip.",
    "Rope over bark loses much of your pull to friction and wears through. A carabiner or pulley is far better.",
    "Advantage multiplies the load on the anchor and limb too. If in doubt, don't lift it.",
  ],
  tags: ["mechanical-advantage", "rope", "pulley"],
  related: ["block-tackle", "truckers-hitch", "z-drag", "round-turn-two-half-hitches", "force"],
  status: "draft",
  order: 13,
});
