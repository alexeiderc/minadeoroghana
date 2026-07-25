"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const quickLinks = [
  { key: "about", href: "/about" },
  { key: "operations", href: "/operations" },
  { key: "assets", href: "/assets" },
  { key: "investors", href: "/investors" },
  { key: "products", href: "/products" },
];

const resourceLinks = [
  { key: "privacy", href: "/privacy-policy", ns: "footer" as const },
  { key: "terms", href: "/terms", ns: "footer" as const },
  { key: "news", href: "/news", ns: "nav" as const },
  { key: "gallery", href: "/gallery", ns: "nav" as const },
  { key: "contact", href: "/contact", ns: "nav" as const },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact.info");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <img src="/logo.png" alt="Mc Quest Gold & Diamond Mining" className="h-10 w-auto" width={40} height={40} />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t("companyDesc")}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary/70" />
                <span>{tContact("address")}</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Phone className="w-4 h-4 shrink-0 text-primary/70" />
                <span>{tContact("phone")}</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Mail className="w-4 h-4 shrink-0 text-primary/70" />
                <span>{tContact("email")}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-primary text-sm transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {t("resources")}
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-primary text-sm transition-colors"
                  >
                    {link.ns === "footer" ? t(link.key) : tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">
              {t("newsletter")}
            </h3>
            <p className="text-white/50 text-sm mb-4">
              {t("newsletterDesc")}
            </p>
            {subscribed ? (
              <p className="text-primary text-sm font-medium">✓ Subscribed!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("emailPlaceholder")}
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="p-2.5 gold-gradient rounded-lg text-dark hover:opacity-90 transition-opacity shrink-0"
                  aria-label={t("subscribe")}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="mt-8">
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {t("connect")}
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-primary hover:bg-white/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {t("copyright")}
          </p>
          <p className="text-white/30 text-xs">
            {t("madeWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
