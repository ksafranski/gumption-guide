import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "dehydration",
  category: "first-aid",
  title: "Dehydration",
  aka: ["Not drinking enough", "Oral rehydration", "Electrolytes", "ORS"],
  summary:
    "Losing more water than you take in. Sip fluids with a little salt and sugar until urine runs pale.",
  key: "Pale straw-colored urine means you're doing fine. Dark and scant means drink.",
  gear: [
    "Clean water",
    "Oral rehydration salts or sports drink",
    "Or: sugar, salt and a measuring spoon",
  ],
  steps: [
    {
      caption: "Watch for thirst, dark urine, headache, tiredness and dizziness when standing up.",
    },
    { caption: "Rest in shade and sip steadily rather than gulping a lot at once." },
    {
      caption:
        "With heavy sweating, vomiting or diarrhea, replace salt too: oral rehydration salts or a sports drink.",
    },
    {
      caption:
        "Home mix: 1 litre of clean water, 6 level teaspoons of sugar, ½ level teaspoon of salt. Stir until dissolved. Measure carefully: too much salt is harmful.",
    },
    { caption: "Keep going until the person is urinating normally and the urine is pale." },
  ],
  getHelp: [
    "Confusion, fainting, a racing heart, or no urine for 8 hours or more.",
    "Can't keep fluids down.",
    "A baby, young child or elderly person with vomiting or diarrhea.",
  ],
  tags: ["first-aid", "water", "hiking"],
  related: ["heat-exhaustion", "purify-water", "volume"],
  sources: [
    {
      title: "WHO: Oral rehydration salts (home recipe)",
      note: "Recipe to verify against current WHO guidance",
    },
  ],
  status: "draft",
  order: 17,
});
