import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "truckers-hitch",
  category: "knots",
  title: "Trucker's hitch",
  aka: ["Lorry loader's hitch", "Wagoner's hitch", "Haymaker's hitch"],
  kind: "hitch",
  summary:
    "A loop in the line acts as a pulley, giving you about a 3:1 pull to cinch a load down tight.",
  key: "Loop up top, anchor below, pull down: a rope pulley in your hands.",
  steps: [
    { caption: "Tie a fixed loop in the standing part, partway between the load and the anchor." },
    {
      caption:
        "Run the end down around the anchor (hook, ring or rail) and back up through the loop.",
    },
    {
      caption:
        "Pull down on the end. Each pull moves the line about a third as far, with about three times the force.",
    },
    {
      caption:
        "Pinch the end at the loop and lock it with two half hitches around both strands below.",
    },
  ],
  secure: "Secure once locked off. The loop is the weak point: use one that won't capsize or jam.",
  strength:
    "Theoretical 3:1. Rope-on-rope friction eats a good share of that and wears the loop; a carabiner or ring in the loop helps.",
  untie: "easy",
  uses: [
    "Tying down a truck or trailer load",
    "Tensioning a tarp ridgeline",
    "Roof-rack canoes and lumber",
  ],
  tags: ["mechanical-advantage", "rope", "tie-down"],
  related: ["differential-windlass", "block-tackle", "force"],
  status: "draft",
  order: 4,
});
