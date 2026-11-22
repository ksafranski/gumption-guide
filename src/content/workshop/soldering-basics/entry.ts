import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "soldering-basics",
  category: "workshop",
  title: "Soldering basics",
  aka: ["How to solder", "Soldering iron", "Through-hole soldering", "Tinning", "Solder joint"],
  kind: "electronics",
  difficulty: "easy",
  summary:
    "Heat both parts of the joint with the iron, then feed solder into the joint, not onto the iron.",
  key: "Clean tip, heat the joint, solder flows to heat. A good joint is smooth and concave, like a little volcano.",
  body: [
    "Solder flows toward heat and sticks only to clean, hot metal. If it balls up and sits on top, the joint wasn't hot enough or the surface was dirty or oxidized.",
    "A lump that looks dull, grainy or cracked is a cold joint: it may conduct today and fail later. Reheat it with a touch of fresh solder (the flux in it does the cleaning).",
    "A temperature-controlled iron makes the whole thing easier. Somewhere around 330 °C (about 625 °F) suits leaded solder; lead-free wants a little more. Too hot burns the flux before it works and lifts pads off boards.",
  ],
  gear: [
    "Temperature-controlled iron and stand",
    "Rosin-core solder, 0.5–0.8 mm",
    "Brass wool or damp sponge",
    "Flush cutters",
    "Helping hands or a vise",
    "Fume extractor or a fan",
  ],
  steps: [
    { caption: "Clean the tip on brass wool and tin it with a little solder so it shines." },
    { caption: "Touch the tip to the pad and the component lead together, for a second or two." },
    {
      caption:
        "Feed solder into the joint on the side opposite the tip. Let it flow around the lead.",
    },
    { caption: "Pull the solder away first, then the iron. Don't move anything while it sets." },
    {
      caption: "Trim the lead just above the joint, and tin the tip again before parking the iron.",
    },
  ],
  safety: [
    "The tip is around 300 °C or more. Always park it in its stand, and never catch a falling iron.",
    "Don't breathe the flux smoke; work with airflow away from your face.",
    "Leaded solder: wash your hands after and don't eat at the bench.",
    "Wear eye protection when trimming leads; the cut-offs fly.",
  ],
  uses: ["Electronics kits", "Repairing cables and connectors", "Guitar pedals and wiring"],
  tags: ["soldering", "electronics"],
  related: ["solder-types", "desoldering", "wire-splices", "minor-burn"],
  status: "draft",
  order: 1,
});
