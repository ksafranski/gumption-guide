import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "bee-sting",
  category: "first-aid",
  title: "Bee and wasp stings",
  aka: ["Insect sting", "Stinger", "Allergic reaction"],
  summary:
    "Get the stinger out fast, wash, and cool it. Watch for a reaction beyond the sting site.",
  key: "Scrape the stinger out sideways. Trouble breathing means call for help right now.",
  gear: ["A card or fingernail to scrape with", "Soap and water", "Cold pack or cold cloth"],
  steps: [
    { caption: "Move away from the nest or hive." },
    {
      caption:
        "If a stinger is left in the skin, scrape it out sideways with a card or fingernail. Do it quickly.",
    },
    { caption: "Wash with soap and water." },
    { caption: "Hold something cold on it for 10 minutes or more, and raise the area if you can." },
    { caption: "Take off rings and bracelets near the sting before it swells." },
  ],
  getHelp: [
    "Any trouble breathing, wheezing, a swollen face, lips, tongue or throat, dizziness or fainting. Call emergency services, and use their epinephrine auto-injector if they carry one.",
    "Hives or swelling spreading away from the sting.",
    "Stung in the mouth or throat, or many times.",
    "Swelling and redness keep growing after a day or two.",
  ],
  tags: ["first-aid", "bites-and-stings"],
  related: ["tick-removal", "splinter"],
  status: "draft",
  order: 8,
});
