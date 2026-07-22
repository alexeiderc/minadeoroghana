"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionCorporate() {
  const t = useTranslations("home.sections.corporate");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    { icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5", label: t("pillar1"), desc: t("pillar1Desc") },
    { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: t("pillar2"), desc: t("pillar2Desc") },
    { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", label: t("pillar3"), desc: t("pillar3Desc") },
  ];

  return (
    <section ref={ref} className="relative min-h-[auto] lg:min-h-screen py-20 lg:py-0 flex items-center bg-graphite overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Corporate visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 400 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Tree / growth visualization */}
                <motion.line
                  x1="200" y1="280" x2="200" y2="100"
                  stroke="#5C4632" strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.3, duration: 1 }}
                />
                {/* Branches with leaves */}
                {[
                  { x1: 200, y1: 200, x2: 140, y2: 160 },
                  { x1: 200, y1: 200, x2: 260, y2: 160 },
                  { x1: 200, y1: 160, x2: 120, y2: 120 },
                  { x1: 200, y1: 160, x2: 280, y2: 120 },
                  { x1: 200, y1: 120, x2: 160, y2: 80 },
                  { x1: 200, y1: 120, x2: 240, y2: 80 },
                ].map((branch, i) => (
                  <motion.line
                    key={i}
                    x1={branch.x1} y1={branch.y1} x2={branch.x2} y2={branch.y2}
                    stroke="#C8A24A" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  />
                ))}
                {/* Leaf circles */}
                {[
                  { cx: 140, cy: 155, r: 15 },
                  { cx: 260, cy: 155, r: 15 },
                  { cx: 120, cy: 115, r: 12 },
                  { cx: 280, cy: 115, r: 12 },
                  { cx: 160, cy: 75, r: 10 },
                  { cx: 240, cy: 75, r: 10 },
                ].map((leaf, i) => (
                  <motion.circle
                    key={i}
                    cx={leaf.cx} cy={leaf.cy} r={leaf.r}
                    fill="#C8A24A" opacity={0.15}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.4, ease: "backOut" }}
                  />
                ))}
                {/* Ground */}
                <motion.path
                  d="M100 280 Q200 270 300 280"
                  fill="none" stroke="#5C4632" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Text + pillars */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
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
            <div className="space-y-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 border border-primary/10 bg-primary/5"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={pillar.icon}/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ivory">{pillar.label}</div>
                    <div className="text-xs text-stone/60 mt-1">{pillar.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
