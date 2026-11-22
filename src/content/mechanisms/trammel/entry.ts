import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "trammel",
  category: "mechanisms",
  title: "Elliptic trammel",
  aka: ["Trammel of Archimedes", "Ellipsograph", "Kitchen-table nonsense machine"],
  motion: "rot-lin",
  family: "linkages",
  summary:
    "Two sliders in crossed grooves joined by a bar: the sliders shuttle back and forth while the end of the bar draws an ellipse.",
  body: [
    "One block can only move left–right and the other only up–down. The bar between them keeps them a fixed distance apart, so as the crank turns the bar's midpoint, each slider oscillates along its own groove.",
    "Every other point on the bar traces an ellipse whose two radii are its distances to the sliders. Carpenters still use this to lay out oval tabletops and arches.",
  ],
  key: "A point on the bar draws an ellipse with radii equal to its distances from the two sliders.",
  uses: ["Drawing ellipses", "Oval tables and windows", "Desk toys", "Some engine designs"],
  tags: ["linkage", "rotary-to-linear"],
  related: ["cardan-gears", "scotch-yoke", "watt-linkage"],
  outLabel: "Pen height",
  status: "reviewed",
  order: 18,
});
