"use client";

import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useUI } from "@/store/ui";
import { site } from "@/content/site";
import LanguageSwitcher from "./LanguageSwitcher";
import WorldClock from "./WorldClock";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/gallery", key: "gallery" },
  { href: "/blog", key: "blog" },
] as const;

export default function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const { navOpen, toggleNav, setNavOpen } = useUI();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      {/* Clock strip */}
      <div className="border-b border-brand-100 bg-brand-50">
        <div className="mx-auto max-w-5xl px-4 py-1.5">
          <WorldClock />
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-lg font-semibold text-brand-700"
          onClick={() => setNavOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map(({ href, key }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={key}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-brand-600 ${
                  active ? "text-brand-700" : "text-slate-600"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={t("menu")}
            aria-expanded={navOpen}
            onClick={toggleNav}
            className="rounded-md p-2 text-slate-700 hover:bg-brand-50"
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {navOpen && (
        <nav className="border-t border-brand-100 bg-white md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-4 py-2">
            {links.map(({ href, key }) => (
              <li key={key}>
                <Link
                  href={href}
                  onClick={() => setNavOpen(false)}
                  className="block py-3 text-sm font-medium text-slate-700 hover:text-brand-600"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
