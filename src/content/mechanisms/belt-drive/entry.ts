import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "belt-drive",
  category: "mechanisms",
  title: "Belt & pulleys",
  aka: ["Open belt drive", "Pulley drive", "Flat belt"],
  motion: "rot-rot",
  family: "belts",
  summary:
    "A loop of belt links two pulleys, carrying rotation across a distance in the same direction.",
  body: [
    "The belt moves at the same surface speed over both pulleys, so the speed ratio is the diameter ratio: the large pulley here turns the small one about 1.7× faster.",
    "Crossing the belt into a figure-eight reverses the direction. A belt can slip under overload, which protects the machine — or, with teeth added, it can be made not to.",
  ],
  key: "Speed ratio = driver diameter ÷ driven diameter.",
  uses: [
    "Car engine accessories",
    "Lathes",
    "Vacuum cleaners",
    "3D printers",
    "Line-shaft workshops",
  ],
  tags: ["pulley", "speed-ratio", "circumference"],
  related: ["spur-gears"],
  outLabel: "Small pulley angle",
  status: "reviewed",
  order: 4,
});
