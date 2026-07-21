"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import { Globe, ChevronDown } from "lucide-react";
import clsx from "clsx";

export default function LanguageSwitcher() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = t("nav.home") ? "en" : "en";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLocaleChange(locale: Locale) {
    router.replace(pathname, { locale });
    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <ChevronDown
          className={clsx(
            "w-3 h-3 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-slate-custom rounded-xl shadow-2xl border border-white/10 py-2 z-50">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={clsx(
                "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
                locale === currentLocale
                  ? "text-primary bg-white/5"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="text-lg">{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
