"use client";
import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function asyncFooter() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-brand-100 bg-brand-50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-slate-600 sm:flex-row">
        <p>
          © 2026 {site.name}. {t("rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-brand-700"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-brand-700"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
