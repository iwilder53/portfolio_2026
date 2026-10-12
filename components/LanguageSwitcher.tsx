"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const labels: Record<string, string> = { en: "EN", ja: "日本語" };

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex overflow-hidden rounded-md border border-brand-200 text-xs ${
        pending ? "opacity-60" : ""
      }`}
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          aria-pressed={l === locale}
          onClick={() => switchTo(l)}
          className={`px-2.5 py-1 font-medium transition-colors ${
            l === locale
              ? "bg-brand-600 text-white"
              : "bg-white text-brand-700 hover:bg-brand-50"
          }`}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
