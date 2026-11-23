import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "square-knot",
  category: "knots",
  title: "Square knot",
  aka: ["Reef knot", "Right over left", "Bow knot (slipped)"],
  kind: "knot",
  summary:
    "Ties two ends of the same cord snugly around something, like a bundle, a bandage or a reefed sail.",
  key: "Right over left and under, then left over right and under. Both parts of each end lie on the same side of the other's bight.",
  body: [
    "If the two parts of an end come out on opposite sides of the other bight, it's a granny knot: it slips or jams. Check before you trust it.",
    "A square knot is a binding knot, not a bend. Never use it to join two ropes that will take a load: a tug on one tail capsizes it and it pulls apart. Use a sheet bend instead.",
    "Shoelace bows are a square knot with both ends slipped. If your bow sits crooked, it's a granny.",
  ],
  steps: [
    { caption: "Lay a bight in one end." },
    { caption: "Bring the other end over the bend of the bight and out under its top leg." },
    { caption: "Take it across the front of both legs." },
    {
      caption:
        "Back under the bottom leg and out over the bend, alongside itself. Pull all four parts snug.",
    },
  ],
  secure:
    "Fine for binding around something. Not secure as a bend: it can capsize and slip under load.",
  untie: "easy",
  uses: [
    "Bandages and slings",
    "Tying off bundles and parcels",
    "Reef points",
    "Shoelaces (slipped)",
  ],
  tags: ["rope"],
  related: ["sheet-bend", "overhand-knot"],
  status: "draft",
  order: 13,
});
