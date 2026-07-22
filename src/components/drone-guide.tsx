"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpoint}px)`);
    setIsMobile(!mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

export default function DroneGuide() {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  const x = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], ["5%", "25%", "70%", "50%", "80%", "30%", "5%"]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1], ["15vh", "25vh", "40vh", "55vh", "65vh", "80vh", "15vh"]);
  const rotate = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, -3, 2, -2, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0.9, 1, 1.05, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.95, 1], [0, 1, 1, 0]);

  useEffect(() => {
    return opacity.on("change", (v) => setIsVisible(v > 0.01));
  }, [opacity]);

  const propellerRef1 = useRef<SVGGElement>(null);
  const propellerRef2 = useRef<SVGGElement>(null);
  const propellerRef3 = useRef<SVGGElement>(null);
  const propellerRef4 = useRef<SVGGElement>(null);

  useEffect(() => {
    if (isMobile || !isVisible) return;
    let animId: number;
    let angle = 0;
    function animate() {
      angle += 8;
      const el1 = propellerRef1.current;
      const el2 = propellerRef2.current;
      const el3 = propellerRef3.current;
      const el4 = propellerRef4.current;
      if (el1) el1.style.transform = `rotate(${angle}deg)`;
      if (el2) el2.style.transform = `rotate(${-angle}deg)`;
      if (el3) el3.style.transform = `rotate(${angle + 45}deg)`;
      if (el4) el4.style.transform = `rotate(${-angle - 45}deg)`;
      animId = requestAnimationFrame(animate);
    }
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="fixed z-40 pointer-events-none will-change-transform"
      aria-hidden="true"
    >
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_4px_20px_rgba(200,162,74,0.3)]"
      >
        <rect x="40" y="22" width="40" height="14" rx="4" fill="#2D2D2D" stroke="#C8A24A" strokeWidth="1"/>
        <rect x="44" y="25" width="12" height="8" rx="2" fill="#181818" stroke="#C8A24A" strokeWidth="0.5"/>
        <circle cx="50" cy="29" r="3" fill="#181818" stroke="#C8A24A" strokeWidth="0.5"/>
        <circle cx="50" cy="29" r="1.5" fill="#C8A24A" opacity="0.6"/>
        <line x1="42" y1="26" x2="15" y2="20" stroke="#C8A24A" strokeWidth="1.5"/>
        <line x1="78" y1="26" x2="105" y2="20" stroke="#C8A24A" strokeWidth="1.5"/>
        <line x1="42" y1="32" x2="15" y2="38" stroke="#C8A24A" strokeWidth="1.5"/>
        <line x1="78" y1="32" x2="105" y2="38" stroke="#C8A24A" strokeWidth="1.5"/>
        <circle cx="15" cy="20" r="3" fill="#2D2D2D" stroke="#C8A24A" strokeWidth="1"/>
        <circle cx="105" cy="20" r="3" fill="#2D2D2D" stroke="#C8A24A" strokeWidth="1"/>
        <circle cx="15" cy="38" r="3" fill="#2D2D2D" stroke="#C8A24A" strokeWidth="1"/>
        <circle cx="105" cy="38" r="3" fill="#2D2D2D" stroke="#C8A24A" strokeWidth="1"/>
        <g ref={propellerRef1} style={{ transformOrigin: "15px 20px" }}>
          <ellipse cx="15" cy="20" rx="12" ry="1.5" fill="#C8A24A" opacity="0.5"/>
        </g>
        <g ref={propellerRef2} style={{ transformOrigin: "105px 20px" }}>
          <ellipse cx="105" cy="20" rx="12" ry="1.5" fill="#C8A24A" opacity="0.5"/>
        </g>
        <g ref={propellerRef3} style={{ transformOrigin: "15px 38px" }}>
          <ellipse cx="15" cy="38" rx="12" ry="1.5" fill="#C8A24A" opacity="0.5"/>
        </g>
        <g ref={propellerRef4} style={{ transformOrigin: "105px 38px" }}>
          <ellipse cx="105" cy="38" rx="12" ry="1.5" fill="#C8A24A" opacity="0.5"/>
        </g>
        <line x1="44" y1="36" x2="38" y2="46" stroke="#8D8D8D" strokeWidth="1"/>
        <line x1="76" y1="36" x2="82" y2="46" stroke="#8D8D8D" strokeWidth="1"/>
        <line x1="36" y1="46" x2="42" y2="46" stroke="#8D8D8D" strokeWidth="1.5"/>
        <line x1="78" y1="46" x2="84" y2="46" stroke="#8D8D8D" strokeWidth="1.5"/>
        <path d="M50 36 L40 58 L60 58 Z" fill="url(#scanBeam)" opacity="0.3"/>
        <defs>
          <linearGradient id="scanBeam" x1="50" y1="36" x2="50" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C8A24A" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#C8A24A" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
