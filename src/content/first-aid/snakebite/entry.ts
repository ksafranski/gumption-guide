import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "snakebite",
  category: "first-aid",
  title: "Snakebite",
  aka: ["Rattlesnake bite", "Venomous bite", "Envenomation"],
  summary: "Get away from the snake, keep the person still and calm, and get to medical care fast.",
  key: "Call for help, keep still, remove rings. No cutting, sucking, ice or tourniquets.",
  gear: ["Phone or satellite messenger", "Pen to mark swelling and time"],
  steps: [
    {
      caption:
        "Move away from the snake. Don't try to catch or kill it; a photo from a distance is enough.",
    },
    { caption: "Call emergency services. Treat every bite from an unknown snake as venomous." },
    { caption: "Keep the person still and calm. Movement spreads venom." },
    { caption: "Take off rings, watches and tight clothing before swelling starts." },
    {
      caption:
        "Keep the bitten limb still, in a comfortable position, below heart level if possible.",
    },
    {
      caption:
        "Mark the edge of swelling with a pen and the time, every 15 minutes or so, for the medical team.",
    },
  ],
  getHelp: [
    "Always, for any bite from a snake that may be venomous, even if it doesn't hurt much at first.",
    "Trouble breathing, swelling face or throat, drooping eyelids, confusion: tell the dispatcher.",
  ],
  tags: ["first-aid", "bites-and-stings", "wildlife", "emergency"],
  related: ["bee-sting", "tick-removal", "signal-for-help"],
  status: "draft",
  order: 13,
});
