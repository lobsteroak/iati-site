"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function DashboardCard() {
  const [value, setValue] = useState(0);
  const targetValue = 80376;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setValue(targetValue);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full max-w-2xl mx-auto overflow-hidden"
    >
      {/* Outer container with shadow */}
      <div className="rounded-3xl bg-gradient-to-b from-gray-200 to-gray-300 p-[1px] shadow-2xl shadow-gray-400/30">
        {/* Main card */}
        <div className="rounded-3xl bg-gradient-to-b from-white to-gray-50 p-6 lg:p-8 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">
              Redução de custos
            </span>
            <span className="text-gray-500 text-sm">
              últimos 60 dias
            </span>
          </div>

          {/* Chart area */}
          <div className="relative h-48 mb-6">
            {/* Value display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-4 left-1/3 text-gray-900 text-2xl lg:text-3xl font-bold"
            >
              {value.toLocaleString('pt-PT')}€
            </motion.div>

            {/* SVG Chart */}
            <svg
              viewBox="0 0 400 150"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <line
                  key={i}
                  x1="0"
                  y1={30 + i * 25}
                  x2="400"
                  y2={30 + i * 25}
                  stroke="rgba(0,0,0,0.05)"
                  strokeDasharray="4 4"
                />
              ))}

              {/* Gradient definition */}
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(17, 24, 39, 0.15)" />
                  <stop offset="100%" stopColor="rgba(17, 24, 39, 0)" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <motion.path
                d="M 0 120 Q 50 110, 100 90 T 200 70 T 300 85 T 400 50 L 400 150 L 0 150 Z"
                fill="url(#chartGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              />

              {/* Line */}
              <motion.path
                d="M 0 120 Q 50 110, 100 90 T 200 70 T 300 85 T 400 50"
                fill="none"
                stroke="rgba(17, 24, 39, 0.4)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
              />

              {/* Interactive point */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <circle cx="200" cy="70" r="12" fill="rgba(0,0,0,0.05)" />
                <circle cx="200" cy="70" r="8" fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                <circle cx="200" cy="70" r="4" fill="#111827" />
              </motion.g>
            </svg>
          </div>

          {/* Bottom section - Client review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center justify-between pt-6 border-t border-gray-200"
          >
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium">Cliente</span>
              {/* Verified badge */}
              <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.svg
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + star * 0.1, duration: 0.2 }}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </motion.svg>
                ))}
              </div>

              {/* Button */}
              <span className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">
                Cliente satisfeito
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
