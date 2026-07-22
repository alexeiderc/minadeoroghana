"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import GalleryGrid from "@/components/gallery-grid";
import SectionHeader from "@/components/section-header";
import ScrollReveal from "@/components/scroll-reveal";

const categories = [
  "all",
  "mining",
  "processing",
  "community",
  "landscape",
] as const;

type GalleryCategory = (typeof categories)[number];

const categoryMap: Record<string, GalleryCategory> = {
  "gallery-1": "mining",
  "gallery-2": "processing",
  "gallery-3": "processing",
  "gallery-4": "mining",
  "gallery-5": "landscape",
  "gallery-6": "community",
  "gallery-7": "mining",
  "gallery-8": "processing",
};

export default function GalleryPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");

  const mappedItems = useMemo(
    () =>
      galleryItems.map((item) => ({
        id: item.id,
        gradient: item.gradient,
        title: t(item.titleKey),
        span: item.span,
      })),
    [t]
  );

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? mappedItems
        : mappedItems.filter(
            (item) => categoryMap[item.id] === activeCategory
          ),
    [activeCategory, mappedItems]
  );

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <Images className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/70 font-medium">
                {t("gallery.heroBadge")}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6"
          >
            <span className="gold-text">{t("gallery.title")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("gallery.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid + Filter */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("gallery.browseTitle")}
            subtitle={t("gallery.browseSubtitle")}
          />

          {/* Category Filters */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? "gold-gradient text-dark shadow-md"
                      : "bg-gold-50 text-slate-custom/60 hover:bg-gold-100 hover:text-slate-custom"
                  }`}
                >
                  {t(`gallery.filter.${cat}`)}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Gallery Grid with Lightbox */}
          <GalleryGrid items={filteredItems} />
        </div>
      </section>
    </main>
  );
}
