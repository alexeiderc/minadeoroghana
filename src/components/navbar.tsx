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
          "fixed top-0 left-0 right-0 z-50 h-[80px] transition-all duration-500",
          scrolled
            ? "bg-charcoal/95 md:backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-primary/10"
            : "bg-charcoal/50 md:backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <Link href="/" className="flex items-center shrink-0">
              <img src="/logo.png" alt="Mc Quest Gold & Diamond Mining" className="h-10 w-auto" width={40} height={40} />
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="px-3 py-2 text-xs font-medium tracking-wider uppercase text-stone/80 hover:text-primary rounded transition-colors duration-300"
                >
                  {t(item.key)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="hidden sm:inline-flex px-5 py-2 rounded gold-gradient text-charcoal text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                {t("hero.cta2")}
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="xl:hidden p-2 text-stone/80 hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
