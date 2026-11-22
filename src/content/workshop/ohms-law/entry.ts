import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "ohms-law",
  category: "workshop",
  title: "Ohm's law & power",
  aka: ["V = IR", "Volts amps ohms", "Watts", "P = VI", "LED resistor"],
  kind: "electronics",
  difficulty: "easy",
  summary:
    "Voltage pushes, resistance resists, current is what flows: V = I × R. Power is volts times amps.",
  key: "Cover the one you want: V = I × R, I = V ÷ R, R = V ÷ I. Watts = volts × amps.",
  body: [
    "Water-pipe picture: voltage is pressure, current is flow rate, resistance is how narrow the pipe is. It's not exact, but it gets the directions right.",
    "LED example: a red LED drops about 2 V and is happy at around 20 mA. On a 5 V supply the resistor has to drop the other 3 V: 3 ÷ 0.02 = 150 Ω. Round up to the next stock value.",
    "Power tells you what a circuit can handle. A 15 A circuit at 120 V carries 1,800 W; a 1,500 W space heater takes most of it.",
  ],
  reference: [
    { term: "Volt (V)", detail: "Electrical pressure. Battery, outlet, supply." },
    { term: "Amp (A)", detail: "Flow of charge. What breakers and fuses limit." },
    { term: "Ohm (Ω)", detail: "Resistance. Resistors, wire, heating elements." },
    { term: "Watt (W)", detail: "Power: V × A. Also I² × R, which is why thin wire runs hot." },
  ],
  uses: ["Sizing LED resistors", "Checking circuit loads", "Choosing a power supply"],
  tags: ["electronics", "power"],
  related: ["multimeter-basics", "wire-gauge", "power"],
  status: "draft",
  order: 6,
});
