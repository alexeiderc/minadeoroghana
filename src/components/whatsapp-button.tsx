"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import clsx from "clsx";

const WHATSAPP_NUMBER = "233570551514";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Mc%20Quest`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY > lastScrollY && currentY > 100) {
            setVisible(false);
          } else {
            setVisible(true);
          }
          setLastScrollY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className={clsx(
        "fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-full",
        "bg-[#25D366] text-white font-semibold text-sm shadow-lg shadow-[#25D366]/25",
        "hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105",
        "active:scale-95 transition-all duration-300 ease-out",
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Contáctanos</span>
    </a>
  );
}
