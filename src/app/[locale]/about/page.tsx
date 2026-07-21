"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Eye, Target, Heart, ArrowRight, Users } from "lucide-react";
import { timelineEvents, companyStats } from "@/data/about";
import Timeline from "@/components/timeline";
import AnimatedCounter from "@/components/animated-counter";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeader from "@/components/section-header";

export default function AboutPage() {
  const t = useTranslations("about");

  const translatedEvents = timelineEvents.map((event) => ({
    year: event.year,
    title: t(`timeline.${event.titleKey}`),
    description: t(`timeline.${event.descriptionKey}`),
  }));

  const stats = companyStats.map((stat) => ({
    value: stat.value,
    suffix: stat.suffix,
    label: t(`stats.${stat.labelKey}`),
  }));

  const visionMissionValues = [
    { icon: Eye, title: t("vision"), description: t("visionDesc") },
    { icon: Target, title: t("mission"), description: t("missionDesc") },
    { icon: Heart, title: t("values"), description: t("valuesDesc") },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] mb-6"
          >
            <span className="gold-text">{t("title")}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Company History Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("history")} subtitle={t("historyDesc")} />
          <Timeline events={translatedEvents} />
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="section-padding bg-neutral-custom mine-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {visionMissionValues.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-gold-100/50 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-custom/60 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-neutral-custom border border-gold-100/50 group hover:border-primary/30 transition-colors">
                  <div className="text-4xl sm:text-5xl font-bold gold-text font-[family-name:var(--font-heading)] mb-3">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="w-10 h-0.5 gold-gradient mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
                  <p className="text-slate-custom/60 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Geology & Resources */}
      <section className="section-padding bg-neutral-custom mine-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("geology")} subtitle={t("geologyDesc")} />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 border border-gold-100/50 h-full">
                <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                  {t("resources")}
                </h3>
                <p className="text-slate-custom/60 leading-relaxed text-sm">
                  {t("resourcesDesc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gold-100/50 h-full">
                <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                  {t("cutOff")}
                </h3>
                <p className="text-slate-custom/60 leading-relaxed text-sm mb-6">
                  {t("cutOffDesc")}
                </p>
                <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                  {t("recoveryRate")}
                </h3>
                <p className="text-slate-custom/60 leading-relaxed text-sm">
                  {t("recoveryRateDesc")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team / Leadership Placeholder */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader title={t("team")} subtitle={t("teamDesc")} />
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-12 border border-gold-100/50">
              <Users className="w-16 h-16 text-primary/30 mx-auto mb-6" />
              <p className="text-slate-custom/50 text-lg">
                {t("teamPlaceholder")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding dark-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
              <span className="gold-text">{t("ctaTitle")}</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("ctaDesc")}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-dark font-semibold hover:opacity-90 transition-opacity"
            >
              {t("ctaButton")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
