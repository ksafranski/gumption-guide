import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "clamps",
  category: "workshop",
  title: "Clamps & clamping",
  aka: ["Bar clamp", "F-clamp", "Pipe clamp", "Parallel clamp", "Quick-grip", "Glue-up", "Cauls"],
  kind: "joinery",
  difficulty: "easy",
  summary:
    "Clamps hold work still and squeeze glue joints closed. Even, moderate pressure beats brute force.",
  key: "Dry-run the glue-up with every clamp in place before you open the glue.",
  body: [
    "Pressure spreads out from each clamp in a cone, roughly at 45°. Space clamps so their cones overlap along the joint, and use stiff straight boards (cauls) to spread it further.",
    "Alternate bar clamps above and below a panel so the squeeze doesn't bow it. Check for square by measuring both diagonals; nudge a clamp's angle to correct it.",
  ],
  reference: [
    {
      term: "F-clamp / bar clamp",
      detail: "General purpose; screw handle gives strong, fine control.",
    },
    {
      term: "One-handed (trigger) clamp",
      detail: "Quick to place, light pressure. Holding work, not big glue-ups.",
    },
    { term: "Pipe clamp", detail: "Fixtures on a length of pipe. Cheap long clamps for panels." },
    {
      term: "Parallel-jaw clamp",
      detail: "Deep, flat jaws that stay square. Best for casework and panels.",
    },
    { term: "Spring clamp", detail: "Light, fast, for small parts and holding things in place." },
    {
      term: "Band / corner clamp",
      detail: "Pulls a frame together at all corners at once. Miters and boxes.",
    },
  ],
  steps: [
    {
      caption:
        "Set out all clamps, opened to size, with pads or scrap blocks to protect the surface.",
    },
    { caption: "Dry-clamp the assembly and check for square and flat." },
    { caption: "Glue, then tighten until a thin even bead of squeeze-out appears. Stop there." },
    { caption: "Check square again, then leave it for the glue's clamp time." },
  ],
  uses: ["Glue-ups", "Holding work for cutting or drilling", "Temporary jigs"],
  tags: ["tools", "wood", "joinery"],
  related: ["glue-types", "edge-joining", "miter-joint"],
  status: "draft",
  order: 51,
});
