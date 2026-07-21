"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import clsx from "clsx";

interface GalleryItem {
  id: string;
  gradient: string;
  title: string;
  span?: "tall" | "wide" | "normal";
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            className={clsx(
              "break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl",
              item.span === "tall" && "row-span-2",
              item.span === "wide" && "col-span-2"
            )}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(item)}
          >
            <div
              className={clsx(
                "w-full bg-gradient-to-br",
                item.gradient,
                item.span === "tall" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-300 flex items-end">
              <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{item.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full aspect-video bg-gradient-to-br ${selected.gradient} rounded-2xl`} />
              <p className="text-white text-center mt-4 text-lg font-semibold">{selected.title}</p>
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
