"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className={`relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-gray-200/50 p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
