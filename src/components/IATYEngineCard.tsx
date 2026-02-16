"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IATYEngineCard() {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [pulseIndex, setPulseIndex] = useState(0);

  // Animate nodes sequentially
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 12);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // Add nodes progressively
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNodes.length < 12) {
        setActiveNodes((prev) => [...prev, prev.length]);
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, [activeNodes]);

  // Circuit paths - left side
  const leftPaths = [
    "M 80 100 Q 60 100, 50 100 Q 30 100, 20 100",
    "M 80 120 Q 50 120, 40 130 Q 20 145, 10 150",
    "M 80 140 Q 60 140, 50 150 Q 30 165, 15 180",
    "M 80 180 Q 60 180, 50 180 Q 30 180, 20 180",
    "M 80 200 Q 50 200, 40 190 Q 20 175, 10 170",
    "M 80 220 Q 60 220, 50 210 Q 30 195, 15 185",
  ];

  // Circuit paths - right side
  const rightPaths = [
    "M 220 100 Q 240 100, 250 100 Q 270 100, 280 100",
    "M 220 120 Q 250 120, 260 130 Q 280 145, 290 150",
    "M 220 140 Q 240 140, 250 150 Q 270 165, 285 180",
    "M 220 180 Q 240 180, 250 180 Q 270 180, 280 180",
    "M 220 200 Q 250 200, 260 190 Q 280 175, 290 170",
    "M 220 220 Q 240 220, 250 210 Q 270 195, 285 185",
  ];

  const allPaths = [...leftPaths, ...rightPaths];

  // Node positions (end of each path)
  const nodePositions = [
    { x: 20, y: 100 },
    { x: 10, y: 150 },
    { x: 15, y: 180 },
    { x: 20, y: 180 },
    { x: 10, y: 170 },
    { x: 15, y: 185 },
    { x: 280, y: 100 },
    { x: 290, y: 150 },
    { x: 285, y: 180 },
    { x: 280, y: 180 },
    { x: 290, y: 170 },
    { x: 285, y: 185 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative w-full h-full"
    >
      {/* Outer container */}
      <div className="rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-[1px] shadow-2xl shadow-gray-900/50 h-full">
        {/* Main card - dark theme */}
        <div className="rounded-3xl bg-gradient-to-b from-gray-900 to-black p-6 lg:p-8 h-full flex flex-col min-h-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                Motor Proprietário
              </span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
              v2.0
            </span>
          </div>

          {/* Engine visualization */}
          <div className="flex-1 flex items-center justify-center relative">
            <svg
              viewBox="0 0 300 280"
              className="w-full h-full max-h-[280px]"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Glow filters */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a5f" />
                  <stop offset="50%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
                <linearGradient id="chipBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>

              {/* Circuit paths */}
              {allPaths.map((path, index) => (
                <g key={index}>
                  {/* Base path (dim) */}
                  <path
                    d={path}
                    fill="none"
                    stroke="rgba(100, 116, 139, 0.3)"
                    strokeWidth="1.5"
                  />
                  {/* Animated path */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#chipBorder)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: activeNodes.includes(index) ? 1 : 0,
                      opacity: activeNodes.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    filter="url(#glow)"
                  />
                </g>
              ))}

              {/* Nodes at path ends */}
              {nodePositions.map((pos, index) => (
                <g key={`node-${index}`}>
                  {/* Outer glow */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="6"
                    fill="transparent"
                    stroke={pulseIndex === index ? "#60a5fa" : "transparent"}
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: activeNodes.includes(index) ? (pulseIndex === index ? 1.5 : 1) : 0,
                      opacity: pulseIndex === index ? 0.5 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Node */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="4"
                    fill={activeNodes.includes(index) ? "#60a5fa" : "#475569"}
                    initial={{ scale: 0 }}
                    animate={{ scale: activeNodes.includes(index) ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    filter={activeNodes.includes(index) ? "url(#glow)" : "none"}
                  />
                </g>
              ))}

              {/* Central chip */}
              <g>
                {/* Chip shadow */}
                <rect
                  x="82"
                  y="82"
                  width="136"
                  height="116"
                  rx="12"
                  fill="rgba(0,0,0,0.5)"
                />
                {/* Chip body */}
                <motion.rect
                  x="80"
                  y="80"
                  width="140"
                  height="120"
                  rx="12"
                  fill="url(#chipGradient)"
                  stroke="url(#chipBorder)"
                  strokeWidth="2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  filter="url(#glow)"
                />
                {/* Inner chip detail */}
                <rect
                  x="95"
                  y="95"
                  width="110"
                  height="90"
                  rx="6"
                  fill="rgba(30, 58, 95, 0.5)"
                  stroke="rgba(96, 165, 250, 0.3)"
                  strokeWidth="1"
                />
                {/* IATY Engine text */}
                <motion.text
                  x="150"
                  y="135"
                  textAnchor="middle"
                  className="fill-white font-bold"
                  style={{ fontSize: "16px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  iaty
                </motion.text>
                <motion.text
                  x="150"
                  y="158"
                  textAnchor="middle"
                  className="fill-white font-bold"
                  style={{ fontSize: "16px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  engine
                </motion.text>
              </g>

              {/* Connection pins on chip sides */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <g key={`pin-left-${i}`}>
                  <motion.rect
                    x="70"
                    y={95 + i * 16}
                    width="12"
                    height="4"
                    rx="1"
                    fill="#60a5fa"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    filter="url(#glow)"
                  />
                </g>
              ))}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <g key={`pin-right-${i}`}>
                  <motion.rect
                    x="218"
                    y={95 + i * 16}
                    width="12"
                    height="4"
                    rx="1"
                    fill="#60a5fa"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    filter="url(#glow)"
                  />
                </g>
              ))}

              {/* Data flow particles */}
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r="2"
                  fill="#60a5fa"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [20, 50, 70, 80],
                    cy: [100 + i * 40, 100 + i * 30, 100 + i * 20, 100 + i * 20],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7,
                    ease: "linear",
                  }}
                />
              ))}
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={`particle-right-${i}`}
                  r="2"
                  fill="#60a5fa"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [220, 250, 270, 280],
                    cy: [100 + i * 40, 100 + i * 30, 100 + i * 20, 100 + i * 20],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.7 + 0.3,
                    ease: "linear",
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Footer stats */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <div>
                <motion.p
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  99.9%
                </motion.p>
                <p className="text-xs text-gray-500">Uptime garantido</p>
              </div>
              <div className="text-right">
                <motion.p
                  className="text-xl font-bold text-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  &lt;50ms
                </motion.p>
                <p className="text-xs text-gray-500">Latência média</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
