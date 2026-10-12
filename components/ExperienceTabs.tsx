"use client";

import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useUI, type ExperienceTab } from "@/store/ui";
import { experience, pick } from "@/content/about";

const tabs: ExperienceTab[] = ["embedded", "systems", "webmobile"];

export default function ExperienceTabs() {
  const t = useTranslations("About.tabs");
  const locale = useLocale();
  const { experienceTab, setExperienceTab } = useUI();

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next =
      (index + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setExperienceTab(tabs[next]);
    document.getElementById(`tab-${tabs[next]}`)?.focus();
  }

  return (
    <div>
      <div role="tablist" className="flex gap-1 border-b border-brand-100">
        {tabs.map((tab, i) => {
          const active = tab === experienceTab;
          return (
            <button
              key={tab}
              id={`tab-${tab}`}
              role="tab"
              type="button"
              aria-selected={active}
              aria-controls={`panel-${tab}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setExperienceTab(tab)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "text-brand-700"
                  : "text-slate-500 hover:text-brand-600"
              }`}
            >
              {t(tab)}
              {active && (
                <motion.span
                  layoutId="experience-tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-600"
                />
              )}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${experienceTab}`}
        aria-labelledby={`tab-${experienceTab}`}
        className="mt-6 space-y-4"
      >
        {experience[experienceTab].map((role) => (
          <article
            key={role.company + role.period}
            className="rounded-xl border border-brand-100 p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold text-slate-900">
                {pick(role.title, locale)} ·{" "}
                <span className="text-brand-700">{role.company}</span>
              </h3>
              <span className="text-sm text-slate-500">{role.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {pick(role.bullets, locale).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {role.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
