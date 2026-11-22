import type { FieldcraftEntry } from "@/content/schema";
import s from "./article.module.css";

export function ArticleThumb({ entry }: { entry: FieldcraftEntry }) {
  return (
    <div className={s.thumb} aria-hidden="true">
      <ol>
        {(entry.steps ?? []).slice(0, 4).map((st, i) => (
          <li key={i}>{st.caption}</li>
        ))}
      </ol>
    </div>
  );
}
