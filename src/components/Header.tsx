import Link from "next/link";
import { CATEGORIES } from "@/content/categories";
import { Mark } from "./Mark";
import { SearchBox } from "./SearchBox";
import s from "./Header.module.css";

export function Header() {
  return (
    <header className={s.top}>
      <div className={`wrap ${s.row}`}>
        <Link href="/" className={s.brand} aria-label="Gumption Guide, home">
          <Mark className={s.mark} />
          <span className={s.word}>
            Gumption <span>Guide</span>
          </span>
        </Link>
        <SearchBox />
        <nav className={s.nav} aria-label="Categories">
          {CATEGORIES.map((c) => (
            <Link key={c.id} href={`/${c.id}`} data-cat={c.id}>
              {c.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
