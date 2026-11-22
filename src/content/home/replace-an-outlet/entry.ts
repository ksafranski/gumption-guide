import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "replace-an-outlet",
  category: "home",
  title: "Replace an outlet",
  aka: ["Receptacle", "Wall socket", "Power point", "Swap a plug socket"],
  kind: "electrical",
  difficulty: "moderate",
  summary: "Swap a worn or cracked outlet like for like: same wires, same screws, same places.",
  key: "Brass screw for hot (black), silver for neutral (white), green for ground. Hooks wrap clockwise.",
  body: [
    "The tall slot is neutral and the short one is hot. A loose outlet that drops plugs, or one that's warm or scorched, is worth replacing right away.",
    "Take a photo of the old outlet before you unhook anything. If there are two sets of wires, the outlet is passing power on to others downstream; connect them the same way.",
  ],
  reference: [
    {
      term: "15 A outlet",
      detail: "Standard on 15 A circuits; also allowed on 20 A circuits with more than one outlet.",
    },
    { term: "20 A outlet", detail: "Has a T-shaped neutral slot. For 20 A circuits only." },
    {
      term: "GFCI outlet",
      detail:
        "Required near water: kitchens, baths, garages, outdoors. LINE terminals take the incoming power.",
    },
    {
      term: "Tamper-resistant (TR)",
      detail: "Shutters behind the slots. Required in new work in most of North America.",
    },
  ],
  gear: [
    "Voltage tester",
    "Screwdrivers",
    "Wire strippers",
    "Needle-nose pliers",
    "Matching outlet",
  ],
  steps: [
    { caption: "Breaker off, then test the outlet dead (live, dead, live)." },
    {
      caption:
        "Remove the cover and mounting screws and pull the outlet out. Test the wires again.",
    },
    { caption: "Photograph the wiring, then loosen the screws and unhook each wire." },
    {
      caption:
        "Strip to fresh copper if the ends are nicked. Bend a hook, wrap it clockwise around the matching screw and tighten.",
    },
    {
      caption:
        "Fold the wires back neatly, screw the outlet in square, refit the cover, power on and test.",
    },
  ],
  safety: [
    "Use the side screws rather than the push-in (backstab) holes; the screws make a more reliable connection.",
    "No ground wire in the box? Don't fake one. A GFCI outlet labeled 'No equipment ground' is the usual fix.",
    "Aluminum wire, scorched insulation or a crumbling box: stop and call an electrician.",
  ],
  uses: ["Cracked or loose outlets", "Upgrading to tamper-resistant or GFCI"],
  tags: ["electrical", "outlets"],
  related: ["test-for-voltage", "wire-colors", "gfci-afci", "wire-connectors"],
  status: "draft",
  order: 5,
});
