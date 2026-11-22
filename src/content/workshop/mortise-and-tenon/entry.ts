import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "mortise-and-tenon",
  category: "workshop",
  title: "Mortise & tenon",
  aka: ["M&T", "Through tenon", "Blind mortise", "Tenon joint", "Drawbore"],
  kind: "joinery",
  difficulty: "hard",
  summary:
    "A tongue (tenon) on one piece fits a pocket (mortise) in the other. The classic joint for frames that take racking.",
  key: "Make the tenon about a third of the stock's thickness. Cut the mortise first, then fit the tenon to it.",
  body: [
    "It's much easier to shave a tenon than to widen a mortise, so the mortise sets the size. A good fit slides together with hand pressure and holds its own weight before glue.",
    "Shoulders on the tenon hide the edges of the mortise and stop the rail twisting. A drawbore (a peg through slightly offset holes) pulls the joint tight without clamps.",
  ],
  reference: [
    { term: "Blind (stub)", detail: "Mortise stops short; the tenon is hidden. Most furniture." },
    {
      term: "Through",
      detail: "Tenon passes right through and shows. Strong and decorative; can be wedged.",
    },
    {
      term: "Haunched",
      detail: "A short step at the top fills the panel groove in doors and frames.",
    },
    {
      term: "Loose tenon",
      detail:
        "Both pieces mortised, with a separate tenon glued in. Easiest with a router or domino-style tool.",
    },
  ],
  gear: [
    "Marking gauge (mortise gauge)",
    "Mortise chisel or drill and chisels",
    "Tenon saw",
    "Shoulder plane or chisel",
  ],
  steps: [
    {
      caption:
        "Set the gauge to the chisel width, centered on the stock, and mark both pieces from their show faces.",
    },
    {
      caption:
        "Chop or drill out the mortise a little deeper than the tenon length, walls square to the face.",
    },
    { caption: "Saw the tenon cheeks on the waste side of the lines, then the shoulders." },
    { caption: "Pare the cheeks until the tenon slides in with hand pressure, and glue up." },
  ],
  uses: ["Tables and chairs", "Doors and frames", "Timber framing"],
  tags: ["joinery", "wood"],
  related: ["wood-joints", "dowel-joint", "glue-types"],
  status: "draft",
  order: 13,
});
