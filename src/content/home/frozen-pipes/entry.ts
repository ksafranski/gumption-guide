import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "frozen-pipes",
  category: "home",
  title: "Frozen pipes",
  aka: ["Burst pipe", "Thaw a pipe", "Pipe freeze", "Drip the faucets"],
  kind: "plumbing",
  difficulty: "moderate",
  summary:
    "Pipes in cold walls, crawlspaces and garages freeze first. Keep them warm and moving, and thaw them slowly.",
  key: "Little or no flow from a faucet in a cold snap means a frozen pipe. Open that faucet, then warm the pipe from the faucet end back.",
  body: [
    "Ice doesn't usually burst the pipe where it forms; it raises pressure in the trapped water between the ice and a closed faucet. That's why a dripping faucet helps: it relieves the pressure.",
    "A burst often doesn't leak until it thaws. Know where the main shutoff is before you start warming anything.",
  ],
  reference: [
    {
      term: "Drip faucets",
      detail: "On exterior walls, a thin trickle of hot and cold during hard freezes.",
    },
    { term: "Open cabinet doors", detail: "Lets room heat reach sink pipes on outside walls." },
    {
      term: "Pipe insulation",
      detail: "Foam sleeves on pipes in crawlspaces, attics and garages.",
    },
    {
      term: "Heat cable",
      detail: "Thermostatic, listed for the pipe material, installed per the instructions.",
    },
    {
      term: "Outdoor faucets",
      detail:
        "Disconnect hoses in fall. Shut and drain the inside valve, or fit a frost-free sillcock.",
    },
  ],
  steps: [
    {
      caption: "Open the faucet the frozen pipe feeds, so water and steam can escape as it thaws.",
    },
    {
      caption:
        "Warm the pipe starting nearest the faucet and working back, with a hair dryer, heat lamp or warm towels.",
    },
    { caption: "Keep going until full flow returns. Check the whole run for leaks as it thaws." },
    { caption: "If it bursts, close the main shutoff and call a plumber." },
  ],
  safety: [
    "Never use an open flame or a torch on a frozen pipe; it can boil water in the pipe and start fires in the wall.",
    "Keep space heaters clear of anything that can burn, and keep electric heat away from standing water.",
  ],
  uses: ["Cold snaps", "Vacation homes in winter", "Crawlspaces and garages"],
  tags: ["plumbing", "water", "cold-weather"],
  related: ["shut-off-valves", "pipe-types"],
  status: "draft",
  order: 18,
});
