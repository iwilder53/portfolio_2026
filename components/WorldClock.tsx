"use client";

import { useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useUI } from "@/store/ui";

const zones = [
  { key: "nagoya", tz: "Asia/Tokyo" },
  { key: "nagpur", tz: "Asia/Kolkata" },
] as const;

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}
const getSnapshot = () => Math.floor(Date.now() / 1000); // stable within a second
const getServerSnapshot = () => null;

function hourIn(tz: string, date: Date) {
  return Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      hour: "numeric",
      hourCycle: "h23",
    }).format(date)
  );
}

export default function WorldClock() {
  const t = useTranslations("Clock");
  const locale = useLocale();
  const { hour12, toggleHour12 } = useUI();
  const secs = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const now = secs === null ? null : new Date(secs * 1000);

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-xs text-slate-700">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
        {zones
          .filter(({ key }) =>
            locale === "ja" ? key === "nagoya" : key === "nagpur"
          )
          .map(({ key, tz }) => {
            const time = now
              ? new Intl.DateTimeFormat(locale, {
                  timeZone: tz,
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12,
                }).format(now)
              : "--:--:--";
            const date = now
              ? new Intl.DateTimeFormat(locale, {
                  timeZone: tz,
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                }).format(now)
              : "";
            const hour = now ? hourIn(tz, now) : 12;
            const isDay = hour >= 6 && hour < 18;

            return (
              <div key={key} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={`h-2 w-2 rounded-full ${
                    isDay ? "bg-amber-400" : "bg-slate-400"
                  }`}
                />
                <span className="font-medium">{t(key)}</span>
                <span className="tabular-nums text-brand-700">{time}</span>
                <span className="hidden text-slate-500 sm:inline">{date}</span>
              </div>
            );
          })}
      </div>

      <button
        type="button"
        onClick={toggleHour12}
        aria-label={t("toggle")}
        className="rounded border border-brand-200 px-1.5 py-0.5 text-[11px] text-brand-700 hover:bg-brand-100"
      >
        {hour12 ? "12h" : "24h"}
      </button>
    </div>
  );
}
