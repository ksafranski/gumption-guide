import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "bolt-types",
  category: "building",
  title: "Bolt types & grades",
  aka: [
    "Carriage bolt",
    "Hex bolt",
    "Eye bolt",
    "U-bolt",
    "J-bolt",
    "Grade 5",
    "Grade 8",
    "Class 8.8",
  ],
  kind: "fastener",
  summary:
    "Bolts clamp parts between a head and a nut. The head style suits the material; the grade marks tell you its strength.",
  key: "Count the lines on a hex head: none = grade 2, three = grade 5, six = grade 8.",
  body: [
    "A bolt works by stretching slightly as the nut is tightened, clamping the parts so friction carries the load. That's why torque specs matter, and why a bolt that's loose in its hole is much weaker than one that's tight.",
    "Stainless steel resists rust but is usually weaker than grade 5 or 8 steel, and it can gall (seize) if tightened fast. Don't swap it into a structural spec without checking.",
  ],
  reference: [
    {
      term: "Hex bolt",
      detail:
        "The general-purpose bolt. Steel to steel, wood to steel, through-bolting timbers with washers.",
    },
    {
      term: "Carriage bolt",
      detail:
        "Smooth dome head with a square neck that bites into wood so it won't spin. Wood connections where only the nut side is reachable.",
    },
    {
      term: "Lag screw",
      detail: "Really a screw: threads into wood, no nut. Ledger boards and heavy brackets.",
    },
    {
      term: "Eye bolt",
      detail: "A loop for rope or hardware. Use a shouldered eye for any sideways (angled) pull.",
    },
    { term: "U-bolt", detail: "Clamps around pipe or a round post." },
    {
      term: "J-bolt / anchor bolt",
      detail: "Set into wet concrete to hold down sill plates and posts.",
    },
    {
      term: "Threaded rod",
      detail: "Cut to any length; nuts on both ends. Long through-connections and hangers.",
    },
    {
      term: "SAE grade 2 / 5 / 8",
      detail:
        "Low, medium, high strength (US). Head marks: none, three radial lines, six radial lines.",
    },
    {
      term: "Metric class 8.8 / 10.9",
      detail: "Stamped on the head. Roughly comparable to grade 5 and grade 8.",
    },
  ],
  uses: [
    "Deck ledgers and posts",
    "Trailer and vehicle hardware",
    "Swing sets and play structures",
  ],
  tags: ["fasteners", "metal"],
  related: ["nut-types", "washer-types", "thread-sizes", "torque", "screw-types"],
  status: "draft",
  order: 4,
});
