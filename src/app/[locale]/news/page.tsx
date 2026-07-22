"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Newspaper, RefreshCw, ExternalLink } from "lucide-react";
import { newsArticles } from "@/data/news";
import NewsCard from "@/components/news-card";
import SectionHeader from "@/components/section-header";
import ScrollReveal from "@/components/scroll-reveal";
import AnimatedCounter from "@/components/animated-counter";

const categories = [
  "all",
  "operations",
  "corporate",
  "sustainability",
  "financial",
] as const;

type Category = (typeof categories)[number];

interface GoldBodArticle {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
}

type NewsTab = "company" | "industry";

export default function NewsPage() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<NewsTab>("company");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const [goldbodArticles, setGoldbodArticles] = useState<GoldBodArticle[]>([]);
  const [goldbodLoading, setGoldbodLoading] = useState(false);
  const [goldbodLastUpdate, setGoldbodLastUpdate] = useState<string>("");
  const [goldbodCached, setGoldbodCached] = useState(false);

  const fetchGoldbodNews = useCallback(async (forceRefresh = false) => {
    setGoldbodLoading(true);
    try {
      const url = forceRefresh
        ? "/api/news/goldbod?refresh=true"
        : "/api/news/goldbod";
      const res = await fetch(url);
      const data = await res.json();
      setGoldbodArticles(data.articles || []);
      setGoldbodLastUpdate(data.lastUpdate || "");
      setGoldbodCached(data.cached || false);
    } catch {
      setGoldbodArticles([]);
    } finally {
      setGoldbodLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === "industry" && goldbodArticles.length === 0) {
      fetchGoldbodNews();
    }
  }, [activeTab, goldbodArticles.length, fetchGoldbodNews]);

  const filteredCompanyArticles =
    activeCategory === "all"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  function stripHtml(html: string) {
    return html.replace(/<[^>]*>/g, "").trim();
  }

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl hidden md:block" />
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

      {/* Tab Switcher */}
      <section className="bg-dark border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab("company")}
              className={`px-6 py-4 text-sm font-semibold transition-all duration-300 border-b-2 ${
                activeTab === "company"
                  ? "text-primary border-primary"
                  : "text-white/50 border-transparent hover:text-white/80"
              }`}
            >
              {t("news.tabCompany")}
            </button>
            <button
              onClick={() => setActiveTab("industry")}
              className={`px-6 py-4 text-sm font-semibold transition-all duration-300 border-b-2 ${
                activeTab === "industry"
                  ? "text-primary border-primary"
                  : "text-white/50 border-transparent hover:text-white/80"
              }`}
            >
              {t("news.tabIndustry")}
            </button>
          </div>
        </div>
      </section>

      {/* Company News */}
      {activeTab === "company" && (
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={t("news.latestTitle")}
              subtitle={t("news.latestSubtitle")}
            />

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

            <motion.div
              layout
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8${filteredCompanyArticles.length === 1 ? " max-w-md mx-auto" : ""}`}
            >
              {filteredCompanyArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  title={t(`news.${article.titleKey}`)}
                  excerpt={t(`news.${article.excerptKey}`)}
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

            {filteredCompanyArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-custom/40 text-lg">
                  {t("news.noResults")}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Industry News (GoldBod) */}
      {activeTab === "industry" && (
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                {t("news.industryTitle")}
              </h2>
              <div className="line-gold mt-4 mb-4 mx-auto" />
              <p className="text-slate-custom/60 max-w-2xl mx-auto">
                {t("news.industrySubtitle")}
              </p>
              {goldbodLastUpdate && (
                <div className="flex items-center justify-center gap-3 mt-4 text-xs text-slate-custom/40">
                  <span>
                    {t("news.lastUpdate")}:{" "}
                    {new Date(goldbodLastUpdate).toLocaleString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  {goldbodCached && (
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {t("news.cached")}
                    </span>
                  )}
                  <button
                    onClick={() => fetchGoldbodNews(true)}
                    disabled={goldbodLoading}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-50 text-slate-custom/60 hover:bg-gold-100 transition-colors disabled:opacity-50"
                  >
                    <RefreshCw
                      className={`w-3 h-3 ${goldbodLoading ? "animate-spin" : ""}`}
                    />
                    {t("news.refresh")}
                  </button>
                </div>
              )}
            </div>

            {goldbodLoading && goldbodArticles.length === 0 && (
              <div className="text-center py-16">
                <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                <p className="text-slate-custom/40">{t("news.loading")}</p>
              </div>
            )}

            {!goldbodLoading && goldbodArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate-custom/40 text-lg">
                  {t("news.noIndustryNews")}
                </p>
              </div>
            )}

            {goldbodArticles.length > 0 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {goldbodArticles.map((article) => {
                    const excerpt = stripHtml(article.excerpt.rendered);
                    const formattedDate = new Date(
                      article.date
                    ).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    });

                    return (
                      <ScrollReveal key={article.id}>
                        <motion.article
                          whileHover={{ y: -4 }}
                          transition={{ duration: 0.3 }}
                          className="group bg-white rounded-2xl overflow-hidden border border-gold-100/50 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                        >
                          <div className="h-48 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-800 relative overflow-hidden">
                            <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300" />
                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300">
                              GoldBod
                            </span>
                            <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                          </div>

                          <div className="p-6 flex flex-col flex-1">
                            <time className="text-xs text-slate-custom/40 font-medium uppercase tracking-wider">
                              {formattedDate}
                            </time>
                            <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                              {article.title.rendered}
                            </h3>
                            <p className="text-sm text-slate-custom/60 leading-relaxed line-clamp-3 mb-4 flex-1">
                              {excerpt.length > 200
                                ? excerpt.substring(0, 200) + "..."
                                : excerpt}
                            </p>
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors mt-auto"
                            >
                              {t("news.readMore")}
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        </motion.article>
                      </ScrollReveal>
                    );
                  })}
                </div>

                <div className="text-center mt-12">
                  <a
                    href="https://goldbod.gov.gh/news/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-colors"
                  >
                    {t("news.viewAllGoldBod")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
