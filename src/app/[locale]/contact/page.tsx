"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";
import ContactForm from "@/components/contact-form";
import MapSection from "@/components/map-section";

const contactCards = [
  { icon: MapPin, key: "headquarters", value: "address", href: null },
  { icon: Phone, key: "phoneLabel", value: "phone", href: "tel:+233301234567" },
  { icon: Mail, key: "emailLabel", value: "email", href: "mailto:info@goldminecorp.com" },
  {
    icon: MessageCircle,
    key: "whatsappLabel",
    value: "whatsapp",
    href: "https://wa.me/233301234567",
  },
  { icon: Clock, key: "hoursLabel", value: "hours", href: null },
];

const officeMarker = [
  {
    id: "hq",
    name: "GoldMine Corp HQ",
    type: "Headquarters",
    lat: 6.6019,
    lng: -0.1870,
    description: "15 Gold Coast Avenue, Airport City, Accra, Ghana",
  },
];

export default function ContactPage() {
  const t = useTranslations("contact");
  const tNav = useTranslations("nav");
  const tCommon = useTranslations("common");

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-white/70 font-medium">{tNav("contact")}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-[1.1] mb-6"
          >
            <span className="gold-text">{t("title")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Two Column: Form + Info */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                {t("formTitle")}
              </h2>
              <p className="text-slate-custom/60 mb-8 leading-relaxed">
                {t("formSubtitle")}
              </p>
              <ContactForm />
            </motion.div>

            {/* Right: Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
                {t("infoTitle")}
              </h2>
              <p className="text-slate-custom/60 mb-8 leading-relaxed">
                {t("infoSubtitle")}
              </p>

              {contactCards.map((card) => {
                const Icon = card.icon;
                const content = (
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-gold-50/50 border border-gold-100/40 hover:border-primary/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-dark" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-custom mb-1">
                        {t(`info.${card.key}`)}
                      </p>
                      <p className="text-sm text-slate-custom/60 break-words">
                        {t(`info.${card.value}`)}
                      </p>
                    </div>
                  </div>
                );

                if (card.href) {
                  return (
                    <a
                      key={card.key}
                      href={card.href}
                      target={card.href.startsWith("http") ? "_blank" : undefined}
                      rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={card.key}>{content}</div>;
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-4">
              {t("mapTitle")}
            </h2>
            <div className="line-gold mx-auto mb-4" />
            <p className="text-slate-custom/60 max-w-xl mx-auto">
              {t("mapSubtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <MapSection markers={officeMarker} center={[6.6019, -0.1870]} zoom={14} />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl dark-gradient p-12 sm:p-16 text-center"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
                <span className="gold-text">{t("ctaTitle")}</span>
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
                {t("ctaSubtitle")}
              </p>
              <Link
                href="/operations"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-dark font-semibold text-base hover:opacity-90 transition-opacity"
              >
                {tCommon("learnMore")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
