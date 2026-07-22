"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionGold() {
  const t = useTranslations("home.sections.gold");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Gold particle background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${10 + (i * 4.2) % 80}%`,
              top: `${15 + (i * 7.3) % 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
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
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">99.9%</div>
                <div className="text-xs text-stone/60 uppercase tracking-wider mt-1">{t("purity")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">LBMA</div>
                <div className="text-xs text-stone/60 uppercase tracking-wider mt-1">{t("standard")}</div>
              </div>
            </div>
          </motion.div>

          {/* Gold bar visualization */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 400 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#C8A24A"/>
                    <stop offset="30%" stopColor="#E8D48B"/>
                    <stop offset="60%" stopColor="#C8A24A"/>
                    <stop offset="100%" stopColor="#A67C2E"/>
                  </linearGradient>
                  <linearGradient id="goldBarSide" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A67C2E"/>
                    <stop offset="100%" stopColor="#8A6D24"/>
                  </linearGradient>
                </defs>
                {/* Gold bar - front face */}
                <motion.path
                  d="M100 180 L150 120 L300 120 L350 180 Z"
                  fill="url(#goldBar)"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                {/* Gold bar - side */}
                <motion.path
                  d="M350 180 L380 200 L380 240 L350 220 Z"
                  fill="url(#goldBarSide)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
                {/* Gold bar - top */}
                <motion.path
                  d="M150 120 L180 100 L330 100 L300 120 Z"
                  fill="#E8D48B"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
                {/* Gold bar - bottom */}
                <motion.path
                  d="M100 180 L130 200 L380 200 L350 180 Z"
                  fill="#8A6D24"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.5 }}
                />
                {/* Engraving */}
                <motion.text
                  x="225" y="155" textAnchor="middle" fill="#181818" fontSize="14" fontFamily="var(--font-heading)" fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.6 } : {}}
                  transition={{ delay: 1.2 }}
                >
                  MC QUEST
                </motion.text>
                <motion.text
                  x="225" y="172" textAnchor="middle" fill="#181818" fontSize="9" fontFamily="var(--font-body)"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.4 } : {}}
                  transition={{ delay: 1.4 }}
                >
                  99.9% Au — 1 kg
                </motion.text>
                {/* Reflection */}
                <motion.path
                  d="M100 180 L350 180 L380 200 L130 200 Z"
                  fill="#C8A24A"
                  opacity={0.1}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.1 } : {}}
                  transition={{ delay: 1 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
