import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "sweat-copper-pipe",
  category: "home",
  title: "Sweat a copper joint",
  aka: ["Solder copper pipe", "Sweating pipe", "Capillary joint", "Plumbing solder"],
  kind: "plumbing",
  difficulty: "hard",
  summary:
    "Heat the fitting, not the solder; a clean, fluxed joint pulls molten solder in by capillary action.",
  key: "Bright copper, thin flux, dry pipe. Most bad joints are dirty or wet ones.",
  body: [
    "Water in the pipe soaks up the heat, so the joint never gets hot enough and the solder balls up. Drain the line fully and open a faucet below the work to let steam out.",
    "For drinking water, use lead-free plumbing solder and a water-soluble flux. Never use plumbing (acid) flux on electronics.",
  ],
  gear: [
    "Propane or MAP torch",
    "Tubing cutter",
    "Fitting brush and emery cloth",
    "Flux and lead-free solder",
    "Heat-shield cloth",
    "Fire extinguisher",
  ],
  steps: [
    { caption: "Cut the pipe square with a tubing cutter and deburr the inside." },
    {
      caption:
        "Scrub the pipe end and the inside of the fitting until bright. Don't touch them after.",
    },
    { caption: "Brush a thin coat of flux on both, push the joint together and give it a twist." },
    {
      caption:
        "Heat the fitting, moving the flame around. Touch solder to the joint on the side away from the flame; when it melts on contact, feed it in.",
    },
    {
      caption:
        "Stop when a bright ring shows all round. Wipe with a damp rag while warm, then let it cool undisturbed.",
    },
  ],
  safety: [
    "Hang a heat shield behind the joint. Wood framing, insulation and dust catch fire easily.",
    "Stay and watch the area for 30 minutes after; wall cavities can smolder.",
    "Wear eye protection. Hot solder spits off wet pipe.",
  ],
  uses: ["Copper supply repairs", "Adding a valve or tee"],
  tags: ["plumbing", "soldering", "fire"],
  related: ["pipe-types", "solder-types", "soldering-basics"],
  status: "draft",
  order: 17,
});
