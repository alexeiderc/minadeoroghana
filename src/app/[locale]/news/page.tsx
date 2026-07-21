"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";
import { newsArticles } from "@/data/news";
import NewsCard from "@/components/news-card";
import SectionHeader from "@/components/section-header";
import ScrollReveal from "@/components/scroll-reveal";

const categories = [
  "all",
  "operations",
  "corporate",
  "sustainability",
  "financial",
] as const;

type Category = (typeof categories)[number];

export default function NewsPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredArticles =
    activeCategory === "all"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <Newspaper className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/70 font-medium">
                {t("news.heroBadge")}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6"
          >
            <span className="gold-text">{t("news.title")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("news.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      {/* News Grid + Filter */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("news.latestTitle")}
            subtitle={t("news.latestSubtitle")}
          />

          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "gold-gradient text-dark shadow-md"
                      : "bg-gold-50 text-slate-custom/60 hover:bg-gold-100 hover:text-slate-custom"
                  }`}
                >
                  {t(`news.filter.${cat}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Articles Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <NewsCard
                key={article.id}
                title={t(article.titleKey)}
                excerpt={t(article.excerptKey)}
                date={new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                category={article.category}
                slug={article.slug}
                readMoreText={t("news.readMore")}
                gradient={article.imageGradient}
              />
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-custom/40 text-lg">
                {t("news.noResults")}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
