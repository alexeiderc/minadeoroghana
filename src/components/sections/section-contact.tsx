"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";

export default function SectionContact() {
  const t = useTranslations("home.sections.contact");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contactGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
              {t("tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-ivory leading-tight mb-6">
              {t("title")}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mb-6" />
            <p className="text-stone leading-relaxed mb-8 max-w-lg">
              {t("description")}
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span className="text-sm text-ivory/70">Eastern Region, Ghana</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span className="text-sm text-ivory/70">info@mcquestgold.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-primary/10">
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span className="text-sm text-ivory/70">+233 (0) 30 274 1234</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 gold-gradient text-charcoal font-bold text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
            >
              {t("cta")}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square max-w-md mx-auto border border-primary/10 bg-graphite overflow-hidden">
              {/* Ghana map with location */}
              <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M180 40 L220 35 L260 50 L280 80 L300 120 L310 160 L300 200 L290 240 L280 280 L270 320 L250 360 L230 400 L200 440 L170 460 L140 440 L120 400 L100 360 L90 320 L80 280 L75 240 L80 200 L90 160 L100 120 L120 80 L140 50 Z"
                  fill="#2D2D2D"
                  stroke="#C8A24A"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="240" cy="200" r="6"
                  fill="#C8A24A"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
                />
                <motion.circle
                  cx="240" cy="200" r="12"
                  fill="none"
                  stroke="#C8A24A"
                  strokeWidth="1"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ delay: 2, duration: 2, repeat: Infinity }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
