"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionResource() {
  const t = useTranslations("home.sections.resource");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "50k+", label: t("ounces") },
    { value: "2.1g/t", label: t("grade") },
    { value: "85%", label: t("recovery") },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-graphite overflow-hidden">
      {/* Background data grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dataGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#C8A24A"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dataGrid)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Data visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 400 350" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Scatter plot - drill hole data */}
                {[
                  { x: 80, y: 60, r: 4, grade: "2.4" },
                  { x: 120, y: 90, r: 6, grade: "3.1" },
                  { x: 160, y: 70, r: 5, grade: "2.8" },
                  { x: 200, y: 110, r: 8, grade: "4.2" },
                  { x: 240, y: 80, r: 5, grade: "2.6" },
                  { x: 280, y: 100, r: 7, grade: "3.8" },
                  { x: 320, y: 75, r: 4, grade: "2.2" },
                  { x: 100, y: 140, r: 6, grade: "3.0" },
                  { x: 140, y: 160, r: 9, grade: "5.1" },
                  { x: 180, y: 150, r: 7, grade: "3.5" },
                  { x: 220, y: 170, r: 5, grade: "2.9" },
                  { x: 260, y: 145, r: 8, grade: "4.5" },
                  { x: 300, y: 165, r: 6, grade: "3.2" },
                  { x: 120, y: 210, r: 7, grade: "3.6" },
                  { x: 160, y: 230, r: 10, grade: "5.8" },
                  { x: 200, y: 220, r: 8, grade: "4.0" },
                  { x: 240, y: 240, r: 6, grade: "3.3" },
                  { x: 280, y: 215, r: 9, grade: "4.8" },
                ].map((point, i) => (
                  <motion.g key={i}>
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r={point.r}
                      fill="#C8A24A"
                      opacity={0.6}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.4, ease: "backOut" }}
                    />
                    <motion.circle
                      cx={point.x}
                      cy={point.y}
                      r={point.r + 4}
                      fill="none"
                      stroke="#C8A24A"
                      strokeWidth="0.5"
                      opacity={0.3}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                    />
                  </motion.g>
                ))}
                {/* Axes */}
                <line x1="60" y1="280" x2="360" y2="280" stroke="#8D8D8D" strokeWidth="1" opacity="0.3"/>
                <line x1="60" y1="40" x2="60" y2="280" stroke="#8D8D8D" strokeWidth="1" opacity="0.3"/>
                <text x="210" y="310" textAnchor="middle" fill="#8D8D8D" fontSize="10" fontFamily="var(--font-body)">Easting (m)</text>
                <text x="30" y="160" textAnchor="middle" fill="#8D8D8D" fontSize="10" fontFamily="var(--font-body)" transform="rotate(-90 30 160)">Northing (m)</text>
                {/* Legend */}
                <text x="300" y="310" textAnchor="middle" fill="#8D8D8D" fontSize="9" fontFamily="var(--font-body)">Circle size = grade (g/t)</text>
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
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  className="text-center p-4 border border-primary/10 bg-primary/5"
                >
                  <div className="text-xl font-bold text-primary font-[family-name:var(--font-heading)]">{stat.value}</div>
                  <div className="text-[10px] text-stone/60 uppercase tracking-wider mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
