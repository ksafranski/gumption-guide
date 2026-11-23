import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "find-a-dead-outlet",
  category: "home",
  title: "Find why an outlet is dead",
  aka: ["Outlet not working", "No power to outlet", "Dead receptacle", "Half the outlets are out"],
  kind: "electrical",
  difficulty: "easy",
  summary:
    "Most dead outlets are a tripped GFCI somewhere else, a tripped breaker, or a wall switch, in that order.",
  key: "Check every GFCI in the house before you open anything. They protect outlets in other rooms too.",
  body: [
    "A GFCI in the garage, a bathroom, outside or by the kitchen sink can feed other outlets downstream. A dead bathroom outlet is often fed by a GFCI in a different bathroom.",
    "If one outlet on a run is dead and those after it too, the fault is usually a loose wire at the last working outlet or the first dead one. That's a job with the power off and the box opened.",
  ],
  steps: [
    { caption: "Plug in a lamp or tester you know works, and try both sockets." },
    {
      caption:
        "Look for a wall switch that might control it; half-switched outlets are common in living rooms and bedrooms.",
    },
    {
      caption:
        "Press RESET on every GFCI outlet in the house, including garage, bathrooms, outdoors and basement.",
    },
    {
      caption:
        "Check the panel for a tripped breaker, including GFCI and AFCI breakers with test buttons.",
    },
    {
      caption:
        "Still dead: switch off the breaker, prove it dead, and check the outlet and its neighbors for a loose or burnt connection.",
    },
  ],
  safety: [
    "Scorch marks, a burning smell or a warm cover plate mean stop and call an electrician.",
    "Don't keep resetting a breaker or GFCI that trips again immediately.",
  ],
  uses: ["Dead bathroom, garage or outdoor outlets", "Half a room without power"],
  tags: ["electrical", "outlets"],
  related: ["gfci-afci", "circuit-breakers", "replace-an-outlet", "test-for-voltage"],
  status: "draft",
  order: 9,
});
