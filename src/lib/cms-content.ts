import type { NewsArticle } from "@/types";
import type { GalleryItem } from "@/types";

// --- News ---
import lidar from "@/content/news/lidar-resource-estimation.json";
import nonMercury from "@/content/news/non-mercury-recovery-validation.json";
import surfaceMining from "@/content/news/surface-mining-operations-commence.json";
import community from "@/content/news/community-development-initiative.json";
import goldPrice from "@/content/news/gold-price-outlook-2025.json";
import drones from "@/content/news/mining-drones-deployed-3d-mapping.json";

// --- Gallery ---
import pitOps from "@/content/gallery/pit-operations.json";
import processing from "@/content/gallery/processing-plant.json";
import goldBars from "@/content/gallery/gold-bars.json";
import exploration from "@/content/gallery/exploration-camp.json";
import aerial from "@/content/gallery/aerial-view.json";
import team from "@/content/gallery/team-operations.json";
import heavyEquip from "@/content/gallery/heavy-equipment.json";
import refinedGold from "@/content/gallery/refined-gold.json";

type Locale = "en" | "es" | "pt" | "zh" | "th";

const rawNews = [
  lidar,
  nonMercury,
  surfaceMining,
  community,
  goldPrice,
  drones,
];

const rawGallery = [
  pitOps,
  processing,
  goldBars,
  exploration,
  aerial,
  team,
  heavyEquip,
  refinedGold,
];

function getTranslation(
  entry: Record<string, unknown>,
  locale: Locale,
  field: string
): string {
  const block = entry[locale] as Record<string, string> | undefined;
  const fallback = entry["en"] as Record<string, string> | undefined;
  return block?.[field] ?? fallback?.[field] ?? "";
}

export function getNewsArticles(locale: Locale): NewsArticle[] {
  return rawNews.map((item, i) => ({
    id: `cms-news-${i}`,
    slug: item.slug as string,
    titleKey: getTranslation(item, locale, "title"),
    excerptKey: getTranslation(item, locale, "excerpt"),
    date: item.date as string,
    category: item.category as string,
    imageGradient: item.imageGradient as string,
  }));
}

export function getGalleryItems(locale: Locale): GalleryItem[] {
  return rawGallery
    .map((item, i) => ({
      id: `cms-gallery-${i}`,
      gradient: item.gradient as string,
      span: item.span as "tall" | "wide" | "normal",
      titleKey: getTranslation(item, locale, "title"),
      order: (item.order as number) ?? i,
    }))
    .sort((a, b) => a.order - b.order)
    .map(({ order: _, ...rest }) => rest);
}
