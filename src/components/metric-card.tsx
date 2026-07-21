"use client";

import AnimatedCounter from "./animated-counter";

interface MetricCardProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export default function MetricCard({ value, suffix = "", label, decimals = 0 }: MetricCardProps) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white border border-gold-100/50 hover:border-primary/30 transition-colors duration-300 group">
      <div className="text-4xl sm:text-5xl font-bold gold-text font-[family-name:var(--font-heading)] mb-3">
        <AnimatedCounter end={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="w-10 h-0.5 gold-gradient mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
      <p className="text-slate-custom/60 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
