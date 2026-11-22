import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "lap-joint",
  category: "workshop",
  title: "Half-lap joint",
  aka: ["Lap joint", "Cross lap", "End lap", "Halving joint"],
  kind: "joinery",
  difficulty: "easy",
  summary:
    "Cut away half the thickness of each board where they overlap so they sit flush, with broad faces to glue.",
  key: "Sneak up on the depth: test-fit and cut a little more, until the two faces sit dead flush.",
  body: [
    "Half-laps are the easiest strong joint to cut by hand or on a table saw. The cheeks are long grain, so glue holds well, and the shoulders resist racking.",
  ],
  reference: [
    { term: "End lap (corner)", detail: "Both pieces notched at their ends. Frames and corners." },
    {
      term: "Cross lap",
      detail: "Notches in the middle of both pieces. Grids, stretchers, crossed rails.",
    },
    { term: "T-lap", detail: "One end into the middle of the other. Mid-rails." },
  ],
  gear: [
    "Square and marking knife",
    "Marking gauge",
    "Saw",
    "Chisel",
    "Router or dado blade (optional)",
  ],
  steps: [
    { caption: "Lay one board across the other and knife the width of the overlap on each." },
    {
      caption:
        "Set a marking gauge to half the thickness and scribe both pieces from their show faces.",
    },
    { caption: "Saw the shoulders down to the gauge line, then a series of kerfs between them." },
    {
      caption:
        "Knock out the waste and pare the floor flat with a chisel. Test-fit; trim until flush.",
    },
  ],
  uses: ["Picture and cabinet frames", "Workbench stretchers", "Garden trellis"],
  tags: ["joinery", "wood"],
  related: ["wood-joints", "rabbet-and-dado", "glue-types"],
  status: "draft",
  order: 11,
});
