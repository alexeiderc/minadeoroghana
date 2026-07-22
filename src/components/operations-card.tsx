"use client";

import type { LucideIcon } from "lucide-react";
import ScrollReveal from "./scroll-reveal";

interface OperationsCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats?: { value: number; suffix: string; label: string }[];
}

export default function OperationsCard({
  icon: Icon,
  title,
  description,
  stats,
}: OperationsCardProps) {
  return (
    <ScrollReveal>
      <div className="group relative bg-white rounded-2xl p-8 border border-gold-100/50 hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
        <div className="flex items-start gap-5 mb-6">
          <div className="shrink-0 w-14 h-14 rounded-xl gold-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-dark" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-custom font-[family-name:var(--font-heading)] mb-2">
              {title}
            </h3>
            <p className="text-slate-custom/60 leading-relaxed text-sm">
              {description}
            </p>
          </div>
        </div>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gold-100/50">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-lg font-bold text-primary">
                  {stat.value.toLocaleString("en-US")}{stat.suffix}
                </p>
                <p className="text-xs text-slate-custom/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
