import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "recovery-position",
  category: "first-aid",
  title: "Recovery position",
  aka: ["Side position", "Unconscious but breathing"],
  summary:
    "Roll an unresponsive person who is breathing onto their side so their airway stays clear.",
  key: "Breathing but not responding: on their side, head tilted back, keep checking.",
  steps: [
    { caption: "Check they're breathing normally. If not, call emergency services and start CPR." },
    { caption: "Kneel beside them. Put the arm nearest you out at a right angle, palm up." },
    {
      caption:
        "Bring the far arm across the chest and hold the back of that hand against their near cheek.",
    },
    {
      caption:
        "Bend the far knee up, foot flat. Pull on that knee to roll them toward you onto their side.",
    },
    {
      caption:
        "Adjust the top leg so hip and knee are at right angles, stopping them rolling forward.",
    },
    {
      caption:
        "Tilt the head back gently to open the airway. Call for help and keep checking breathing.",
    },
  ],
  getHelp: [
    "Always: an unresponsive person needs emergency services.",
    "Breathing stops or becomes abnormal: roll them onto their back and start CPR.",
    "If you suspect a neck or back injury, only move them if you must to keep the airway clear.",
  ],
  tags: ["first-aid", "emergency"],
  related: ["hypothermia", "heat-exhaustion", "signal-for-help"],
  status: "draft",
  order: 16,
});
