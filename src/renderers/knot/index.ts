import type { KnotEntry } from "@/content/schema";
import type { Renderer } from "../types";
import { KnotLive } from "./Live";
import { KnotPrint } from "./Print";
import { KnotThumb } from "./Thumb";

export const knot: Renderer<KnotEntry> = { Live: KnotLive, Print: KnotPrint, Thumb: KnotThumb };
