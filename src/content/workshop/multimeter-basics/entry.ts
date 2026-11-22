import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "multimeter-basics",
  category: "workshop",
  title: "Multimeter basics",
  aka: ["Multimeter", "DMM", "Voltmeter", "Continuity test", "Ohmmeter", "Volt-ohm meter"],
  kind: "electronics",
  difficulty: "easy",
  summary:
    "A multimeter measures voltage across things, resistance and continuity through dead things, and current in series.",
  key: "Volts: probe across, circuit on. Ohms and continuity: circuit off. Amps: break the circuit and move the red lead.",
  body: [
    "Measuring current is where meters get blown. In amps mode the meter is nearly a short circuit; put it across a battery or an outlet and it pops its fuse, or worse. Move the red lead back to the V jack as soon as you finish.",
    "AC and DC are separate settings. House power is AC; batteries, car systems and most electronics are DC.",
  ],
  reference: [
    {
      term: "V⎓ (DC volts)",
      detail:
        "Batteries, power supplies, car circuits. A healthy 12 V car battery reads about 12.6 V at rest.",
    },
    {
      term: "V~ (AC volts)",
      detail: "Outlets and mains. Only with a meter and leads rated for it.",
    },
    {
      term: "Ω (resistance)",
      detail:
        "Resistors, heating elements, coils. Power off, part out of circuit for a true reading.",
    },
    {
      term: "Continuity (beep)",
      detail: "Is this wire, fuse or switch connected end to end? Power off.",
    },
    {
      term: "A / mA (current)",
      detail: "In series with the load, red lead in the A or mA jack. Start on the highest range.",
    },
  ],
  steps: [
    { caption: "Black lead in COM. Red lead in V/Ω for almost everything." },
    { caption: "Pick the function and, on a manual meter, a range above what you expect." },
    {
      caption:
        "Touch the probes on, read, and note the sign: a minus means the leads are reversed.",
    },
  ],
  safety: [
    "For mains work use a meter rated CAT II or CAT III with shrouded leads, and inspect the leads for cracks.",
    "Never measure resistance or continuity on a live circuit.",
  ],
  uses: ["Checking batteries and fuses", "Tracing a broken wire", "Testing outlets"],
  tags: ["electronics", "testing", "measuring"],
  related: ["ohms-law", "test-for-voltage", "soldering-basics"],
  status: "draft",
  order: 5,
});
