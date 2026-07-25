"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/config";
import { X, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.operations", href: "/operations" },
  { key: "nav.assets", href: "/assets" },
  { key: "nav.investors", href: "/investors" },
  { key: "nav.products", href: "/products" },
  { key: "nav.news", href: "/news" },
  { key: "nav.gallery", href: "/gallery" },
  { key: "nav.contact", href: "/contact" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 xl:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-full max-w-sm bg-dark z-50 xl:hidden",
          "transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <img src="/logo.png" alt="MC QUEST" className="h-8 w-auto" width={32} height={32} />
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-6 py-6 flex flex-col gap-1">
          {navItems.map((item, index) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between py-3 px-4 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-all"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-base font-medium">{t(item.key)}</span>
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </nav>

        <div className="px-6 py-6 border-t border-white/10">
          <p className="text-xs text-white/40 uppercase tracking-wider mb-3 px-4">
            {t("nav.home") ? "Language" : "Language"}
          </p>
          <div className="grid grid-cols-2 gap-2 orphan-center">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  onClose();
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
              >
                <img src={localeFlags[locale]} alt="" className="w-5 h-4 rounded-sm object-cover" />
                <span>{localeNames[locale]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="block w-full py-3 text-center rounded-lg gold-gradient text-dark font-semibold hover:opacity-90 transition-opacity"
          >
            {t("hero.cta2")}
          </Link>
        </div>
      </div>
    </>
  );
}
