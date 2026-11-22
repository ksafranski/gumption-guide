import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "soil-texture",
  category: "garden",
  title: "Soil texture & the jar test",
  aka: ["Sand silt clay", "Loam", "Soil type", "Jar test", "Ribbon test"],
  kind: "soil",
  season: "Any time the ground isn't frozen",
  summary:
    "Every soil is a mix of sand, silt and clay. The mix decides how it drains, holds water and feeds plants.",
  key: "Whatever you've got, the fix is the same: add organic matter, every year.",
  body: [
    "Sand particles are big: water and air move through fast, and nutrients wash out. Clay particles are tiny: they hold water and nutrients but drain slowly and pack hard. Silt sits between. Loam, roughly 40% sand, 40% silt and 20% clay, is the gardener's ideal.",
    "Don't add sand to clay to loosen it. Unless it's a huge amount, you get something closer to concrete. Compost and mulch, worked in or laid on top, improve both extremes.",
  ],
  reference: [
    {
      term: "Sandy",
      detail:
        "Gritty, won't hold a shape when squeezed. Drains fast, warms early in spring; needs frequent water and feeding.",
    },
    {
      term: "Silty",
      detail: "Smooth and floury. Fertile, but crusts on the surface and compacts.",
    },
    {
      term: "Clay",
      detail:
        "Sticky when wet, hard and cracked when dry; squeezes into a long ribbon. Rich, slow to drain and slow to warm.",
    },
    {
      term: "Loam",
      detail:
        "Crumbly, holds a loose ball that breaks apart when poked. Drains well and holds moisture.",
    },
  ],
  gear: [
    "A straight-sided clear jar with a lid",
    "Water",
    "A drop of dish soap",
    "A ruler or marker",
  ],
  steps: [
    { caption: "Dig a sample from root depth, about 6 in down, and pick out stones and roots." },
    {
      caption:
        "Fill the jar about a third with soil, then top up to three-quarters with water. Add a drop of dish soap.",
    },
    { caption: "Shake hard for a few minutes, then set it down where it won't be disturbed." },
    {
      caption:
        "Mark the sand layer after about a minute, silt after a couple of hours, and clay after a day or two.",
    },
    { caption: "Compare layer thicknesses to estimate the proportions." },
  ],
  uses: ["Choosing plants", "Deciding how to amend", "Understanding a soggy or droughty bed"],
  tags: ["soil"],
  related: ["soil-ph", "compost", "raised-beds", "watering"],
  status: "draft",
  order: 1,
});
