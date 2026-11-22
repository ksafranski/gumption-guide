import type { FieldcraftEntry } from "@/content/schema";
import type { Renderer } from "../types";
import { ArticleLive } from "./Live";
import { ArticleThumb } from "./Thumb";

export const article: Renderer<FieldcraftEntry> = {
  Live: ArticleLive,
  Print: ArticleLive,
  Thumb: ArticleThumb,
};
