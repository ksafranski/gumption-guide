import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "choking",
  category: "first-aid",
  title: "Choking (adult or child over 1)",
  aka: [
    "Heimlich",
    "Abdominal thrusts",
    "Back blows",
    "Something stuck in the throat",
    "Airway obstruction",
  ],
  summary:
    "If someone can't cough, speak or breathe, act at once: back blows and abdominal thrusts until the object comes out.",
  key: "Coughing hard: let them cough. Can't cough, speak or breathe: call for help and start back blows and abdominal thrusts.",
  body: [
    "Guidance differs slightly between organizations: some teach five back blows then five abdominal thrusts, repeated; others teach abdominal thrusts alone. Both are accepted; follow your training.",
    "Infants under 1 year get back blows and chest thrusts, never abdominal thrusts. Take a course; it's a skill best learned hands-on.",
  ],
  steps: [
    {
      caption:
        'Ask, "Are you choking?" If they can cough forcefully, encourage them to keep coughing.',
    },
    { caption: "If they can't cough, speak or breathe, have someone call emergency services." },
    {
      caption:
        "Back blows: lean them forward, support the chest, and give up to five firm blows between the shoulder blades with the heel of your hand.",
    },
    {
      caption:
        "Abdominal thrusts: stand behind, fist just above the navel, other hand over it, and pull sharply in and up, up to five times.",
    },
    {
      caption:
        "Keep alternating until the object comes out or they become unresponsive. If they collapse, start CPR.",
    },
  ],
  getHelp: [
    "Always call emergency services if they can't breathe, or become unresponsive.",
    "Anyone who received abdominal thrusts should be checked by a medical professional afterward, even if they seem fine.",
    "A cough, wheeze or trouble swallowing persists after the object is out.",
  ],
  tags: ["first-aid", "emergency"],
  related: ["recovery-position"],
  status: "draft",
  order: 9,
});
