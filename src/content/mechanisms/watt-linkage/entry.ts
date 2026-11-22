import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "watt-linkage",
  category: "mechanisms",
  title: "Watt's linkage",
  aka: ["Watt parallel motion", "Straight-line linkage", "Watt link"],
  motion: "osc-lin",
  family: "linkages",
  summary:
    "Two swinging arms joined by a short link make the link's midpoint move in a nearly straight line.",
  body: [
    "Each arm's end moves on an arc, but the arcs curve in opposite directions. At the midpoint of the connecting link the two curvatures cancel, leaving a path that is almost perfectly straight over a useful stroke.",
    "James Watt needed exactly this in 1784 to guide his engine's piston rod from a rocking beam without sliding guides. He called it the invention he was proudest of. Swing further and the path bends into a figure-eight (dashed).",
  ],
  key: "Opposing arcs cancel at the midpoint → approximate straight line.",
  uses: ["Beam steam engines", "Car rear suspension", "Race-car axles", "Lifting tables"],
  tags: ["linkage", "straight-line"],
  related: ["four-bar", "cardan-gears", "trammel"],
  outLabel: "Midpoint height",
  status: "reviewed",
  order: 16,
});
