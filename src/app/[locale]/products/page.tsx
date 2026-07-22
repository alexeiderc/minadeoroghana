"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Layers,
  Truck,
  ShieldCheck,
  Globe,
  MapPin,
} from "lucide-react";
import { products } from "@/data/products";
import SectionHeader from "@/components/section-header";
import ScrollReveal from "@/components/scroll-reveal";

const iconMap: Record<string, React.ReactNode> = {
  BarChart3: <BarChart3 className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Globe: <Globe className="w-8 h-8" />,
};

const partnerCities = [
  { name: "London", role: "LBMA Trading Hub" },
  { name: "Zurich", role: "Refining & Storage" },
  { name: "Dubai", role: "DMCC Gold Exchange" },
  { name: "Singapore", role: "APAC Distribution" },
];

export default function ProductsPage() {
  const t = useTranslations();

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 dark-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <BarChart3 className="w-4 h-4 text-primary" />
              <span className="text-sm text-white/70 font-medium">
                {t("products.heroBadge")}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-[family-name:var(--font-heading)] leading-tight mb-6"
          >
            <span className="gold-text">{t("products.title")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t("products.heroSubtitle")}
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("products.gridTitle")}
            subtitle={t("products.gridSubtitle")}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 orphan-center">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 rounded-2xl border border-gold-100/50 bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="p-4 rounded-xl gold-gradient/10 text-primary w-fit mb-6 group-hover:gold-gradient group-hover:text-dark transition-all duration-300">
                    {iconMap[product.icon]}
                  </div>

                  <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-3">
                    {t(product.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-custom/60 leading-relaxed mb-6">
                    {t(product.descriptionKey)}
                  </p>

                  <div className="border-t border-gold-100/50 pt-4">
                    <table className="w-full text-sm">
                      <tbody>
                        {product.specs.map((spec) => (
                          <tr key={spec.labelKey} className="border-b border-gold-50 last:border-0">
                            <td className="py-2.5 text-slate-custom/50 font-medium">
                              {t(spec.labelKey)}
                            </td>
                            <td className="py-2.5 text-right text-slate-custom font-semibold">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Purity Information */}
      <section className="section-padding bg-neutral-custom">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("products.purityTitle")}
            subtitle={t("products.puritySubtitle")}
          />

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  titleKey: "products.purityCertTitle",
                  descKey: "products.purityCertDesc",
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  titleKey: "products.purityAssayTitle",
                  descKey: "products.purityAssayDesc",
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  titleKey: "products.purityGlobalTitle",
                  descKey: "products.purityGlobalDesc",
                },
              ].map((item, index) => (
                <div
                  key={item.titleKey}
                  className="text-center p-8 rounded-2xl bg-white border border-gold-100/50"
                >
                  <div className="p-4 rounded-xl gold-gradient/10 text-primary w-fit mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-3">
                    {t(item.titleKey)}
                  </h3>
                  <p className="text-sm text-slate-custom/60 leading-relaxed">
                    {t(item.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* International Trading / Partner Cities */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("products.tradingTitle")}
            subtitle={t("products.tradingSubtitle")}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCities.map((city, index) => (
              <ScrollReveal key={city.name} delay={index * 0.1}>
                <div className="group p-6 rounded-2xl border border-gold-100/50 bg-white hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center">
                  <div className="p-3 rounded-xl gold-gradient/10 text-primary w-fit mx-auto mb-4 group-hover:gold-gradient group-hover:text-dark transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-1">
                    {city.name}
                  </h3>
                  <p className="text-xs text-slate-custom/50 font-medium uppercase tracking-wider">
                    {city.role}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding dark-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
              <span className="gold-text">{t("products.ctaTitle")}</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("products.ctaSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-gradient text-dark font-semibold hover:opacity-90 transition-opacity"
              >
                {t("products.ctaContact")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/investors"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 text-white font-semibold hover:border-primary/50 hover:bg-white/5 transition-all"
              >
                {t("products.ctaInvestors")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
