import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "spur-gears",
  category: "mechanisms",
  title: "Spur gears",
  aka: ["Gear pair", "Cog wheels", "Gear train"],
  motion: "rot-rot",
  family: "gears",
  summary:
    "Two toothed wheels pass rotation between parallel shafts, reversing direction and trading speed for force.",
  body: [
    "Teeth on the driver push teeth on the driven gear, so their pitch circles roll against each other without slipping.",
    'The speed ratio is the tooth-count ratio. Here 12 teeth drive 20, so the output turns 0.6× as fast — with about 1.67× the torque — in the opposite direction. Put a third "idler" gear between them to keep the direction the same.',
  ],
  key: "Speed ratio = driver teeth ÷ driven teeth.",
  uses: ["Clocks", "Gearboxes", "Hand drills", "Kitchen mixers", "Bicycle hubs"],
  tags: ["gearing", "speed-ratio"],
  related: ["rack-pinion", "belt-drive"],
  outLabel: "Output gear angle",
  status: "reviewed",
  order: 1,
});
