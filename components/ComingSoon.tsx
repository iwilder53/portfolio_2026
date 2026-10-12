import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ComingSoon() {
  const t = useTranslations("ComingSoon");

  return (
    <div className="mx-auto max-w-xl px-4 py-28 text-center">
      <h1 className="text-3xl font-bold text-slate-900">{t("title")}</h1>
      <p className="mt-3 text-slate-600">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-brand-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-700"
      >
        {t("back")}
      </Link>
    </div>
  );
}
