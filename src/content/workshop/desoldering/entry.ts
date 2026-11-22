import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "desoldering",
  category: "workshop",
  title: "Desoldering",
  aka: ["Solder wick", "Desoldering braid", "Solder sucker", "Remove a component", "Rework"],
  kind: "electronics",
  difficulty: "moderate",
  summary:
    "To remove a part, melt the joint and take the solder away with copper braid or a spring pump.",
  key: "Add fresh solder before removing old. It brings flux and heat, and the old joint lets go.",
  reference: [
    {
      term: "Solder wick (braid)",
      detail:
        "Fluxed copper braid. Press it on the joint with the iron; it soaks up solder. Cut off the used end.",
    },
    {
      term: "Solder sucker",
      detail: "Spring-loaded pump. Melt the joint, put the nozzle on it, press the button.",
    },
    {
      term: "Hot air",
      detail: "For surface-mount parts and multi-pin chips. Heats all pins at once.",
    },
  ],
  steps: [
    { caption: "Melt a little fresh solder onto the old joint." },
    {
      caption:
        "Lay the braid on it and press the iron on top until the solder wicks up. Lift both together.",
    },
    {
      caption:
        "Wiggle the lead to check it's free. Repeat for each pin; never pull a part while a joint holds.",
    },
    { caption: "Clean flux residue with isopropyl alcohol." },
  ],
  safety: ["Don't hold the iron on a pad for long; pads and traces peel off overheated boards."],
  uses: ["Replacing a failed part", "Fixing a mistake", "Salvaging parts"],
  tags: ["soldering", "electronics", "repair"],
  related: ["soldering-basics", "solder-types"],
  status: "draft",
  order: 3,
});
