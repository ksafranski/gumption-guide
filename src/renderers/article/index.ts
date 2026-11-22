import type { ArticleEntry } from "./types";
import type { Renderer } from "../types";
import { ArticleLive } from "./Live";
import { ArticleThumb } from "./Thumb";

export const article: Renderer<ArticleEntry> = {
  Live: ArticleLive,
  Print: ArticleLive,
  Thumb: ArticleThumb,
};
