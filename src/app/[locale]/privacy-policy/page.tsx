import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("legal");
  const tContact = await getTranslations("contact.info");

  const sections = [
    {
      id: "collection",
      title: t("privacy.collection.title"),
      content: [
        t("privacy.collection.p1"),
        t("privacy.collection.p2"),
        t("privacy.collection.p3"),
      ],
    },
    {
      id: "usage",
      title: t("privacy.usage.title"),
      content: [
        t("privacy.usage.p1"),
        t("privacy.usage.p2"),
        t("privacy.usage.p3"),
      ],
    },
    {
      id: "cookies",
      title: t("privacy.cookies.title"),
      content: [
        t("privacy.cookies.p1"),
        t("privacy.cookies.p2"),
        t("privacy.cookies.p3"),
      ],
    },
    {
      id: "thirdParties",
      title: t("privacy.thirdParties.title"),
      content: [
        t("privacy.thirdParties.p1"),
        t("privacy.thirdParties.p2"),
      ],
    },
    {
      id: "security",
      title: t("privacy.security.title"),
      content: [
        t("privacy.security.p1"),
        t("privacy.security.p2"),
      ],
    },
    {
      id: "rights",
      title: t("privacy.rights.title"),
      content: [
        t("privacy.rights.p1"),
        t("privacy.rights.p2"),
      ],
    },
    {
      id: "contact",
      title: t("privacy.contactPolicy.title"),
      content: [
        t("privacy.contactPolicy.p1"),
        t("privacy.contactPolicy.p2"),
      ],
    },
    {
      id: "changes",
      title: t("privacy.changes.title"),
      content: [
        t("privacy.changes.p1"),
        t("privacy.changes.p2"),
      ],
    },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-white/70 font-medium">{t("lastUpdated")} — July 20, 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] mb-6">
            <span className="gold-text">{t("privacyTitle")}</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-custom/60 hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToHome")}
          </Link>

          <div className="prose-custom space-y-12">
            {sections.map((section, index) => (
              <div key={section.id}>
                <h2 className="text-2xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                  <span className="gold-text mr-3">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </h2>
                <div className="line-gold mb-6 w-16" />
                <div className="space-y-4">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className="text-slate-custom/70 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact for Privacy Questions */}
          <div className="mt-16 p-8 rounded-2xl bg-gold-50/50 border border-gold-100/40">
            <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
              {t("privacyQuestions")}
            </h3>
            <p className="text-slate-custom/60 leading-relaxed mb-4">
              {t("privacyQuestionsDesc")}
            </p>
            <div className="space-y-2 text-sm text-slate-custom/60">
              <p>{tContact("headquarters")}: {tContact("address")}</p>
              <p>{tContact("emailLabel")}: {tContact("email")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
