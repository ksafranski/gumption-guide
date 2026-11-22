import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "pantograph",
  category: "mechanisms",
  title: "Pantograph",
  aka: ["Copying linkage", "Scaling linkage", "Parallelogram linkage"],
  motion: "lin-lin",
  family: "linkages",
  summary:
    "A jointed parallelogram copies whatever the tracer point draws, enlarged (or reduced) by a fixed scale.",
  body: [
    "Four bars form a parallelogram, with one corner on a fixed pivot. The pivot, the tracer and the pen always lie on one straight line, and their distances from the pivot keep a fixed ratio — 2.5× here.",
    "So any path the tracer follows is reproduced by the pen at 2.5× the size. Swap the tracer and pen and it reduces instead: engravers used this to cut tiny lettering from large templates.",
  ],
  key: "Pen distance ÷ tracer distance from the pivot = the scale.",
  uses: [
    "Engraving machines",
    "Copying drawings",
    "Signature machines",
    "Train current collectors",
    "Wall-mounted lamps",
  ],
  tags: ["linkage", "lever"],
  related: ["four-bar", "trammel"],
  outLabel: "Pen height",
  status: "reviewed",
  order: 25,
});
