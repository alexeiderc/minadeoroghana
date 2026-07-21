export const locales = ["en", "es", "pt", "ja"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  ja: "日本語",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  pt: "🇧🇷",
  ja: "🇯🇵",
};
