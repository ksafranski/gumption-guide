import type { UnitsEntry } from "@/content/schema";
import type { Renderer } from "../types";
import { UnitsLive } from "./Live";
import { UnitsPrint } from "./Print";
import { UnitsThumb } from "./Thumb";

export const units: Renderer<UnitsEntry> = {
  Live: UnitsLive,
  Print: UnitsPrint,
  Thumb: UnitsThumb,
};
