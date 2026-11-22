import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "starting-seeds-indoors",
  category: "garden",
  title: "Starting seeds indoors",
  aka: ["Seed starting", "Grow lights", "Hardening off", "Damping off", "Transplants"],
  kind: "planting",
  season: "6–10 weeks before last spring frost",
  summary:
    "Get a head start on long-season crops with bright light, gentle warmth and careful watering, then toughen them up before planting out.",
  key: "Light is what most indoor seedlings lack. Leggy, floppy stems mean they need more of it, closer.",
  body: [
    "Tomatoes are usually started 6–8 weeks before the last frost, peppers and eggplant 8–10. Squash and cucumbers grow so fast that 3–4 weeks is plenty, or sow them outdoors.",
    "A sunny windowsill rarely gives enough light. Inexpensive LED shop lights hung a few inches above the seedlings for 14–16 hours a day work well.",
  ],
  gear: [
    "Seed-starting mix (not garden soil)",
    "Cells or small pots with drainage",
    "Tray for bottom watering",
    "Grow light and a timer",
    "Small fan",
  ],
  steps: [
    {
      caption:
        "Fill cells with damp seed-starting mix and sow at the packet depth, two seeds per cell.",
    },
    {
      caption:
        "Keep warm and covered until they sprout, then uncover and put them under lights straight away.",
    },
    {
      caption:
        "Water from below and let the surface dry slightly between waterings, to prevent damping off (seedlings collapsing at the soil line).",
    },
    {
      caption: "Run a fan on them gently for a few hours a day; the movement makes sturdier stems.",
    },
    {
      caption:
        "Snip the weaker seedling in each cell. Pot up into bigger containers if roots fill the cell.",
    },
    {
      caption:
        "Harden off over 7–10 days: a few hours outdoors in shade at first, building up to full sun and nights out, before transplanting.",
    },
  ],
  uses: ["Tomatoes, peppers, eggplant", "Onions and leeks", "Flowers and herbs"],
  tags: ["seeds", "planting"],
  related: ["sowing-seeds", "frost-dates", "hardiness-zones"],
  status: "draft",
  order: 7,
});
