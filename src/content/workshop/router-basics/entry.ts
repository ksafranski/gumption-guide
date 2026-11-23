import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "router-basics",
  category: "workshop",
  title: "Router basics",
  aka: [
    "Wood router",
    "Router bits",
    "Feed direction",
    "Climb cut",
    "Trim router",
    "Plunge router",
  ],
  kind: "joinery",
  difficulty: "moderate",
  summary:
    "A router spins a bit fast enough to shape edges and cut grooves. Feed direction and shallow passes keep it under control.",
  key: "Around the outside of a workpiece, move the router counterclockwise; inside a cutout, clockwise.",
  body: [
    "The bit spins clockwise seen from above. Feeding against that rotation makes the bit pull itself into the wood steadily. Feeding with it (a climb cut) lets the router grab and run along the edge on its own.",
    "Take deep cuts in several shallow passes. A bit buried full depth in one go burns the wood, strains the motor and can snatch.",
  ],
  reference: [
    { term: "Straight bit", detail: "Grooves, dadoes, rabbets with a fence or guide." },
    { term: "Flush-trim bit", detail: "Bearing follows a template or the edge of a laminate." },
    { term: "Roundover / chamfer", detail: "Softens edges. Bearing-guided." },
    { term: "Rabbeting bit", detail: "Swappable bearings set the rabbet width." },
    { term: "Spiral bits", detail: "Up-cut clears chips; down-cut leaves a cleaner top edge." },
  ],
  gear: [
    "Router (fixed or plunge base)",
    "Bits",
    "Edge guide or straightedge",
    "Clamps",
    "Eye and hearing protection",
  ],
  steps: [
    {
      caption:
        "Unplug the router, seat the bit at least three-quarters of its shank in the collet, then back it out a touch, and tighten.",
    },
    { caption: "Clamp the work so nothing blocks the router's path." },
    {
      caption:
        "Set a shallow depth, start the router clear of the wood, and feed in the correct direction at a steady pace.",
    },
    {
      caption:
        "Lower the bit and repeat until you reach full depth. Wait for the bit to stop before lifting the router.",
    },
  ],
  safety: [
    "Unplug before changing bits.",
    "Eye and hearing protection every time; routers throw chips and are loud.",
    "Keep both hands on the handles. Never rout pieces too small to clamp; use a router table with a fence and push blocks.",
  ],
  uses: ["Edge profiles", "Dadoes and rabbets", "Template copies", "Hinge mortises"],
  tags: ["tools", "wood", "joinery"],
  related: ["rabbet-and-dado", "mortise-and-tenon", "clamps"],
  status: "draft",
  order: 55,
});
