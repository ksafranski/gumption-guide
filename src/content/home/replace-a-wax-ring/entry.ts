import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "replace-a-wax-ring",
  category: "home",
  title: "Replace a toilet wax ring",
  aka: [
    "Toilet leaking at the base",
    "Wax seal",
    "Closet flange",
    "Pull a toilet",
    "Rocking toilet",
  ],
  kind: "plumbing",
  difficulty: "moderate",
  summary:
    "A toilet that rocks or leaks at the base needs a new seal between it and the floor flange. It's a lift-and-reset job.",
  key: "Set the toilet straight down in one go. Once the wax is squashed, it doesn't seal a second time.",
  body: [
    "Leaks at the base show as staining, a soft floor or a sewer smell. Rule out the easy ones first: a loose tank-to-bowl joint or a sweating tank can drip down and look like a base leak.",
    "If the floor flange sits below the finished floor, use an extra-thick ring or a flange extender. Foam or rubber seals are a reusable alternative to wax.",
  ],
  gear: [
    "New wax ring (or wax-free seal)",
    "New closet bolts",
    "Adjustable wrench",
    "Putty knife",
    "Sponge, bucket and towels",
    "Rag to plug the drain",
    "Gloves",
  ],
  steps: [
    {
      caption:
        "Close the stop valve, flush, and sponge the last water out of the tank and bowl. Disconnect the supply line.",
    },
    {
      caption:
        "Remove the nuts on the closet bolts, rock the toilet gently to break the seal, and lift it straight up onto a towel.",
    },
    {
      caption:
        "Stuff a rag in the drain to block sewer gas. Scrape off all the old wax and check the flange for cracks.",
    },
    {
      caption:
        "Fit new bolts in the flange slots, press the new ring onto the flange (or the toilet outlet), and remove the rag.",
    },
    {
      caption:
        "Lower the toilet straight down over the bolts, press it down with your weight, and tighten the nuts evenly, a little each side.",
    },
    {
      caption:
        "Reconnect the water, flush a few times and check for leaks. Caulk the base, leaving a gap at the back so a future leak shows.",
    },
  ],
  safety: [
    "Toilets are heavy and porcelain cracks. Lift with your legs and get help if needed.",
    "Don't overtighten the bolts; the base can crack.",
  ],
  uses: ["Leaks at the base", "Rocking toilets", "New flooring"],
  tags: ["plumbing", "drains"],
  related: ["fix-a-running-toilet", "shut-off-valves", "caulk-a-joint"],
  status: "draft",
  order: 19.5,
});
