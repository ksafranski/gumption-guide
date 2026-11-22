import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "heat-exhaustion",
  category: "first-aid",
  title: "Heat exhaustion",
  aka: ["Heatstroke", "Overheating", "Heat illness"],
  summary: "Too hot and too dry: get them into shade, cool them down, and get fluids in.",
  key: "Shade, lie down, cool skin, sip water. Better in 30 minutes, or it's an emergency.",
  gear: [
    "Water, or a sports or rehydration drink",
    "Cloth and water to wet the skin",
    "Something to fan with",
  ],
  steps: [
    { caption: "Move them somewhere cool and shaded." },
    { caption: "Lie them down with their feet a little raised. Loosen or remove extra clothing." },
    {
      caption:
        "Wet their skin with cool water and fan them. Cold packs at the neck and armpits help.",
    },
    { caption: "Give sips of water or a sports drink if they're alert." },
    { caption: "Stay with them. They should start to feel better within about 30 minutes." },
  ],
  getHelp: [
    "They're not improving after 30 minutes of cooling and fluids.",
    "They're confused, have slurred speech, a seizure, or pass out. That's heatstroke: call emergency services and keep cooling.",
    "Their skin is very hot and they've stopped sweating while still feeling hot.",
  ],
  tags: ["first-aid", "hiking"],
  related: ["hypothermia", "purify-water"],
  status: "draft",
  order: 6,
});
