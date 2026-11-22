import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "gfci-afci",
  category: "home",
  title: "GFCI & AFCI protection",
  aka: ["GFI", "RCD", "Ground fault", "Arc fault", "Test button", "Residual current device"],
  kind: "electrical",
  difficulty: "easy",
  summary:
    "A GFCI cuts power when current leaks to ground (through you); an AFCI cuts it when wiring arcs (fire risk).",
  key: "Press TEST monthly. If it doesn't click off, replace it.",
  body: [
    "A GFCI compares the current going out on the hot with the current coming back on the neutral. A difference of a few milliamps means some is going somewhere else, possibly through a person, and it trips in a fraction of a second. Outside North America the same device is called an RCD.",
    "One GFCI outlet can protect every outlet downstream of it on the circuit. If a bathroom outlet is dead, look for a tripped GFCI in another bathroom, the garage or outside.",
    "An AFCI listens for the electrical signature of arcing: a nail through a cable, a frayed cord, a loose terminal. It's usually a breaker in the panel.",
  ],
  reference: [
    {
      term: "GFCI outlet",
      detail: "TEST and RESET buttons on the face. Protects itself and its LOAD side.",
    },
    { term: "GFCI breaker", detail: "Protects the whole circuit from the panel." },
    {
      term: "AFCI breaker",
      detail:
        "Arc protection, required for bedrooms and living areas in newer North American code.",
    },
    { term: "Dual-function", detail: "GFCI and AFCI in one breaker or outlet." },
  ],
  steps: [
    { caption: "Plug a lamp into the outlet and switch it on." },
    { caption: "Press TEST. The lamp should go out with a click." },
    { caption: "Press RESET firmly until it latches. The lamp comes back." },
  ],
  safety: [
    "A GFCI that keeps tripping is telling you about a fault: a wet outdoor box, a damaged tool cord, a failing appliance.",
    "A GFCI doesn't protect you from touching hot and neutral together; it only sees current leaking to ground.",
  ],
  uses: ["Kitchens, bathrooms, garages, outdoors", "Pools and hot tubs", "Bedrooms (AFCI)"],
  tags: ["electrical", "home-safety", "outlets"],
  related: ["circuit-breakers", "replace-an-outlet", "test-for-voltage"],
  status: "draft",
  order: 7,
});
