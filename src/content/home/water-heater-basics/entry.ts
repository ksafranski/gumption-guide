import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "water-heater-basics",
  category: "home",
  title: "Water heater basics",
  aka: [
    "Hot water tank",
    "Flush a water heater",
    "T&P valve",
    "Pressure relief valve",
    "Anode rod",
    "Pilot light",
  ],
  kind: "plumbing",
  difficulty: "moderate",
  summary:
    "A tank heater needs three things checked: the relief valve, the sediment in the bottom, and the anode that keeps it from rusting.",
  key: "Water on the floor from the relief valve pipe is a warning, not a nuisance. Find out why before plugging anything.",
  body: [
    "The temperature and pressure (T&P) relief valve opens if the tank gets too hot or the pressure too high, so it doesn't explode. Its discharge pipe must run down toward the floor or a drain, open at the end, with nothing screwed onto it.",
    "Sediment settles in the bottom, especially with hard water. It makes popping or rumbling sounds and wastes energy. Draining a few gallons from the drain valve once a year keeps it in check.",
    "Rust-colored hot water, a rotten-egg smell or a leaking tank can mean the anode rod is used up or the tank is failing.",
  ],
  reference: [
    {
      term: "Cold inlet valve",
      detail: "Shuts off water to the tank. Close it before draining or servicing.",
    },
    {
      term: "T&P relief valve",
      detail:
        "Lever near the top with a pipe running down. Test by lifting it briefly, with a bucket under the pipe.",
    },
    { term: "Drain valve", detail: "At the bottom. Takes a garden hose." },
    {
      term: "Thermostat",
      detail: "Around 120 °F (49 °C) is a common setting that limits scald risk.",
    },
    { term: "Gas pilot / igniter", detail: "Relight by following the label on the tank, exactly." },
  ],
  steps: [
    { caption: "Turn the heater off: gas control to PILOT or OFF, or the electric breaker off." },
    { caption: "Close the cold inlet valve and open a hot faucet in the house to let air in." },
    {
      caption:
        "Connect a hose to the drain valve, run it to a drain or outside, and open it. The water is hot.",
    },
    {
      caption:
        "Drain until it runs clear, close the valve, reopen the cold inlet and wait for water at the hot faucet.",
    },
    { caption: "Only once the tank is full, turn the power or gas back on." },
  ],
  safety: [
    "Never turn on an electric heater with an empty tank; it burns out the elements.",
    "If you smell gas, leave the house and call the gas company from outside.",
    "Old drain valves can break or not reseal. Have a cap or replacement on hand.",
  ],
  uses: ["Yearly maintenance", "Popping noises", "Running out of hot water early"],
  tags: ["plumbing", "water", "home-safety"],
  related: ["shut-off-valves", "pipe-types", "temperature"],
  status: "draft",
  order: 19,
});
