"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionLidar() {
  const t = useTranslations("home.sections.lidar");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-[auto] lg:min-h-screen py-20 lg:py-0 flex items-center bg-graphite overflow-hidden">
      {/* Topographic contour background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contours" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="150" cy="150" r="30" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
              <circle cx="150" cy="150" r="60" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
              <circle cx="150" cy="150" r="90" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
              <circle cx="150" cy="150" r="120" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
              <circle cx="150" cy="150" r="150" fill="none" stroke="#C8A24A" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contours)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LiDAR visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              {/* Terrain cross-section */}
              <svg viewBox="0 0 500 375" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Ground layers */}
                <motion.path
                  d="M0 280 Q50 260 100 270 T200 250 T300 260 T400 240 T500 255 L500 375 L0 375 Z"
                  fill="#3D2E1C"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.6 } : {}}
                  transition={{ delay: 0.5, duration: 1 }}
                />
                <motion.path
                  d="M0 260 Q80 240 160 250 T320 235 T500 245 L500 375 L0 375 Z"
                  fill="#4D3C24"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 0.5 } : {}}
                  transition={{ delay: 0.7, duration: 1 }}
                />
                {/* Surface contour lines */}
                <motion.path
                  d="M0 220 Q50 200 100 210 T200 190 T300 200 T400 185 T500 195"
                  fill="none"
                  stroke="#C8A24A"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.3, duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M0 200 Q70 180 140 190 T280 175 T420 182 T500 175"
                  fill="none"
                  stroke="#C8A24A"
                  strokeWidth="1"
                  opacity="0.6"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                />
                {/* Scanning beam from above */}
                <motion.line
                  x1="250" y1="0" x2="250" y2="210"
                  stroke="#C8A24A"
                  strokeWidth="2"
                  opacity="0.8"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1, duration: 1 }}
                />
                <motion.line
                  x1="200" y1="0" x2="220" y2="200"
                  stroke="#C8A24A"
                  strokeWidth="1"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                <motion.line
                  x1="300" y1="0" x2="280" y2="200"
                  stroke="#C8A24A"
                  strokeWidth="1"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.4, duration: 1 }}
                />
                {/* Data points */}
                {[100, 150, 200, 250, 300, 350, 400].map((x, i) => (
                  <motion.circle
                    key={x}
                    cx={x}
                    cy={200 + Math.sin(x * 0.02) * 15}
                    r="3"
                    fill="#C8A24A"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
                  />
                ))}
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
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold font-[family-name:var(--font-heading)] text-ivory leading-tight mb-4 lg:mb-6">
              {t("title")}
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent mb-6" />
            <p className="text-stone leading-relaxed mb-8 max-w-lg">
              {t("description")}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">3D</div>
                <div className="text-xs text-stone/60 uppercase tracking-wider mt-1">{t("model")}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">5cm</div>
                <div className="text-xs text-stone/60 uppercase tracking-wider mt-1">{t("resolution")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
