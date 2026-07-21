"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import clsx from "clsx";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

function TimelineItem({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center mb-16 last:mb-0">
      {/* Desktop: alternating layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] w-full items-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={clsx(isLeft ? "text-right" : "order-3")}
        >
          <div
            className={clsx(
              "inline-block bg-white rounded-2xl p-6 border border-gold-100/50 shadow-sm hover:shadow-lg transition-shadow max-w-md",
              isLeft ? "ml-auto" : "mr-auto"
            )}
          >
            <span className="text-primary font-bold text-sm">{event.year}</span>
            <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mt-1 mb-2">
              {event.title}
            </h3>
            <p className="text-slate-custom/60 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>
        </motion.div>

        <div className="relative order-2 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="w-4 h-4 rounded-full gold-gradient border-4 border-white shadow-md z-10"
          />
        </div>

        <div className={clsx("order-1", isLeft && "order-3")} />
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex gap-4 w-full">
        <div className="flex flex-col items-center shrink-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="w-3 h-3 rounded-full gold-gradient border-3 border-white shadow-md z-10 shrink-0"
          />
          <div className="w-px flex-1 bg-gold-200/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-5 border border-gold-100/50 shadow-sm mb-2"
        >
          <span className="text-primary font-bold text-sm">{event.year}</span>
          <h3 className="text-lg font-bold text-slate-custom font-[family-name:var(--font-heading)] mt-1 mb-2">
            {event.title}
          </h3>
          <p className="text-slate-custom/60 text-sm leading-relaxed">
            {event.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function Timeline({ events }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="relative">
      {/* Vertical gold line - desktop center */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent -translate-x-px" />

      {events.map((event, index) => (
        <TimelineItem key={event.year} event={event} index={index} />
      ))}
    </div>
  );
}
