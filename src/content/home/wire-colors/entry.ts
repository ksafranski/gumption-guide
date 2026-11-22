import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "wire-colors",
  category: "home",
  title: "Wire colors",
  aka: ["Hot neutral ground", "Live neutral earth", "Electrical wire color code"],
  kind: "electrical",
  difficulty: "easy",
  summary: "Insulation color tells you each wire's job: hot, neutral or ground.",
  key: "Colors are a convention, not a guarantee. Test before you touch.",
  body: [
    "Old work breaks the rules. A white wire with black tape on it is being used as a hot (common on switch loops), and older houses may have no ground at all.",
  ],
  reference: [
    { term: "Black (N. America)", detail: "Hot. Carries current to the load." },
    {
      term: "Red (N. America)",
      detail: "Second hot: 240 V circuits, three-way travelers, split outlets.",
    },
    {
      term: "White or gray (N. America)",
      detail: "Neutral. Carries current back. Can still shock you.",
    },
    {
      term: "Green or bare copper (N. America)",
      detail: "Ground. Only carries current during a fault.",
    },
    { term: "Brown (IEC, Europe/UK)", detail: "Live." },
    { term: "Blue (IEC, Europe/UK)", detail: "Neutral." },
    { term: "Green-and-yellow (IEC)", detail: "Earth." },
    {
      term: "Old UK wiring",
      detail: "Red live, black neutral. Note: black is neutral here, not hot.",
    },
  ],
  safety: [
    "Neutrals carry current whenever the circuit is on. Treat every wire as live until tested.",
  ],
  uses: ["Replacing outlets and switches", "Wiring a light fixture", "Reading an old installation"],
  tags: ["electrical", "wire"],
  related: ["test-for-voltage", "replace-an-outlet", "wire-gauge"],
  status: "draft",
  order: 3,
});
