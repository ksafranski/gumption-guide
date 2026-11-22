import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "thread-tape",
  category: "home",
  title: "Thread tape & pipe dope",
  aka: ["PTFE tape", "Teflon tape", "Plumber's tape", "Pipe dope", "Thread sealant", "NPT"],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "Tapered pipe threads seal on the threads, so they need tape or dope; compression and flare fittings don't.",
  key: "Wrap the tape the way the fitting turns on: clockwise looking at the end of the pipe.",
  body: [
    "Tapered threads (NPT in North America, BSPT elsewhere) wedge tighter as they screw in, and the tape fills the gaps. Wrapped backward, the tape unravels as you tighten.",
    "Compression fittings seal on a brass ring (the ferrule) and flare fittings on a cone. Tape on those threads can stop them seating and cause a leak.",
  ],
  reference: [
    {
      term: "White PTFE tape",
      detail: "Water lines. Three to five wraps, starting a thread back from the end.",
    },
    { term: "Yellow PTFE tape", detail: "Thicker, rated for gas lines." },
    { term: "Pink tape", detail: "Thicker for water; handy on rough or old threads." },
    {
      term: "Pipe dope",
      detail: "Brushed-on paste. Fills worn threads; some types stay soft for later removal.",
    },
  ],
  steps: [
    { caption: "Clean the male threads of old tape and dirt." },
    {
      caption:
        "Hold the tape flat, start one thread in from the end and wrap clockwise, stretching slightly.",
    },
    { caption: "Three to five wraps, pressed into the threads. Tear and smooth the tail." },
    {
      caption:
        "Thread on by hand, then one to two turns with a wrench. Don't back it off to line it up.",
    },
  ],
  uses: ["Shower arms", "Hose bibs", "Threaded supply fittings", "Gas fittings (yellow tape)"],
  tags: ["plumbing", "fittings"],
  related: ["pipe-types", "thread-sizes"],
  status: "draft",
  order: 15,
});
