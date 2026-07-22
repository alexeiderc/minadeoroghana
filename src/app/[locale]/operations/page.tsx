"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Mountain,
  Search,
  Factory,
  Gem,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { operations } from "@/data/operations";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeader from "@/components/section-header";
import AnimatedCounter from "@/components/animated-counter";

const iconMap: Record<string, LucideIcon> = {
  Mountain,
  Search,
  Factory,
  Gem,
};

const processSteps = [
  {
    key: "flowExploration",
    descKey: "flowExplorationDesc",
    icon: Search,
  },
  {
    key: "flowMining",
    descKey: "flowMiningDesc",
    icon: Mountain,
  },
  {
    key: "flowProcessing",
    descKey: "flowProcessingDesc",
    icon: Factory,
  },
  {
    key: "flowRecovery",
    descKey: "flowRecoveryDesc",
    icon: Gem,
  },
];

export default function OperationsPage() {
  const t = useTranslations("operations");

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

      {/* Operations Detail — Alternating Full-Width Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {operations.map((op, i) => {
            const Icon = iconMap[op.icon];
            const isEven = i % 2 === 0;
            const titleKey = op.titleKey.replace(/^operations\./, "");
            const descKey = op.descriptionKey.replace(/^operations\./, "");

            return (
              <ScrollReveal key={op.id}>
                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 items-center`}
                >
                  {/* Text Side */}
                  <div className="flex-1">
                    <div className="w-16 h-16 rounded-xl gold-gradient flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-dark" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                      {t(titleKey)}
                    </h2>
                    <p className="text-slate-custom/60 leading-relaxed text-lg">
                      {t(descKey)}
                    </p>
                  </div>

                  {/* Stats Grid */}
                  {op.stats && op.stats.length > 0 && (
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {op.stats.map((stat, j) => {
                        const statLabel = t(
                          stat.labelKey.replace(/^operations\./, "")
                        );
                        const decimals =
                          stat.value % 1 !== 0
                            ? stat.value.toString().split(".")[1]?.length ?? 0
                            : 0;

                        return (
                          <div
                            key={j}
                            className="text-center p-6 rounded-2xl bg-neutral-custom border border-gold-100/50 hover:border-primary/30 transition-colors"
                          >
                            <div className="text-2xl sm:text-3xl font-bold gold-text font-[family-name:var(--font-heading)]">
                              <AnimatedCounter
                                end={stat.value}
                                suffix={stat.suffix}
                                decimals={decimals}
                              />
                            </div>
                            <div className="w-8 h-0.5 gold-gradient mx-auto my-3" />
                            <p className="text-slate-custom/50 text-xs font-medium uppercase tracking-wider">
                              {statLabel}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding bg-neutral-custom mine-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("flowTitle")}
            subtitle={t("flowDesc")}
          />
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <ScrollReveal key={step.key} delay={i * 0.15}>
                    <div className="text-center relative">
                      <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5 relative z-10">
                        <StepIcon className="w-8 h-8 text-dark" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-2">
                        {t(step.key)}
                      </h3>
                      <p className="text-slate-custom/50 text-sm leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <ScrollReveal className="flex-1">
              <div className="mb-8 md:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-dark" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-custom font-[family-name:var(--font-heading)]">
                    {t("safetyTitle")}
                  </h2>
                </div>
                <p className="text-slate-custom/60 text-lg leading-relaxed">
                  {t("safetyDesc")}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="flex-1" delay={0.2}>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-neutral-custom border border-gold-100/50 hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-slate-custom/70 text-sm leading-relaxed">
                      {t(`safetyItem${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
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
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
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
