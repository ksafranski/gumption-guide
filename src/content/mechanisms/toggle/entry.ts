import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "toggle",
  category: "mechanisms",
  title: "Toggle joint",
  aka: ["Toggle press", "Knee joint", "Toggle linkage"],
  motion: "rot-lin",
  family: "linkages",
  summary:
    "Two links that nearly straighten into a line multiply force enormously at the end of the stroke.",
  body: [
    "Pushing the knee sideways straightens the two links and drives the ram down. As the links approach a straight line, a large sideways movement of the knee produces only a tiny movement of the ram.",
    "Because work in equals work out, that tiny movement comes with a huge force — ideal for stamping, crushing and clamping. Pushed just past straight, the joint locks itself, which is how toggle clamps and folding table legs hold.",
  ],
  key: "Near straight, small ram motion ↔ very large ram force.",
  uses: [
    "Stamping presses",
    "Toggle clamps",
    "Stone crushers",
    "Folding legs",
    "Injection moulders",
  ],
  tags: ["linkage", "rotary-to-linear", "mechanical-advantage"],
  related: ["bell-crank", "slider-crank"],
  outLabel: "Ram position",
  status: "reviewed",
  order: 19,
});
