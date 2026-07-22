import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const baseUrl = "https://www.mcquest.gold";

const routes = [
  "",
  "/about",
  "/operations",
  "/assets",
  "/investors",
  "/products",
  "/news",
  "/gallery",
  "/contact",
  "/privacy-policy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/about" ? 0.9 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      });
    }
  }

  return entries;
}
