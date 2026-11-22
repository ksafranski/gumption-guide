import Link from "next/link";
import { CATEGORIES } from "@/content/categories";
import { getAllTags, getByCategory, getByTag } from "@/lib/content";
import { LegacyRedirect } from "@/components/LegacyRedirect";
import { RandomPicks } from "@/components/RandomPicks";
import s from "./home.module.css";

export default function Home() {
  const tags = getAllTags()
    .map((t) => ({ t, n: getByTag(t).length }))
    .filter((x) => x.n > 1);
  const pools = CATEGORIES.map((c) => getByCategory(c.id)).filter((p) => p.length > 0);
  return (
    <div className="wrap">
      <LegacyRedirect />
      <h1 className="visually-hidden">Gumption Guide</h1>

      <nav className={s.sections} aria-label="Sections">
        {CATEGORIES.map((c) => (
          <Link key={c.id} href={`/${c.id}`} className={s.section} data-cat={c.id}>
            <span className={s.title}>
              {c.title}
              <span className={s.count}>{getByCategory(c.id).length}</span>
            </span>
            <span className={s.blurb}>{c.blurb}</span>
          </Link>
        ))}
      </nav>

      <ul className={s.tags} aria-label="Tags">
        {tags.map(({ t, n }) => (
          <li key={t}>
            <Link href={`/tags/${t}`}>
              #{t}
              <span>{n}</span>
            </Link>
          </li>
        ))}
      </ul>

      <section className={s.browse}>
        <RandomPicks pools={pools} />
      </section>
    </div>
  );
}
