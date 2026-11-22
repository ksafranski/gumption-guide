import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "read-contours",
  category: "fieldcraft",
  title: "Reading contour lines",
  aka: ["Topo map", "Topographic map", "Contour interval"],
  difficulty: "moderate",
  summary:
    "Each contour line joins points of equal height. Their spacing and shape show the ground.",
  key: "Close lines are steep, far apart is gentle. V's along a stream point uphill.",
  steps: [
    { caption: "Find the contour interval in the map legend: the height between each line." },
    {
      caption: "Find the index lines: every fifth line, drawn darker and labelled with its height.",
    },
    { caption: "Tight lines mean a steep slope. Lines merging into one mean a cliff." },
    { caption: "Closed rings are hilltops. Rings with tick marks pointing inward are hollows." },
    {
      caption:
        "V shapes pointing uphill are valleys and streams. V's or U's pointing downhill are ridges and spurs.",
    },
    { caption: "A saddle sits between two rings, where the lines pinch in like an hourglass." },
  ],
  uses: [
    "Route planning",
    "Judging how hard a climb will be",
    "Finding sheltered ground and water",
  ],
  tags: ["navigation"],
  related: ["pace-count", "find-north", "choose-a-campsite"],
  status: "draft",
  order: 10,
});
