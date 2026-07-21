"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./language-switcher";
import MobileMenu from "./mobile-menu";
import { Menu } from "lucide-react";
import clsx from "clsx";

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

export default function Navbar() {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-300",
          scrolled
            ? "bg-dark/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center">
                <span className="text-dark font-bold text-sm font-[family-name:var(--font-heading)]">MC</span>
              </div>
              <span className="text-lg font-bold gold-text font-[family-name:var(--font-heading)] tracking-wide hidden sm:inline">
                MC QUEST
              </span>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="hidden sm:inline-flex px-5 py-2.5 rounded-lg gold-gradient text-dark text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                {t("hero.cta2")}
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="xl:hidden p-2 text-white/80 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
