import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "furnace-filter",
  category: "home",
  title: "Change a furnace filter",
  aka: ["HVAC filter", "Air filter", "Air handler filter", "MERV rating", "Return vent filter"],
  kind: "repair",
  difficulty: "easy",
  summary:
    "The filter protects the furnace or air handler from dust. A clogged one starves the system of air and costs money.",
  key: "Match the size printed on the old filter's edge, and point the airflow arrow toward the furnace.",
  body: [
    "Check it monthly at first to learn how fast it loads up; pets, renovation dust and heavy use all shorten its life. Hold it to the light: if you can't see through it, change it.",
    "Higher MERV filters catch finer particles but also resist airflow. Very fine filters can strain some older systems; if in doubt, use what the equipment's manual recommends.",
  ],
  reference: [
    {
      term: "Size",
      detail:
        "Printed on the frame: width × height × depth in inches, e.g. 16×25×1. Nominal, not exact.",
    },
    {
      term: "Airflow arrow",
      detail: "Points in the direction the air moves: away from the return, toward the blower.",
    },
    {
      term: "MERV",
      detail: "Rating of how fine a filter catches. Higher catches more and restricts more.",
    },
    {
      term: "Location",
      detail: "In a slot by the furnace, or behind a return grille in a wall or ceiling.",
    },
  ],
  steps: [
    { caption: "Switch the system off at the thermostat." },
    { caption: "Slide out the old filter, noting the arrow direction and the size." },
    {
      caption:
        "Slide in the new one with the arrow toward the furnace, and close any access cover.",
    },
    { caption: "Write the date on the frame and turn the system back on." },
  ],
  uses: ["Heating and cooling season", "Dusty houses", "Pets and allergies"],
  tags: ["home-safety", "care"],
  related: ["smoke-co-alarms", "water-heater-basics"],
  status: "draft",
  order: 25,
});
