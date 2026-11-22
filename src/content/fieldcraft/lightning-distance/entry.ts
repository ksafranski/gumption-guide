import { defineEntry } from "@/content/schema";

export default defineEntry({
  id: "lightning-distance",
  category: "fieldcraft",
  title: "Lightning distance & safety",
  aka: ["Flash to bang", "30-30 rule", "Thunderstorm safety", "Lightning crouch"],
  difficulty: "easy",
  summary:
    "Count from flash to thunder to judge distance. If you can hear thunder, you're within reach.",
  key: "Seconds ÷ 3 = kilometres, ÷ 5 = miles. Under 30 seconds: get to shelter.",
  steps: [
    { caption: "At the flash, start counting seconds until you hear the thunder." },
    {
      caption:
        "Divide by 3 for kilometres or by 5 for miles. Sound covers about 1 km in 3 seconds.",
    },
    {
      caption:
        "Under 30 seconds (about 10 km / 6 mi), move to shelter now: a building or a hard-topped vehicle.",
    },
    { caption: "Wait 30 minutes after the last thunder before going back out." },
    {
      caption:
        "Caught out: get off peaks, ridges and open ground; away from lone trees, water and metal fences. Spread a group out so one strike can't hit everyone.",
    },
  ],
  safety: [
    "No place outdoors is safe in a thunderstorm. Tents, picnic shelters and tree cover don't protect you.",
    "Plan mountain days to be off high ground by early afternoon in storm season.",
    "Someone struck by lightning carries no charge and is safe to touch. Call emergency services and start CPR if they aren't breathing.",
  ],
  tags: ["weather", "emergency"],
  related: ["choose-a-campsite", "speed", "signal-for-help"],
  sources: [
    {
      title: "NOAA/National Weather Service: Lightning safety",
      url: "https://www.weather.gov/safety/lightning",
    },
  ],
  status: "draft",
  order: 16,
});
