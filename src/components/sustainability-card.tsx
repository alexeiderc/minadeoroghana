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
      <div className="group relative bg-white rounded-2xl p-6 border border-gold-100/30 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 w-12 h-12 rounded-xl gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shadow-primary/10">
            <Icon className="w-5 h-5 text-dark" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-1">
              {title}
            </h3>
            {metric && (
              <span className="text-primary font-semibold text-xs">{metric}</span>
            )}
          </div>
        </div>

        <p className="text-slate-custom/60 text-sm leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </ScrollReveal>
  );
}
