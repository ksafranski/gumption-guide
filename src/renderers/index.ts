import type { RendererId } from "@/content/categories";
import type { Entry } from "@/content/schema";
import { article } from "./article";
import { knot } from "./knot";
import { mechanism } from "./mechanism";
import type { Renderer } from "./types";
import { units } from "./units";

export const renderers = { mechanism, knot, units, article } as unknown as Record<
  RendererId,
  Renderer<Entry>
>;
