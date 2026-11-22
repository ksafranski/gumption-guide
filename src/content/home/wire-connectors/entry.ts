import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wire-connectors",
  category: "home",
  title: "Wire connectors",
  aka: [
    "Wire nut",
    "Twist-on connector",
    "Lever connector",
    "Push-in connector",
    "Marrette",
    "Splice",
  ],
  kind: "electrical",
  difficulty: "easy",
  summary:
    "House wires are joined inside a box with a rated connector, never just twisted and taped.",
  key: "Match the connector to the wire count and gauge printed on the package, then tug each wire.",
  body: [
    "Every splice lives inside a junction box with a cover you can get to later. Buried splices in a wall are a fire risk nobody can find.",
  ],
  reference: [
    {
      term: "Twist-on (wire nut)",
      detail:
        "Cheap and universal. Hold stripped ends together, twist clockwise until the wires twist too. No bare copper below the skirt.",
    },
    {
      term: "Lever connector",
      detail:
        "Strip to the gauge on the side, lift the lever, insert, snap down. Easy to undo; good for mixed solid and stranded wire.",
    },
    {
      term: "Push-in connector",
      detail: "Push straight solid wire in. Fast, but hard to remove; solid wire only.",
    },
    { term: "Crimp sleeve", detail: "For bundling grounds. Crimp with the proper tool." },
  ],
  steps: [
    { caption: "Strip to the length marked on the connector or its package." },
    { caption: "Seat the wires fully, ends even." },
    { caption: "Tug each wire hard. A wire that slips out wasn't held." },
  ],
  safety: [
    "Splice copper to aluminum only with connectors rated for it (marked AL/CU).",
    "Don't use more wires than the connector is rated for.",
  ],
  uses: ["Light fixtures", "Junction boxes", "Pigtailing outlets"],
  tags: ["electrical", "wire"],
  related: ["wire-gauge", "replace-an-outlet", "wire-splices"],
  status: "draft",
  order: 8,
});
