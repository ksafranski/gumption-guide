import type { FieldcraftEntry } from "@/content/schema";
import s from "./article.module.css";

/** Steps, gear and safety for article-style entries. The MDX body is rendered by the page. */
export function ArticleLive({ entry }: { entry: FieldcraftEntry }) {
  return (
    <div className={s.article}>
      {entry.gear?.length ? (
        <section className={s.gear}>
          <h3>Kit</h3>
          <ul>
            {entry.gear.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {entry.steps?.length ? (
        <section>
          <h3>Steps</h3>
          <ol className={s.steps}>
            {entry.steps.map((st, i) => (
              <li key={i}>{st.caption}</li>
            ))}
          </ol>
        </section>
      ) : null}
      {entry.safety?.length ? (
        <section className={s.safety}>
          <h3>Safety</h3>
          <ul>
            {entry.safety.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
