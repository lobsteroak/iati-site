"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

function Stat({ value, suffix = "", prefix = "", label, delay = 0 }: StatProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const controls = animate(count, value, {
          duration: 2,
          ease: "easeOut",
        });
        return () => controls.stop();
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, count, delay]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl lg:text-5xl font-bold mb-2">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-muted text-sm">{label}</div>
    </motion.div>
  );
}

interface StatsCounterProps {
  stats: Array<{
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
  }>;
  className?: string;
}

export function StatsCounter({ stats, className = "" }: StatsCounterProps) {
  return (
    <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ${className}`}>
      {stats.map((stat, index) => (
        <Stat
          key={index}
          value={stat.value}
          suffix={stat.suffix}
          prefix={stat.prefix}
          label={stat.label}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}
