"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Landmark, Mountain, Factory } from "lucide-react";
import { miningAssets } from "@/data/assets";
import MapSection from "@/components/map-section";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeader from "@/components/section-header";
import AnimatedCounter from "@/components/animated-counter";

const typeConfig: Record<
  string,
  { color: string; icon: typeof MapPin }
> = {
  mine: { color: "bg-primary/10 text-primary", icon: Mountain },
  exploration: { color: "bg-blue-500/10 text-blue-500", icon: Landmark },
  processing: { color: "bg-emerald-500/10 text-emerald-500", icon: Factory },
};

const assetStats = [
  { value: 5, suffix: "", labelKey: "totalConcessions" },
  { value: 850, suffix: " km²", labelKey: "totalArea" },
  { value: 2, suffix: "", labelKey: "activeMines" },
  { value: 1, suffix: "", labelKey: "processingFacilities" },
];

export default function AssetsPage() {
  const t = useTranslations("assets");

  const markers = miningAssets.map((asset) => ({
    id: asset.id,
    name: t(asset.nameKey.replace(/^assets\./, "")),
    type: asset.type,
    lat: asset.lat,
    lng: asset.lng,
    description: t(asset.descriptionKey.replace(/^assets\./, "")),
  }));

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

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <MapSection markers={markers} />
        </div>
      </section>

      {/* Asset Cards Grid */}
      <section className="section-padding bg-neutral-custom mine-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miningAssets.map((asset, i) => {
              const config = typeConfig[asset.type] ?? typeConfig.mine;
              const TypeIcon = config.icon;
              const name = t(asset.nameKey.replace(/^assets\./, ""));
              const description = t(
                asset.descriptionKey.replace(/^assets\./, "")
              );
              const typeLabel = t(asset.type);

              return (
                <ScrollReveal key={asset.id} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-gold-100/50 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)]">
                        {name}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold capitalize mb-4 ${config.color}`}
                    >
                      <TypeIcon className="w-3 h-3" />
                      {typeLabel}
                    </span>
                    <p className="text-slate-custom/60 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {assetStats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl bg-neutral-custom border border-gold-100/50 group hover:border-primary/30 transition-colors">
                  <div className="text-4xl sm:text-5xl font-bold gold-text font-[family-name:var(--font-heading)] mb-3">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="w-10 h-0.5 gold-gradient mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
                  <p className="text-slate-custom/60 text-sm font-medium uppercase tracking-wider">
                    {t(stat.labelKey)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
              href="/investors"
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
