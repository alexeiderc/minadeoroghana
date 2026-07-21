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
    <div className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors duration-300 group min-h-[180px]">
      <div className="text-4xl sm:text-5xl font-bold gold-text font-[family-name:var(--font-heading)] mb-3">
        <AnimatedCounter end={value} suffix={suffix} decimals={decimals} />
      </div>
      <div className="w-12 h-0.5 gold-gradient mx-auto mb-3 group-hover:w-16 transition-all duration-300" />
      <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}
