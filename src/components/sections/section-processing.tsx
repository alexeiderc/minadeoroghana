"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionProcessing() {
  const t = useTranslations("home.sections.processing");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-graphite overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Processing plant illustration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 400 350" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Crusher */}
                <motion.rect
                  x="40" y="180" width="60" height="80" rx="4"
                  fill="#2D2D2D" stroke="#C8A24A" strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.text
                  x="70" y="225" textAnchor="middle" fill="#C8A24A" fontSize="9" fontFamily="var(--font-body)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Crusher
                </motion.text>

                {/* Conveyor */}
                <motion.line
                  x1="100" y1="220" x2="160" y2="180"
                  stroke="#8D8D8D" strokeWidth="2" strokeDasharray="4 3"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />

                {/* Mill */}
                <motion.circle
                  cx="190" cy="180" r="30"
                  fill="none" stroke="#C8A24A" strokeWidth="1.5"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
                />
                <motion.text
                  x="190" y="184" textAnchor="middle" fill="#C8A24A" fontSize="9" fontFamily="var(--font-body)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  Ball Mill
                </motion.text>

                {/* Leach tanks */}
                {[0, 1, 2].map((i) => (
                  <motion.g key={i}>
                    <motion.rect
                      x={270 + i * 40} y="160" width="30" height="100" rx="15"
                      fill="none" stroke="#C8A24A" strokeWidth="1.5"
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : {}}
                      transition={{ delay: 1.3 + i * 0.15, duration: 0.5 }}
                      style={{ transformOrigin: `${285 + i * 40}px 260px` }}
                    />
                  </motion.g>
                ))}
                <motion.text
                  x="315" y="280" textAnchor="middle" fill="#C8A24A" fontSize="8" fontFamily="var(--font-body)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.8 }}
                >
                  CIL Tanks
                </motion.text>

                {/* Flow arrows */}
                <motion.path
                  d="M160 180 L155 175 L160 170"
                  fill="none" stroke="#C8A24A" strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                />
                <motion.path
                  d="M220 180 L230 175 L220 170"
                  fill="none" stroke="#C8A24A" strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
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
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-primary/10 bg-primary/5">
                <div className="text-sm font-bold text-ivory">{t("environment")}</div>
                <div className="text-xs text-stone/60 mt-1">{t("environmentDesc")}</div>
              </div>
              <div className="p-4 border border-primary/10 bg-primary/5">
                <div className="text-sm font-bold text-ivory">{t("efficiency")}</div>
                <div className="text-xs text-stone/60 mt-1">{t("efficiencyDesc")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
