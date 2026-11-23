import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "hand-plane-basics",
  category: "workshop",
  title: "Hand plane basics",
  aka: [
    "Bench plane",
    "Block plane",
    "Jack plane",
    "Smoothing plane",
    "Plane against the grain",
    "Tearout",
  ],
  kind: "joinery",
  difficulty: "moderate",
  summary:
    "A sharp iron set for a thin shaving, pushed with the grain, flattens and smooths wood better than sandpaper.",
  key: "Plane downhill with the grain. If it tears out, turn the board around.",
  body: [
    "Read the grain on the board's edge: the fibers run up toward the surface like hills. Plane so you're going down the slope, the way you'd stroke a cat.",
    "Set the iron for a shaving you can almost see through. Sight down the sole from the front and turn the lateral lever until the edge peeks out evenly across the mouth.",
    "Pressure on the front knob at the start of the stroke, on the back at the end. That keeps the plane from rounding over the ends.",
  ],
  reference: [
    { term: "Block plane", detail: "Small, one hand, low angle. End grain, chamfers, fitting." },
    { term: "Smoothing plane (about No. 4)", detail: "Final surface before finish." },
    { term: "Jack plane (about No. 5)", detail: "All-rounder: rough work and general flattening." },
    { term: "Jointer plane (No. 7–8)", detail: "Long sole for straight edges and flat panels." },
  ],
  gear: ["Plane with a sharp iron", "Bench with a stop or vise", "Wax for the sole"],
  steps: [
    { caption: "Hone the iron, set it with a fine, even projection, and wax the sole." },
    { caption: "Clamp the board with the grain running downhill away from you." },
    {
      caption:
        "Push with your body, not just your arms: front pressure to start, even through the middle, back pressure to finish.",
    },
    { caption: "Check with a straightedge across and along, and plane the high spots." },
  ],
  safety: ["Retract the iron or lay the plane on its side so the edge doesn't touch the bench."],
  uses: ["Fitting doors and drawers", "Flattening boards", "Chamfering edges"],
  tags: ["tools", "wood"],
  related: ["sharpen-a-chisel", "card-scraper", "edge-joining"],
  status: "draft",
  order: 54,
});
