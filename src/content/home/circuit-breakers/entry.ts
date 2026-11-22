import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "circuit-breakers",
  category: "home",
  title: "Breaker panel",
  aka: ["Circuit breaker", "Fuse box", "Service panel", "Tripped breaker", "Consumer unit"],
  kind: "electrical",
  difficulty: "easy",
  summary:
    "The panel splits incoming power into circuits, and each breaker cuts its circuit when too much current flows.",
  key: "Before any electrical job, switch off the breaker, then prove the circuit dead with a tester.",
  body: [
    "A breaker trips for one of three reasons: too much load on the circuit, a short, or a ground fault. Overload is the common one, like a space heater and a kettle on the same kitchen circuit.",
    "Label every breaker. Flip one off, walk the house with a lamp or a plug-in tester, and write down everything that went dead. It takes an afternoon and saves hours later.",
  ],
  reference: [
    {
      term: "Main breaker",
      detail: "Shuts off the whole panel. The service wires above it stay live.",
    },
    {
      term: "Single-pole breaker",
      detail: "One slot, one hot wire. Lights and ordinary outlets (120 V in North America).",
    },
    {
      term: "Double-pole breaker",
      detail: "Two slots tied together. 240 V loads: dryer, range, water heater, AC.",
    },
    {
      term: "GFCI / AFCI breaker",
      detail: "Has a test button and protects the whole circuit against shock or arcing.",
    },
    {
      term: "Fuse",
      detail:
        "Older panels. Melts instead of tripping; replace with the same rating, never larger.",
    },
  ],
  steps: [
    { caption: "Unplug or switch off what was running on the circuit." },
    {
      caption:
        "Find the tripped breaker: its handle sits in the middle or at OFF, out of line with the rest.",
    },
    { caption: "Push it firmly all the way to OFF, then back to ON." },
    {
      caption:
        "Turn the loads back on one at a time. If it trips again with little or nothing running, stop and find the fault.",
    },
  ],
  safety: [
    "Don't remove the panel cover. The main lugs are live even with the main breaker off.",
    "A breaker that trips again straight away, feels hot, smells burnt or buzzes needs an electrician.",
    "Never swap in a bigger breaker or fuse to stop trips. The wire is sized for the breaker.",
  ],
  uses: ["Resetting a tripped circuit", "Shutting off power before repairs", "Labeling circuits"],
  tags: ["electrical", "home-safety"],
  related: ["wire-gauge", "test-for-voltage", "gfci-afci"],
  status: "draft",
  order: 1,
});
