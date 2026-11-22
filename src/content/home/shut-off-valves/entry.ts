import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "shut-off-valves",
  category: "home",
  title: "Shut-off valves",
  aka: ["Main water shutoff", "Stop valve", "Angle stop", "Stopcock", "Turn off the water"],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "Know where the main shutoff is before a pipe bursts, and use the small stops under fixtures for routine jobs.",
  key: "Find and test the main shutoff now, not during the flood.",
  body: [
    "The main is usually where the supply pipe enters the house: a basement wall, a crawlspace, a garage, or near the water heater. Some houses also have a curb valve at the street, which may need a long key and belongs to the utility.",
    "Valves that haven't moved in years seize or start to drip at the stem. Turn them gently and note any that need replacing.",
  ],
  reference: [
    {
      term: "Ball valve",
      detail:
        "Lever handle, quarter turn. Handle in line with the pipe = open, across it = closed.",
    },
    {
      term: "Gate valve",
      detail: "Round wheel, many turns. Old ones jam or don't seal fully; don't force them.",
    },
    {
      term: "Fixture stop (angle stop)",
      detail: "Under sinks and toilets. Turn clockwise to close.",
    },
    { term: "Water heater valve", detail: "On the cold inlet. Shuts off hot water to the house." },
  ],
  steps: [
    { caption: "Locate the main shutoff and tag it so anyone in the house can find it." },
    {
      caption:
        "Close it, open a low faucet to check the water stops, then reopen the valve slowly.",
    },
    { caption: "For a fixture job, close its stop and open the faucet to drain the pressure." },
  ],
  safety: [
    "If a valve won't budge, don't put a cheater bar on it. A cracked valve is worse than a stuck one.",
  ],
  uses: [
    "Burst or leaking pipes",
    "Replacing faucets and toilets",
    "Leaving the house for a long trip",
  ],
  tags: ["plumbing", "water", "home-safety"],
  related: ["fix-a-running-toilet", "fix-a-dripping-faucet", "pipe-types"],
  status: "draft",
  order: 10,
});
