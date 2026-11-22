import Link from "next/link";
import { CATEGORIES } from "@/content/categories";
import { getAllTags, getByCategory, getByTag } from "@/lib/content";
import { EntryCard } from "@/components/EntryCard";
import { LegacyRedirect } from "@/components/LegacyRedirect";
import s from "./home.module.css";

const FEATURED = ["truckers-hitch", "differential-windlass", "force", "bowline"];

export default function Home() {
  const tags = getAllTags()
    .map((t) => ({ t, n: getByTag(t).length }))
    .filter((x) => x.n > 1);
  return (
    <div className="wrap">
      <LegacyRedirect />
      <section className={s.hero}>
        <p className="label">Field manual · No. 1</p>
        <h1>
          Know how it works.
          <br />
          <span>Then make it work for you.</span>
        </h1>
        <p className={s.lede}>
          Mechanisms, knots, measures and fieldcraft. Short, practical, cross-referenced. The
          principle and the rule of thumb, not the whole recipe.
        </p>
      </section>

      <section className={s.drawers} aria-label="Categories">
        {CATEGORIES.map((c) => {
          const list = getByCategory(c.id);
          return (
            <Link key={c.id} href={`/${c.id}`} className={s.drawer} data-cat={c.id}>
              <span className={s.count}>{list.length} entries</span>
              <h2>{c.title}</h2>
              <p>{c.blurb}</p>
              <ul>
                {list.slice(0, 4).map((e) => (
                  <li key={e.id}>{e.title}</li>
                ))}
              </ul>
            </Link>
          );
        })}
      </section>

      <section className={s.section}>
        <h2 className={s.h}>One idea, many places</h2>
        <p className={s.sub}>
          <Link href="/tags/mechanical-advantage">Mechanical advantage</Link> shows up in a winch, a
          knot and a unit of force. Follow the tags.
        </p>
        <div className="grid">
          {FEATURED.map((id) => {
            const e = CATEGORIES.flatMap((c) => getByCategory(c.id)).find((x) => x.id === id);
            return e ? <EntryCard key={id} entry={e} showCategory /> : null;
          })}
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.h}>Tags</h2>
        <ul className={s.tags}>
          {tags.map(({ t, n }) => (
            <li key={t}>
              <Link href={`/tags/${t}`}>
                #{t} <span>{n}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
