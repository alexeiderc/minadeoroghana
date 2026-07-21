"use client";

import type { LucideIcon } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

interface SustainabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  metric?: string;
}

export default function SustainabilityCard({
  icon: Icon,
  title,
  description,
  metric,
}: SustainabilityCardProps) {
  return (
    <ScrollReveal>
      <div className="group relative bg-white rounded-2xl p-8 border border-gold-100/30 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 h-full">
        <div className="w-12 h-12 rounded-lg bg-gold-50 flex items-center justify-center mb-5 group-hover:bg-gold-100 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-3">
          {title}
        </h3>

        <p className="text-slate-custom/60 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {metric && (
          <div className="pt-4 border-t border-gold-100/30">
            <span className="text-primary font-semibold text-sm">{metric}</span>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
