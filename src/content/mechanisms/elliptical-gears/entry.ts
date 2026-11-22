import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "elliptical-gears",
  category: "mechanisms",
  title: "Elliptical gears",
  aka: ["Elliptic gears", "Non-circular gears", "Variable-speed gears"],
  motion: "rot-rot",
  family: "gears",
  summary:
    "Two identical ellipses, each pivoted at a focus, roll together so a steady input gives a speeding-up, slowing-down output.",
  body: [
    "Pivoting each ellipse at a focus makes their radii at the contact point always add up to the same distance, so they roll against each other without gaps. (Real versions carry teeth; here the pitch curves are drawn.)",
    "When the driver's long side meets the driven gear's short side, the output races; half a turn later it crawls. Over one revolution they even out. The graph bends instead of running straight.",
  ],
  key: "Equal ellipses on their foci roll perfectly; the speed ratio varies through each turn.",
  uses: ["Quick-return presses", "Flow meters", "Printing presses", "Bicycle chainrings (oval)"],
  tags: ["gearing"],
  related: ["spur-gears", "quick-return"],
  outLabel: "Driven angle",
  status: "reviewed",
  order: 32,
});
