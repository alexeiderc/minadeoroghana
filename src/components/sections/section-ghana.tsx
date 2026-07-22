"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionGhana() {
  const t = useTranslations("home.sections.ghana");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-[auto] lg:min-h-screen py-20 lg:py-0 flex items-center bg-charcoal overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 block">
              {t("tag")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-[family-name:var(--font-heading)] text-ivory leading-tight mb-4 lg:mb-6">
              {t("title")}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mb-6" />
            <p className="text-stone leading-relaxed mb-8 max-w-lg">
              {t("description")}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">2,670 km²</div>
                <div className="text-xs text-stone/60 uppercase tracking-wider mt-1">{t("area")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">12+</div>
                <div className="text-xs text-stone/60 uppercase tracking-wider mt-1">{t("concessions")}</div>
              </div>
            </div>
          </motion.div>

          {/* Map visualization */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Ghana outline - simplified SVG */}
              <svg viewBox="0 0 400 500" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ghanaFill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2D2D2D"/>
                    <stop offset="100%" stopColor="#181818"/>
                  </linearGradient>
                </defs>
                {/* Simplified Ghana shape */}
                <motion.path
                  d="M180 40 L220 35 L260 50 L280 80 L300 120 L310 160 L300 200 L290 240 L280 280 L270 320 L250 360 L230 400 L200 440 L170 460 L140 440 L120 400 L100 360 L90 320 L80 280 L75 240 L80 200 L90 160 L100 120 L120 80 L140 50 Z"
                  fill="url(#ghanaFill)"
                  stroke="#C8A24A"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                {/* Eastern Region marker */}
                <motion.circle
                  cx="240" cy="200" r="8"
                  fill="#C8A24A"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />
                <motion.circle
                  cx="240" cy="200" r="16"
                  fill="none"
                  stroke="#C8A24A"
                  strokeWidth="1"
                  opacity="0.4"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ delay: 2, duration: 2, repeat: Infinity }}
                />
                {/* Label */}
                <motion.text
                  x="260" y="195"
                  fill="#C8A24A"
                  fontSize="12"
                  fontFamily="var(--font-heading)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 2 }}
                >
                  Eastern Region
                </motion.text>
                <motion.text
                  x="260" y="210"
                  fill="#8D8D8D"
                  fontSize="10"
                  fontFamily="var(--font-body)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 2.2 }}
                >
                  MC QUEST Concessions
                </motion.text>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
