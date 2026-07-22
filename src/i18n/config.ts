export const locales = ["en", "es", "pt", "zh", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  zh: "繁體中文",
  th: "ไทย",
};

export const localeFlags: Record<Locale, string> = {
  en: "/flags/en.svg",
  es: "/flags/es.svg",
  pt: "/flags/pt.svg",
  zh: "/flags/zh.svg",
  th: "/flags/th.svg",
};
