import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "replace-a-light-switch",
  category: "home",
  title: "Replace a light switch",
  aka: ["Single-pole switch", "Three-way switch", "3-way", "Two-way switching", "Dimmer"],
  kind: "electrical",
  difficulty: "moderate",
  summary:
    "A switch breaks the hot wire to a light. Match the new switch to the old type and copy its wiring.",
  key: "Count the screws: two plus ground is single-pole; three plus ground is a three-way. The odd-colored screw is the common.",
  body: [
    "A three-way pair controls one light from two places (called two-way switching in the UK). The common terminal, usually a darker screw, takes the feed or the wire to the light; the two brass travelers run between the switches.",
    "Most switch boxes have no neutral, which is why many smart switches won't fit. Check the box before buying one.",
  ],
  reference: [
    {
      term: "Single-pole",
      detail: "Two terminals plus ground. One switch, one light. Has ON/OFF printed on the toggle.",
    },
    {
      term: "Three-way",
      detail: "Three terminals plus ground. Two switches control one light. No ON/OFF marking.",
    },
    {
      term: "Four-way",
      detail: "Four terminals. Goes between two three-ways for a third location.",
    },
    { term: "Dimmer", detail: "Check the bulb type (LED-compatible) and the wattage rating." },
  ],
  gear: ["Voltage tester", "Screwdrivers", "Masking tape and marker", "Matching switch"],
  steps: [
    { caption: "Breaker off, then test the switch box dead, every wire." },
    {
      caption:
        "Unscrew the switch, pull it out and tape-label the wire on the common (dark) screw if it's a three-way.",
    },
    { caption: "Move one wire at a time from the old switch to the same terminal on the new one." },
    {
      caption:
        "Connect the ground, fold the wires in, mount the switch upright, refit the plate and test.",
    },
  ],
  safety: [
    "Switch boxes often hold more than one circuit. Test every wire, not just the ones on the switch.",
  ],
  uses: ["Broken or worn switches", "Adding a dimmer", "Two-location lighting"],
  tags: ["electrical", "wire"],
  related: ["test-for-voltage", "wire-colors", "replace-an-outlet"],
  status: "draft",
  order: 6,
});
