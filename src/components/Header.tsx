import Link from "next/link";
import { CATEGORIES } from "@/content/categories";
import { getByCategory } from "@/lib/content";
import { Mark } from "./Mark";
import { SearchBox } from "./SearchBox";
import s from "./Header.module.css";

export function Header() {
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, getByCategory(c.id).length]));
  return (
    <header className={s.top}>
      <div className={s.row}>
        <Link href="/" className={s.brand} aria-label="Gumption Guide, home">
          <Mark className={s.mark} />
          <span className={s.word}>
            Gumption <span>Guide</span>
          </span>
        </Link>
        <SearchBox counts={counts} />
      </div>
    </header>
  );
}
