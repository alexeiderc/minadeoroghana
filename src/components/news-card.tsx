"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  readMoreText: string;
  gradient?: string;
}

const categoryColors: Record<string, string> = {
  operations: "bg-blue-500/20 text-blue-300",
  corporate: "bg-primary/20 text-primary",
  sustainability: "bg-emerald-500/20 text-emerald-300",
  financial: "bg-purple-500/20 text-purple-300",
};

export default function NewsCard({
  title,
  excerpt,
  date,
  category,
  slug,
  readMoreText,
  gradient = "from-gold-700 via-gold-500 to-gold-800",
}: NewsCardProps) {
  return (
    <ScrollReveal>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-2xl overflow-hidden border border-gold-100/50 hover:shadow-xl transition-shadow duration-300"
      >
        <div className={`h-48 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors duration-300" />
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[category] || "bg-white/20 text-white"}`}
          >
            {category}
          </span>
        </div>

        <div className="p-6">
          <time className="text-xs text-slate-custom/40 font-medium uppercase tracking-wider">
            {date}
          </time>
          <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-custom/60 leading-relaxed line-clamp-3 mb-4">
            {excerpt}
          </p>
          <Link
            href={`/news/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            {readMoreText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.article>
    </ScrollReveal>
  );
}
