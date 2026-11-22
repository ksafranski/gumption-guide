import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "poison-ivy",
  category: "first-aid",
  title: "Poison ivy, oak & sumac",
  aka: ["Leaves of three", "Urushiol", "Plant rash", "Contact dermatitis"],
  summary:
    "An oily sap causes an itchy, blistering rash. Wash it off fast, and wash everything it touched.",
  key: "Leaves of three, let it be. Wash with soap and cool water as soon as you can.",
  gear: [
    "Soap and cool water",
    "Gloves for handling clothes and gear",
    "Calamine or anti-itch cream",
  ],
  steps: [
    {
      caption:
        "Learn the plants: poison ivy and oak have leaflets in threes; poison sumac has rows of leaflets and grows in wet ground.",
    },
    {
      caption:
        "After contact, wash skin with soap and cool water as soon as possible, ideally within minutes.",
    },
    { caption: "Scrub under fingernails. The oil hides there and spreads to the face." },
    {
      caption:
        "Wash clothes, boots, tools and dog fur separately. The oil stays active on them for a long time.",
    },
    {
      caption:
        "For the rash: cool compresses, calamine or anti-itch cream, and don't scratch. It usually clears in 1–3 weeks.",
    },
  ],
  getHelp: [
    "Never burn these plants. Smoke can carry the oil into the lungs; trouble breathing after exposure is an emergency.",
    "The rash is on the face, eyes or genitals, or covers a large area.",
    "Swelling is severe, or there are signs of infection: pus, yellow crusts, spreading redness, fever.",
  ],
  tags: ["first-aid", "hiking"],
  related: ["leave-no-trace", "bee-sting"],
  status: "draft",
  order: 18,
});
