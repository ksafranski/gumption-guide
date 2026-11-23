import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "crimp-connectors",
  category: "workshop",
  title: "Crimp connectors",
  aka: ["Crimp terminal", "Ring terminal", "Spade connector", "Butt splice", "Ferrule", "Crimper"],
  kind: "electronics",
  difficulty: "easy",
  summary:
    "A crimp squeezes a metal barrel around a stripped wire so tightly the two act as one. Done right, it's as good as solder and better under vibration.",
  key: "Match the insulation color to the wire size, use a crimper made for those terminals, and tug-test every one.",
  body: [
    "Insulated terminals are color-coded by wire range: red for the thinnest common sizes, blue for the middle, yellow for the thickest. The package shows the exact gauge range.",
    "Pliers-style 'crimpers' that just squash the barrel make weak joints. A ratcheting crimper with the right die doesn't release until the crimp is complete.",
    "In cars, boats and anything that vibrates, crimps are usually preferred over solder: solder wicks up the strands and makes a stiff point that can crack.",
  ],
  reference: [
    {
      term: "Ring terminal",
      detail: "Can't slip off a screw even if loose. Battery and ground connections.",
    },
    { term: "Spade (fork) terminal", detail: "Slips under a screw without removing it." },
    {
      term: "Quick-disconnect (blade)",
      detail: "Push-on male and female pairs. Appliances and switches.",
    },
    {
      term: "Butt splice",
      detail: "Joins two wires end to end. Heat-shrink versions seal out water.",
    },
    {
      term: "Bootlace ferrule",
      detail: "Sleeve over stranded wire for screw terminals; stops strands splaying.",
    },
  ],
  gear: [
    "Ratcheting crimper with matching dies",
    "Wire strippers",
    "Terminals",
    "Heat gun for heat-shrink types",
  ],
  steps: [
    {
      caption:
        "Strip just enough to fill the barrel, with no bare wire showing past the insulation sleeve.",
    },
    {
      caption:
        "Twist the strands lightly and push the wire in until it bottoms or shows through the far end.",
    },
    {
      caption:
        "Put the barrel in the matching color die, seam facing the correct way, and squeeze until the ratchet releases.",
    },
    { caption: "Pull firmly on the wire. If it moves, cut it off and redo it." },
  ],
  safety: ["Disconnect the battery or power before working on the circuit."],
  uses: ["Car and trailer wiring", "Boat and solar systems", "Appliance repairs"],
  tags: ["electronics", "wire"],
  related: ["wire-splices", "wire-gauge", "soldering-basics"],
  status: "draft",
  order: 7,
});
