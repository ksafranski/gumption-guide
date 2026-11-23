import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "smoke-co-alarms",
  category: "home",
  title: "Smoke & CO alarms",
  aka: ["Smoke detector", "Carbon monoxide detector", "Chirping smoke alarm", "Test smoke alarm"],
  kind: "repair",
  difficulty: "easy",
  summary:
    "Test every alarm monthly, change batteries when they chirp, and replace whole units by the date printed on them.",
  key: "A chirp every minute or so is the low-battery or end-of-life signal. Press TEST to find out which.",
  body: [
    "Alarms wear out. Each one has a manufacture or replace-by date on the back; many smoke alarms are meant to be replaced about ten years after manufacture, and CO alarms often sooner. Follow what the label says.",
    "Smoke alarms belong in every bedroom, outside each sleeping area and on every level. CO alarms belong near sleeping areas and on every level in any home with fuel-burning appliances or an attached garage. Local rules may require more.",
  ],
  reference: [
    {
      term: "Ionization smoke alarm",
      detail: "Quicker to flaming fires. More prone to nuisance alarms from cooking.",
    },
    {
      term: "Photoelectric smoke alarm",
      detail: "Quicker to smoldering fires. Better near kitchens and bathrooms.",
    },
    { term: "Combination", detail: "Both sensors, or smoke plus CO, in one unit." },
    { term: "Interconnected", detail: "When one sounds, they all sound. Hardwired or wireless." },
    {
      term: "Sealed 10-year battery",
      detail: "No battery changes; replace the whole unit at end of life.",
    },
  ],
  steps: [
    { caption: "Press and hold TEST on each alarm once a month until it sounds." },
    {
      caption:
        "Chirping: replace the battery with the type printed on the alarm. Hardwired units have a backup battery too.",
    },
    { caption: "Still chirping, or past its date: replace the unit with a compatible model." },
    { caption: "Vacuum the vents gently once or twice a year to clear dust and insects." },
  ],
  safety: [
    "If a CO alarm sounds, get everyone outside into fresh air and call emergency services or the gas company. Don't just silence it.",
    "Never remove a battery to stop a nuisance alarm without putting a new one in straight away.",
  ],
  uses: ["Monthly checks", "Chirping alarms", "Moving into a new home"],
  tags: ["home-safety", "fire", "electrical"],
  related: ["circuit-breakers", "water-heater-basics"],
  status: "draft",
  order: 24,
});
