import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "force",
  category: "units",
  title: "Force & load",
  aka: ["Pounds-force", "Newtons", "Kilograms-force", "Working load"],
  quantity: "force",
  summary: "Push, pull and hanging weight in newtons, pounds-force and kilograms-force.",
  key: "A 1 kg mass hangs with about 10 N (9.8 N) of force.",
  body: [
    "Pulleys and purchase systems multiply force but not work: what you gain in force you pay back in distance pulled. Friction takes a cut at every turn of rope.",
  ],
  units: [
    { id: "n", name: "Newton", symbol: "N", toBase: 1 },
    { id: "kn", name: "Kilonewton", symbol: "kN", toBase: 1000 },
    { id: "lbf", name: "Pound-force", symbol: "lbf", toBase: 4.4482216152605 },
    { id: "kgf", name: "Kilogram-force", symbol: "kgf", toBase: 9.80665 },
  ],
  rulesOfThumb: [
    "1 kN ≈ 100 kgf ≈ 225 lbf.",
    "1 kgf ≈ 2.2 lbf.",
    "A 3:1 purchase turns a 50 lbf pull into roughly 150 lbf on the load, minus friction.",
  ],
  uses: ["Rope and strap ratings", "Hoists and winches", "Tie-down tension"],
  tags: ["mechanical-advantage", "measuring"],
  related: ["block-tackle"],
  status: "draft",
  order: 2,
});
