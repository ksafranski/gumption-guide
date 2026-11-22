import type {
  BuildingEntry,
  FieldcraftEntry,
  FirstAidEntry,
  GardenEntry,
  HomeEntry,
  WorkshopEntry,
} from "@/content/schema";

/** Categories drawn as an illustrated article: kit, steps and warnings. */
export type ArticleEntry =
  FieldcraftEntry | FirstAidEntry | BuildingEntry | GardenEntry | HomeEntry | WorkshopEntry;
