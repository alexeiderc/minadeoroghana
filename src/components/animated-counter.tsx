"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    }

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  const display = decimals > 0
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString("en-US");

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}
