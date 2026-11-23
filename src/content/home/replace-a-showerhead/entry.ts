import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "replace-a-showerhead",
  category: "home",
  title: "Replace a showerhead",
  aka: ["Change shower head", "Shower arm", "Low-flow showerhead", "Clean a clogged showerhead"],
  kind: "plumbing",
  difficulty: "easy",
  summary:
    "A showerhead unscrews from the shower arm by hand or with a wrench. Fresh thread tape and hand-tight is usually enough.",
  key: "Hold the shower arm still while you turn the head, so you don't loosen the fitting inside the wall.",
  body: [
    "Weak spray from a good head is usually mineral scale. Soak the face in white vinegar for a few hours (a bag tied around it works) and brush the nozzles before you replace anything.",
    "Most showerheads have a rubber washer that does the sealing; the tape just helps the threads. Check the washer is in place before you install.",
  ],
  gear: [
    "New showerhead",
    "Thread tape",
    "Adjustable wrench and a rag to pad it",
    "Old toothbrush",
  ],
  steps: [
    {
      caption:
        "Unscrew the old head counterclockwise. If it's tight, pad the nut with a rag and use a wrench while holding the arm.",
    },
    { caption: "Clean old tape and scale off the arm's threads." },
    { caption: "Wrap new thread tape clockwise, two or three turns." },
    {
      caption:
        "Check the new head's washer, thread it on by hand, and snug it. Run the water and tighten a little more only if it drips.",
    },
  ],
  uses: ["Upgrading a showerhead", "Weak or uneven spray", "Leaks at the arm"],
  tags: ["plumbing", "water", "fittings"],
  related: ["thread-tape", "flow-rate", "fix-a-dripping-faucet"],
  status: "draft",
  order: 23,
});
