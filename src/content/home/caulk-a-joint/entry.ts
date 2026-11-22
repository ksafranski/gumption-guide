import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "caulk-a-joint",
  category: "home",
  title: "Caulk a joint",
  aka: ["Silicone", "Sealant", "Recaulk a tub", "Caulking gun", "Bead of caulk"],
  kind: "repair",
  difficulty: "easy",
  summary:
    "Caulk seals gaps that move, like tub to tile or trim to wall. It only lasts on a clean, dry joint.",
  key: "Cut the nozzle small. You can always run a second bead; you can't take one back.",
  body: [
    "New caulk doesn't stick to old caulk, soap scum or mildew. Removing the old bead completely is most of the job.",
    "Fill a tub with water before caulking it. The weight opens the joint to its widest, so the bead isn't stretched when the tub is in use.",
  ],
  reference: [
    {
      term: "100% silicone",
      detail: "Wet areas: tubs, showers, sinks. Flexible and long-lasting; can't be painted.",
    },
    { term: "Acrylic latex", detail: "Trim, baseboards, gaps you'll paint. Cleans up with water." },
    {
      term: "Siliconized acrylic",
      detail: "A paintable middle ground for kitchens and window trim.",
    },
    {
      term: "Polyurethane",
      detail: "Outdoors: concrete, siding, gutters. Tough and sticky; paintable.",
    },
  ],
  gear: ["Caulk and gun", "Utility knife and scraper", "Rubbing alcohol", "Painter's tape", "Rags"],
  steps: [
    {
      caption:
        "Cut and scrape out all the old caulk. Clean with alcohol and let it dry completely.",
    },
    { caption: "Run painter's tape along both sides of the joint for a crisp line (optional)." },
    {
      caption:
        "Cut the nozzle at 45°, smaller than the gap. Push the bead ahead of the nozzle in one steady pass.",
    },
    {
      caption:
        "Smooth with a wet fingertip or tool, pull the tape while the caulk is wet, and leave it to cure.",
    },
  ],
  uses: ["Tubs and showers", "Kitchen backsplash", "Window and door trim"],
  tags: ["repair", "water"],
  related: ["patch-drywall", "glue-types"],
  status: "draft",
  order: 20,
});
