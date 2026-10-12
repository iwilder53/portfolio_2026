import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/content/site";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

const areas = ["embedded", "systems", "webmobile"] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600">
            {t("greeting")}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900 sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-3 text-xl text-brand-700">{t("role")}</p>
          <p className="mt-5 max-w-xl text-slate-600">{t("intro")}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
            >
              {t("ctaAbout")}
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand-200 px-4 py-2.5 text-sm font-medium text-brand-700 hover:bg-brand-50"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-brand-200 px-4 py-2.5 text-sm font-medium text-brand-700 hover:bg-brand-50"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      {/* Focus areas */}
      <section className="pb-16">
        <Reveal>
          <h2 className="text-2xl font-semibold text-slate-900">
            {t("focus")}
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-brand-100 bg-brand-50/50 p-5">
                <h3 className="font-semibold text-brand-800">
                  {t(`areas.${a}.title`)}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {t(`areas.${a}.body`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      {/*  <section className="pb-18">
        <Reveal>
          <div className="rounded-xl bg-brand-600 p-4 text-center text-white">
            <h2 className="text-xl font-semibold">{t("contact")}</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block underline underline-offset-4"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </section> */}
    </div>
  );
}
