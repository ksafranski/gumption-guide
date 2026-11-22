import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "torque",
  category: "units",
  title: "Torque",
  aka: ["Foot-pounds", "Newton-metres", "Inch-pounds", "Tightening torque"],
  quantity: "torque",
  summary: "Turning force: the push on a handle times the distance from the pivot.",
  key: "Torque = force × lever length. 1 ft·lbf ≈ 1.36 N·m.",
  body: [
    "A longer handle gives the same torque for less push, which is why a breaker bar frees what a short wrench won't. A torque wrench measures it so you can hit a spec instead of guessing.",
  ],
  units: [
    { id: "nm", name: "Newton-metre", symbol: "N·m", toBase: 1 },
    { id: "inlbf", name: "Inch-pound-force", symbol: "in·lbf", toBase: 0.1129848290276167 },
    { id: "ftlbf", name: "Foot-pound-force", symbol: "ft·lbf", toBase: 1.3558179483314004 },
    { id: "kgfm", name: "Kilogram-force metre", symbol: "kgf·m", toBase: 9.80665 },
  ],
  rulesOfThumb: [
    "50 lbf on the end of a 1 ft wrench is 50 ft·lbf. Twice the handle, half the push.",
    "10 N·m ≈ 7.4 ft·lbf ≈ 89 in·lbf.",
    "12 in·lbf = 1 ft·lbf. Small fasteners are often specified in in·lbf, so check which.",
    "Specs usually assume clean, dry threads. Oil or anti-seize means the same torque clamps harder.",
  ],
  uses: ["Wheel lug nuts", "Bike and engine fasteners", "Choosing a wrench or driver"],
  tags: ["mechanical-advantage", "measuring"],
  related: ["force", "lead-screw", "bell-crank"],
  status: "draft",
  order: 8,
});
