"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useRef } from "react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  return (
    <section ref={ref} className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-graphite to-charcoal" />
        {/* Topographic line pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0 100 Q50 80 100 100 T200 100" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
                <path d="M0 130 Q50 110 100 130 T200 130" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
                <path d="M0 70 Q50 50 100 70 T200 70" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
                <path d="M0 160 Q50 140 100 160 T200 160" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
                <path d="M0 40 Q50 20 100 40 T200 40" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)"/>
          </svg>
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/20 bg-primary/5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
            Eastern Region — Ghana
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] leading-[1.15] mb-6 tracking-wide"
        >
          <span className="gold-shimmer">MC QUEST</span>
          <br />
          <span className="text-ivory/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[0.15em]">
            GOLD & DIAMOND MINING
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-base sm:text-lg text-stone max-w-xl mx-auto mb-12 leading-relaxed tracking-wide"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/operations"
            className="group inline-flex items-center gap-3 px-8 py-3.5 gold-gradient text-charcoal font-bold text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
          >
            {t("cta1")}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/30 text-primary font-bold text-sm uppercase tracking-[0.15em] hover:bg-primary/5 transition-all"
          >
            {t("cta2")}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-stone/40">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
