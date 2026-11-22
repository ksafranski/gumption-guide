import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "stop-bleeding",
  category: "first-aid",
  title: "Stopping bleeding",
  aka: ["Direct pressure", "Bleeding control", "Cuts"],
  summary: "Press hard on the wound and keep pressing until the bleeding stops or help arrives.",
  key: "Firm, steady, direct pressure. Don't peek.",
  gear: ["Gloves if you have them", "Gauze or a clean cloth", "Bandage"],
  steps: [
    { caption: "Put on gloves if you have them." },
    { caption: "Press a pad or clean cloth firmly onto the wound." },
    { caption: "Keep steady pressure. Don't lift it to check." },
    { caption: "If blood soaks through, add more on top. Don't remove the first pad." },
    {
      caption:
        "Once it stops, bandage the pad in place firmly but not so tight it cuts off circulation.",
    },
  ],
  getHelp: [
    "Blood is spurting or pooling.",
    "It won't stop with firm pressure.",
    "The wound is deep, gaping, or has something stuck in it.",
    "The person feels faint, pale, cold or confused.",
  ],
  tags: ["first-aid", "bleeding"],
  related: ["minor-burn"],
  status: "draft",
  order: 2,
});
