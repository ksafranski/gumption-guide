import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "angle",
  category: "units",
  title: "Angle",
  aka: ["Degrees", "Radians", "Mils", "Gradians", "Minutes of arc", "Slope"],
  quantity: "angle",
  summary: "Degrees, radians, mils and gradians, plus how to measure angles with your hand.",
  key: "At arm's length a fist covers about 10° and a finger about 2°.",
  body: [
    "Slope as a percent is rise over run, not an angle: 100% is 45°, and a vertical wall is infinite percent. For gentle slopes, degrees ≈ percent × 0.57.",
    "Military and artillery mils divide a circle into 6,400. One mil is very close to 1 m of width seen at 1 km, which makes quick range and size estimates easy.",
  ],
  units: [
    { id: "deg", name: "Degree", symbol: "°", toBase: Math.PI / 180 },
    { id: "rad", name: "Radian", symbol: "rad", toBase: 1 },
    { id: "grad", name: "Gradian", symbol: "gon", toBase: Math.PI / 200 },
    { id: "mil", name: "Mil (NATO, 6400/turn)", symbol: "mil", toBase: (2 * Math.PI) / 6400 },
    { id: "arcmin", name: "Minute of arc", symbol: "′", toBase: Math.PI / 10800 },
    { id: "arcsec", name: "Second of arc", symbol: "″", toBase: Math.PI / 648000 },
    { id: "turn", name: "Turn", symbol: "turn", toBase: 2 * Math.PI },
  ],
  rulesOfThumb: [
    "Arm's length: little finger ≈ 1°, three middle fingers ≈ 5°, fist ≈ 10°, spread hand ≈ 20°.",
    "1 MOA (minute of angle) is about 1 in at 100 yd, or 3 cm at 100 m.",
    "A 1:12 ramp is about 4.8°; a 1:1 slope is 45°.",
    "A radian is about 57.3°.",
  ],
  uses: [
    "Compass and map work",
    "Roof pitch and ramp slope",
    "Scopes and sights",
    "Saw and miter settings",
  ],
  tags: ["measuring", "navigation"],
  related: ["daylight-left", "measure-tree-height", "thumb-distance"],
  status: "draft",
  order: 11,
});
