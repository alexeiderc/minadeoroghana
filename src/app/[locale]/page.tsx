"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Mountain,
  Search,
  Factory,
  Gem,
  Clock,
  Eye,
  Target,
  Award,
  TreePine,
  Users,
  HardHat,
  GraduationCap,
  Heart,
  ArrowRight,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HeroSection from "@/components/hero-section";
import ScrollReveal from "@/components/scroll-reveal";
import SectionHeader from "@/components/section-header";
import OperationsCard from "@/components/operations-card";
import SustainabilityCard from "@/components/sustainability-card";
import MetricCard from "@/components/metric-card";
import NewsCard from "@/components/news-card";
import MapSection from "@/components/map-section";
import { operations } from "@/data/operations";
import { metrics } from "@/data/metrics";
import { sustainabilityItems } from "@/data/sustainability";
import { newsArticles } from "@/data/news";
import { miningAssets } from "@/data/assets";

const operationsIconMap: Record<string, LucideIcon> = {
  Mountain,
  Search,
  Factory,
  Gem,
};

const sustainabilityIconMap: Record<string, LucideIcon> = {
  TreePine,
  Users,
  HardHat,
  GraduationCap,
  Heart,
};

const aboutCards = [
  { key: "history", icon: Clock },
  { key: "vision", icon: Eye },
  { key: "mission", icon: Target },
  { key: "values", icon: Award },
] as const;

export default function HomePage() {
  const t = useTranslations("hero");
  const tAbout = useTranslations("about");
  const tOperations = useTranslations("operations");
  const tAssets = useTranslations("assets");
  const tMetrics = useTranslations("metrics");
  const tSustainability = useTranslations("sustainability");
  const tNews = useTranslations("news");
  const tCommon = useTranslations("common");

  const latestNews = [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const mapMarkers = miningAssets.map((asset) => ({
    id: asset.id,
    name: tAssets(asset.nameKey as string),
    type: asset.type,
    lat: asset.lat,
    lng: asset.lng,
    description: tAssets(asset.descriptionKey as string),
  }));

  return (
    <>
      <HeroSection />

      <section className="section-padding bg-white mine-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={tAbout("title")}
            subtitle={tAbout("subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutCards.map((card, i) => (
              <ScrollReveal key={card.key} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 border border-gold-100/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 h-full">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-14 h-14 rounded-xl gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <card.icon className="w-6 h-6 text-dark" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-2">
                        {tAbout(card.key)}
                      </h3>
                      <p className="text-slate-custom/60 leading-relaxed text-sm">
                        {tAbout(`${card.key}Desc`)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
              {tOperations("title")}
            </h2>
            <div className="line-gold mt-6 mb-6 mx-auto" />
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mt-4 mx-auto">
              {tOperations("subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {operations.map((op) => {
              const Icon = operationsIconMap[op.icon] ?? Mountain;
              return (
                <OperationsCard
                  key={op.id}
                  icon={Icon}
                  title={tOperations(op.titleKey)}
                  description={tOperations(op.descriptionKey)}
                  stats={op.stats?.map((s) => ({
                    value: s.value,
                    suffix: s.suffix,
                    label: tOperations(s.labelKey),
                  }))}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-custom font-[family-name:var(--font-heading)] leading-tight">
              <MapPin className="w-8 h-8 text-primary inline-block mr-3 -mt-1" />
              {tAssets("title")}
            </h2>
            <div className="line-gold mt-6 mb-6 mx-auto" />
          </div>
          <ScrollReveal>
            <MapSection markers={mapMarkers} />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
              {tMetrics("title")}
            </h2>
            <div className="line-gold mt-6 mb-6 mx-auto" />
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mt-4 mx-auto">
              {tMetrics("subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map((metric, i) => (
              <MetricCard
                key={i}
                value={metric.value}
                suffix={metric.suffix}
                label={tMetrics(metric.labelKey)}
                decimals={metric.decimals}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white mine-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={tSustainability("title")}
            subtitle={tSustainability("subtitle")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sustainabilityItems.slice(0, 3).map((item) => {
              const Icon = sustainabilityIconMap[item.icon] ?? TreePine;
              return (
                <SustainabilityCard
                  key={item.id}
                  icon={Icon}
                  title={tSustainability(item.titleKey)}
                  description={tSustainability(item.descriptionKey)}
                  metric={item.metric}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {sustainabilityItems.slice(3, 5).map((item) => {
              const Icon = sustainabilityIconMap[item.icon] ?? TreePine;
              return (
                <SustainabilityCard
                  key={item.id}
                  icon={Icon}
                  title={tSustainability(item.titleKey)}
                  description={tSustainability(item.descriptionKey)}
                  metric={item.metric}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-heading)] leading-tight">
              {tNews("title")}
            </h2>
            <div className="line-gold mt-6 mb-6 mx-auto" />
            <p className="text-lg text-white/60 max-w-2xl leading-relaxed mt-4 mx-auto">
              {tNews("subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <NewsCard
                key={article.id}
                title={tNews(article.titleKey)}
                excerpt={tNews(article.excerptKey)}
                date={article.date}
                category={article.category}
                slug={article.slug}
                readMoreText={tNews("readMore")}
                gradient={article.imageGradient}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              {tNews("viewAll")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl bg-dark overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6">
                  <span className="gold-text">{t("cta1")}</span>
                </h2>
                <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                  {t("subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/operations"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-dark font-semibold text-base hover:opacity-90 transition-opacity"
                  >
                    {t("cta1")}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-base hover:border-primary/50 hover:bg-white/5 transition-all"
                  >
                    {t("cta2")}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
