"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  FileText,
  TrendingUp,
  BarChart3,
  Presentation,
  CheckCircle2,
  MapPin,
  Crosshair,
  Droplets,
  Award,
  Globe,
} from "lucide-react";
import { investorReports } from "@/data/investors";
import MetricCard from "@/components/metric-card";
import SectionHeader from "@/components/section-header";
import ScrollReveal from "@/components/scroll-reveal";

const reportIcons: Record<string, React.ReactNode> = {
  annual: <FileText className="w-5 h-5" />,
  quarterly: <BarChart3 className="w-5 h-5" />,
  presentation: <Presentation className="w-5 h-5" />,
};

const keyFactKeys = [
  "fact1",
  "fact2",
  "fact3",
  "fact4",
  "fact5",
  "fact6",
  "fact7",
  "fact8",
];

export default function InvestorsPage() {
  const t = useTranslations("investors");

  const highlights = [
    { value: 405, suffix: " ha", label: t("revenue"), icon: MapPin },
    { value: 1000, suffix: "+", label: t("ebitda"), icon: Crosshair },
    { value: 10, suffix: " g/t", label: t("netIncome"), icon: Award },
    { value: 90, suffix: "%", label: t("dividend"), icon: Droplets },
    { value: 4069, suffix: " USD/oz", label: t("marketCap"), icon: Globe },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/70 font-medium">
                MC QUEST GOLD & DIAMOND
              </span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6"
          >
            <span className="gold-text">{t("title")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("overview")} subtitle={t("overviewDesc")} />
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("financial")} subtitle={t("subtitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 orphan-center">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <MetricCard
                  value={item.value}
                  suffix={item.suffix}
                  label={item.label}
                  decimals={item.suffix.includes("g/t") ? 1 : 0}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("reports")} subtitle={t("subtitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investorReports.map((report, index) => (
              <ScrollReveal key={report.id} delay={index * 0.05}>
                <div className="group p-6 rounded-2xl border border-gold-100/50 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gold-50 text-primary shrink-0">
                      {reportIcons[report.type]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-custom font-[family-name:var(--font-heading)] line-clamp-2 mb-1">
                        {t(report.titleKey)}
                      </h3>
                      <p className="text-xs text-slate-custom/40 uppercase tracking-wider mb-3">
                        {new Date(report.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                        {" · "}
                        {report.fileSize}
                      </p>
                      <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                        <Download className="w-4 h-4" />
                        {t("downloadReport")}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations */}
      <section className="section-padding bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("presentations")} subtitle={t("subtitle")} />
          <ScrollReveal>
            <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-2xl border-2 border-dashed border-gold-200 text-center">
              <Presentation className="w-12 h-12 text-primary/40 mx-auto mb-4" />
              <p className="text-slate-custom/50 font-medium">
                Presentations coming soon.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Investment Facts */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("keyFacts")} subtitle={t("overviewDesc")} />
          <div className="max-w-3xl mx-auto space-y-4">
            {keyFactKeys.map((key, index) => (
              <ScrollReveal key={key} delay={index * 0.08}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gold-50/50 border border-gold-100/50">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-slate-custom/80 leading-relaxed">
                    {t(key)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
              <span className="gold-text">{t("overview")}</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("overviewDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-dark font-semibold hover:opacity-90 transition-opacity"
              >
                {t("downloadReport")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/assets"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:border-primary/50 hover:bg-white/5 transition-all"
              >
                View Assets
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
