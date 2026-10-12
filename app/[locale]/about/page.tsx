import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Reveal from "@/components/Reveal";
import ExperienceTabs from "@/components/ExperienceTabs";
import { certificates, education, pick } from "@/content/about";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });
  return { title: t("title") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  return (
    <div className="mx-auto max-w-3xl space-y-14 px-4 py-14">
      <Reveal>
        <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
      </Reveal>

      {/* Experience */}
      <section>
        <Reveal>
          <h2 className="mb-5 text-xl font-semibold text-brand-800">
            {t("experience")}
          </h2>
        </Reveal>
        <ExperienceTabs />
      </section>
      {/* Education */}
      <section>
        <Reveal>
          <h2 className="text-xl font-semibold text-brand-800">
            {t("education")}
          </h2>
        </Reveal>
        <ol className="mt-5 space-y-5 border-l-2 border-brand-200 pl-5">
          {education.map((e) => (
            <li key={e.period}>
              <Reveal>
                <p className="font-medium text-slate-900">
                  {pick(e.school, locale)}
                </p>
                <p className="text-sm text-slate-600">
                  {pick(e.degree, locale)}
                </p>
                <p className="text-xs text-slate-500">{e.period}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Certificates */}
      <section>
        <Reveal>
          <h2 className="text-xl font-semibold text-brand-800">
            {t("certificates")}
          </h2>
        </Reveal>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {certificates.map((c, i) => (
            <Reveal key={c.year + i} delay={i * 0.06}>
              <div className="rounded-xl border border-brand-100 bg-brand-50/50 p-4">
                <p className="font-medium text-slate-900">
                  {pick(c.name, locale)}
                </p>
                <p className="text-sm text-slate-600">
                  {c.issuer} · {c.year}
                </p>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-brand-700 underline underline-offset-2"
                  >
                    View credential
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
