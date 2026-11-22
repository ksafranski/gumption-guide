import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "test-for-voltage",
  category: "home",
  title: "Test for voltage",
  aka: ["Non-contact voltage tester", "Live-dead-live", "Is it off?", "Voltage pen"],
  kind: "electrical",
  difficulty: "easy",
  summary:
    "Prove a circuit is dead before you touch it, and prove your tester works before you trust it.",
  key: "Live, dead, live: check the tester on a known live outlet, test the circuit, then check the tester again.",
  body: [
    "A non-contact pen is a quick screen, not proof. It can miss a wire buried in a box or read nothing because its battery died. Confirm with a two-probe tester or multimeter across hot–neutral and hot–ground.",
  ],
  gear: ["Non-contact voltage tester", "Two-probe tester or multimeter", "Known live outlet"],
  steps: [
    { caption: "Switch off the breaker and tape over it or tell the household." },
    {
      caption:
        "Test your tester on an outlet you know is live. It should beep or read about 120 V (or 230 V).",
    },
    {
      caption:
        "Test every wire in the box: hot to neutral, hot to ground, and neutral to ground. Boxes can hold more than one circuit.",
    },
    { caption: "Go back to the known live outlet and confirm the tester still reads." },
  ],
  safety: [
    "Use a meter rated for mains work (CAT II or higher) with intact leads.",
    "Hold both probes in one hand where you can, and keep the other hand away from metal.",
  ],
  uses: ["Before any outlet, switch or fixture work", "Finding which breaker feeds what"],
  tags: ["electrical", "home-safety", "testing"],
  related: ["circuit-breakers", "multimeter-basics", "wire-colors"],
  status: "draft",
  order: 4,
});
