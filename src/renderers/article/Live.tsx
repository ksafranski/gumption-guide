import type { ArticleEntry } from "./types";
import s from "./article.module.css";

/** Steps, gear and safety for article-style entries. The MDX body is rendered by the page. */
export function ArticleLive({ entry }: { entry: ArticleEntry }) {
  return (
    <div className={s.article}>
      {"reference" in entry && entry.reference?.length ? (
        <section>
          <h3>At a glance</h3>
          <dl className={s.ref}>
            {entry.reference.map((r) => (
              <div key={r.term}>
                <dt>{r.term}</dt>
                <dd>{r.detail}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}
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
      {"getHelp" in entry ? (
        <section className={s.safety}>
          <h3>Get help now if</h3>
          <ul>
            {entry.getHelp.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      ) : null}
      {"safety" in entry && entry.safety?.length ? (
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
