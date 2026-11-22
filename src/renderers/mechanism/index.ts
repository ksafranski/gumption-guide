import type { MechanismEntry } from "@/content/schema";
import type { Renderer } from "../types";
import { MechanismLive } from "./Live";
import { MechanismPrint } from "./Print";
import { MechanismThumb } from "./Thumb";

export const mechanism: Renderer<MechanismEntry> = {
  Live: MechanismLive,
  Print: MechanismPrint,
  Thumb: MechanismThumb,
};
