import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "inch-fractions",
  category: "units",
  title: "Inch fractions to millimetres",
  aka: ["Fractional inches", "Sixteenths", "Drill bit sizes", "Wrench sizes", "SAE to metric"],
  quantity: "length",
  summary:
    "Drill bits, wrenches and lumber are sized in eighths, sixteenths and sixty-fourths of an inch. Convert by the count.",
  key: "1/16 in ≈ 1.6 mm. Count the sixteenths and multiply: 5/16 ≈ 5 × 1.6 = 8 mm.",
  body: [
    "Enter the number of sixteenths (or eighths, thirty-seconds, sixty-fourths) and read off millimetres. 3/8 in is six sixteenths: 9.5 mm.",
  ],
  units: [
    { id: "mm", name: "Millimetre", symbol: "mm", toBase: 1 },
    { id: "in", name: "Inch", symbol: "in", toBase: 25.4 },
    { id: "eighth", name: "Eighths of an inch", symbol: "/8 in", toBase: 3.175 },
    { id: "sixteenth", name: "Sixteenths of an inch", symbol: "/16 in", toBase: 1.5875 },
    { id: "thirty-second", name: "Thirty-seconds of an inch", symbol: "/32 in", toBase: 0.79375 },
    { id: "sixty-fourth", name: "Sixty-fourths of an inch", symbol: "/64 in", toBase: 0.396875 },
  ],
  rulesOfThumb: [
    "1/8 in ≈ 3.2 mm, 1/4 in ≈ 6.4 mm, 3/8 in ≈ 9.5 mm, 1/2 in = 12.7 mm, 3/4 in ≈ 19 mm.",
    "Close wrench swaps: 19 mm for 3/4 in is a near-perfect fit; 13 mm on 1/2 in is a little loose.",
    "Don't force a near-miss wrench on a tight bolt; it rounds the corners. Use the right one.",
  ],
  uses: [
    "Drill bits and pilot holes",
    "Wrenches and sockets",
    "Reading US plans with a metric rule",
  ],
  tags: ["measuring", "fasteners"],
  related: ["length", "thread-sizes", "drill-bits", "bolt-types"],
  status: "draft",
  order: 18,
});
