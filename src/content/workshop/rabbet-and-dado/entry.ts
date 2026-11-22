import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "rabbet-and-dado",
  category: "workshop",
  title: "Rabbet, dado & groove",
  aka: ["Rebate", "Housing joint", "Trench", "Groove", "Shelf dado", "Stopped dado"],
  kind: "joinery",
  difficulty: "moderate",
  summary:
    "A rabbet is a step on an edge, a dado is a channel across the grain, and a groove runs with it.",
  key: "Size the cut to the actual board, not its nominal size. Plywood is usually a little thinner than labeled.",
  body: [
    "A dado gives a shelf a ledge to sit on, so glue and screws aren't carrying the load. Cut it about a third of the side's thickness deep; deeper weakens the side.",
    "Rabbets let a back panel sit inside the frame instead of on its edge, and make simple strong box corners.",
  ],
  reference: [
    {
      term: "Rabbet (rebate)",
      detail: "Open on one face and one edge. Cabinet backs, box corners, door glass.",
    },
    { term: "Dado (housing)", detail: "Three-sided channel across the grain. Bookcase shelves." },
    { term: "Stopped dado", detail: "Doesn't run out the front edge, so the joint can't be seen." },
    { term: "Groove", detail: "Channel along the grain. Drawer bottoms, floating panels." },
  ],
  gear: ["Router with straight bit and edge guide, or table saw with a dado stack", "Test scraps"],
  steps: [
    { caption: "Mark the shelf positions on both sides together so they line up." },
    { caption: "Set the cut width to the shelf stock and the depth to about a third of the side." },
    { caption: "Cut a test dado in scrap and fit the shelf: snug by hand, no hammering." },
    { caption: "Cut the real pieces, guided by a fence or clamped straightedge." },
  ],
  safety: [
    "Dado stacks need a zero-clearance insert. Use push blocks, and never cut freehand on a table saw.",
  ],
  uses: ["Bookcases", "Cabinet backs", "Drawer bottoms"],
  tags: ["joinery", "wood"],
  related: ["wood-joints", "sheet-goods", "lap-joint"],
  status: "draft",
  order: 12,
});
