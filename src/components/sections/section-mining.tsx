"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionMining() {
  const t = useTranslations("home.sections.mining");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { icon: "01", label: t("step1") },
    { icon: "02", label: t("step2") },
    { icon: "03", label: t("step3") },
    { icon: "04", label: t("step4") },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
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

            {/* Process steps */}
            <div className="space-y-4">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-4 p-3 border border-primary/10 bg-primary/5"
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-primary/10 text-primary font-bold text-sm font-[family-name:var(--font-heading)]">
                    {step.icon}
                  </div>
                  <span className="text-sm text-ivory/80">{step.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mining operations illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 400 350" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Open pit mine layers */}
                <motion.path
                  d="M50 300 L100 250 L150 220 L200 200 L250 220 L300 250 L350 300"
                  fill="none"
                  stroke="#5C4632"
                  strokeWidth="40"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.3, duration: 1.5 }}
                />
                {/* Bench lines */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.line
                    key={i}
                    x1={80 + i * 15}
                    y1={280 - i * 18}
                    x2={320 - i * 15}
                    y2={280 - i * 18}
                    stroke="#8D8D8D"
                    strokeWidth="1"
                    opacity={0.3}
                    initial={{ pathLength: 0 }}
                    animate={inView ? { pathLength: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  />
                ))}
                {/* Gold vein */}
                <motion.path
                  d="M120 270 Q160 260 200 268 T280 262"
                  fill="none"
                  stroke="#C8A24A"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.5, duration: 1 }}
                />
                {/* Truck */}
                <motion.g
                  initial={{ x: -50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 2, duration: 1 }}
                >
                  <rect x="280" y="230" width="40" height="25" rx="3" fill="#2D2D2D" stroke="#C8A24A" strokeWidth="1"/>
                  <rect x="320" y="240" width="15" height="15" rx="2" fill="#181818" stroke="#C8A24A" strokeWidth="0.5"/>
                  <circle cx="295" cy="260" r="5" fill="#181818" stroke="#C8A24A" strokeWidth="1"/>
                  <circle cx="325" cy="260" r="5" fill="#181818" stroke="#C8A24A" strokeWidth="1"/>
                </motion.g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
