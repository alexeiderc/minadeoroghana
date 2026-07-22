"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionGeology() {
  const t = useTranslations("home.sections.geology");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const layers = [
    { color: "#5C4632", label: "Topsoil", y: 0, delay: 0.3 },
    { color: "#6B541C", label: "Laterite", y: 40, delay: 0.5 },
    { color: "#8A6D24", label: "Saprolite", y: 80, delay: 0.7 },
    { color: "#A67C2E", label: "Weathered Rock", y: 120, delay: 0.9 },
    { color: "#C8A24A", label: "Gold Bearing", y: 160, delay: 1.1 },
    { color: "#2D2D2D", label: "Bedrock", y: 200, delay: 1.3 },
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
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-ivory">{t("method")}</div>
                <div className="text-xs text-stone/60">{t("methodDesc")}</div>
              </div>
            </div>
          </motion.div>

          {/* Geology cross-section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative max-w-md mx-auto">
              <svg viewBox="0 0 400 300" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {layers.map((layer, i) => (
                  <g key={i}>
                    <motion.rect
                      x="40"
                      y={30 + layer.y}
                      width="320"
                      height="38"
                      rx="2"
                      fill={layer.color}
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ delay: layer.delay, duration: 0.6, ease: "easeOut" }}
                      style={{ transformOrigin: "40px 0" }}
                    />
                    <motion.text
                      x="200"
                      y={54 + layer.y}
                      textAnchor="middle"
                      fill="#F5F2EB"
                      fontSize="11"
                      fontFamily="var(--font-body)"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 0.8 } : {}}
                      transition={{ delay: layer.delay + 0.3, duration: 0.5 }}
                    >
                      {layer.label}
                    </motion.text>
                  </g>
                ))}
                {/* Gold vein indicators */}
                <motion.path
                  d="M80 190 Q120 185 160 195 T240 188 T320 192"
                  fill="none"
                  stroke="#C8A24A"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={inView ? { pathLength: 1 } : {}}
                  transition={{ delay: 1.5, duration: 1.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
