"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function IATYEngineCard() {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [pulseIndex, setPulseIndex] = useState(0);

  // Animate nodes sequentially
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % 6);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  // Add nodes progressively
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (activeNodes.length < 6) {
        setActiveNodes((prev) => [...prev, prev.length]);
      }
    }, 250);
    return () => clearTimeout(timeout);
  }, [activeNodes]);

  // Pin Y positions (aligned with chip pins)
  const pinYPositions = [103, 119, 135, 151, 167, 183];

  // Circuit paths - left side (starting from pins at x=70)
  const leftPaths = pinYPositions.map(
    (y) => `M 70 ${y} Q 50 ${y}, 35 ${y + (y > 143 ? 15 : y < 143 ? -15 : 0)} L 15 ${y + (y > 143 ? 25 : y < 143 ? -25 : 0)}`
  );

  // Circuit paths - right side (starting from pins at x=230)
  const rightPaths = pinYPositions.map(
    (y) => `M 230 ${y} Q 250 ${y}, 265 ${y + (y > 143 ? 15 : y < 143 ? -15 : 0)} L 285 ${y + (y > 143 ? 25 : y < 143 ? -25 : 0)}`
  );

  // Node positions (end of each path)
  const leftNodePositions = pinYPositions.map((y) => ({
    x: 15,
    y: y + (y > 143 ? 25 : y < 143 ? -25 : 0),
  }));

  const rightNodePositions = pinYPositions.map((y) => ({
    x: 285,
    y: y + (y > 143 ? 25 : y < 143 ? -25 : 0),
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative w-full h-full"
    >
      {/* Outer container - light theme */}
      <div className="rounded-3xl bg-gradient-to-b from-gray-200 to-gray-300 p-[1px] shadow-2xl shadow-gray-400/30 h-full">
        {/* Main card - light theme */}
        <div className="rounded-3xl bg-gradient-to-b from-white to-gray-50 p-4 md:p-6 lg:p-8 h-full flex flex-col min-h-[350px] md:min-h-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                Motor Proprietário
              </span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              Roda Localmente
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
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="blueGlow" x="-100%" y="-100%" width="300%" height="300%">
                  {/* Multiple blur layers for mega beam effect */}
                  <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur2" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur3" />
                  <feFlood floodColor="#3b82f6" floodOpacity="0.7" result="color1" />
                  <feFlood floodColor="#60a5fa" floodOpacity="0.5" result="color2" />
                  <feFlood floodColor="#93c5fd" floodOpacity="0.4" result="color3" />
                  <feComposite in="color1" in2="blur1" operator="in" result="shadow1" />
                  <feComposite in="color2" in2="blur2" operator="in" result="shadow2" />
                  <feComposite in="color3" in2="blur3" operator="in" result="shadow3" />
                  <feMerge>
                    <feMergeNode in="shadow1" />
                    <feMergeNode in="shadow2" />
                    <feMergeNode in="shadow3" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1f2937" />
                  <stop offset="50%" stopColor="#111827" />
                  <stop offset="100%" stopColor="#1f2937" />
                </linearGradient>
                <linearGradient id="chipBorder" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6b7280" />
                  <stop offset="50%" stopColor="#4b5563" />
                  <stop offset="100%" stopColor="#6b7280" />
                </linearGradient>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#111827" />
                  <stop offset="100%" stopColor="#374151" />
                </linearGradient>
              </defs>

              {/* Circuit paths - left side */}
              {leftPaths.map((path, index) => (
                <g key={`left-${index}`}>
                  {/* Base path (dim) */}
                  <path
                    d={path}
                    fill="none"
                    stroke="rgba(156, 163, 175, 0.4)"
                    strokeWidth="1.5"
                  />
                  {/* Animated path */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: activeNodes.includes(index) ? 1 : 0,
                      opacity: activeNodes.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  />
                </g>
              ))}

              {/* Circuit paths - right side */}
              {rightPaths.map((path, index) => (
                <g key={`right-${index}`}>
                  {/* Base path (dim) */}
                  <path
                    d={path}
                    fill="none"
                    stroke="rgba(156, 163, 175, 0.4)"
                    strokeWidth="1.5"
                  />
                  {/* Animated path */}
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: activeNodes.includes(index) ? 1 : 0,
                      opacity: activeNodes.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                  />
                </g>
              ))}

              {/* Nodes at path ends - left side */}
              {leftNodePositions.map((pos, index) => (
                <g key={`node-left-${index}`}>
                  {/* Outer glow */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="6"
                    fill="transparent"
                    stroke={pulseIndex === index ? "#374151" : "transparent"}
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
                    fill={activeNodes.includes(index) ? "#111827" : "#9ca3af"}
                    initial={{ scale: 0 }}
                    animate={{ scale: activeNodes.includes(index) ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: index * 0.15 }}
                  />
                </g>
              ))}

              {/* Nodes at path ends - right side */}
              {rightNodePositions.map((pos, index) => (
                <g key={`node-right-${index}`}>
                  {/* Outer glow */}
                  <motion.circle
                    cx={pos.x}
                    cy={pos.y}
                    r="6"
                    fill="transparent"
                    stroke={pulseIndex === index ? "#374151" : "transparent"}
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
                    fill={activeNodes.includes(index) ? "#111827" : "#9ca3af"}
                    initial={{ scale: 0 }}
                    animate={{ scale: activeNodes.includes(index) ? 1 : 0 }}
                    transition={{ duration: 0.3, delay: index * 0.15 }}
                  />
                </g>
              ))}

              {/* Central chip */}
              <g filter="url(#blueGlow)">
                {/* Chip shadow */}
                <rect
                  x="82"
                  y="72"
                  width="136"
                  height="136"
                  rx="12"
                  fill="rgba(0,0,0,0.1)"
                />
                {/* Chip body */}
                <motion.rect
                  x="80"
                  y="70"
                  width="140"
                  height="140"
                  rx="12"
                  fill="url(#chipGradient)"
                  stroke="url(#chipBorder)"
                  strokeWidth="2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Inner chip detail */}
                <rect
                  x="95"
                  y="85"
                  width="110"
                  height="110"
                  rx="6"
                  fill="rgba(31, 41, 55, 0.8)"
                  stroke="rgba(75, 85, 99, 0.5)"
                  strokeWidth="1"
                />
                {/* iaty ENGINE text */}
                <motion.text
                  x="150"
                  y="135"
                  textAnchor="middle"
                  className="fill-white font-bold"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  iaty
                </motion.text>
                <motion.text
                  x="150"
                  y="155"
                  textAnchor="middle"
                  className="fill-white font-bold"
                  style={{ fontSize: "14px", letterSpacing: "0.05em" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  ENGINE
                </motion.text>
              </g>

              {/* Connection pins on chip sides - left */}
              {pinYPositions.map((y, i) => (
                <g key={`pin-left-${i}`}>
                  <motion.rect
                    x="70"
                    y={y - 2}
                    width="12"
                    height="4"
                    rx="1"
                    fill="#4b5563"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  />
                </g>
              ))}
              {/* Connection pins on chip sides - right */}
              {pinYPositions.map((y, i) => (
                <g key={`pin-right-${i}`}>
                  <motion.rect
                    x="218"
                    y={y - 2}
                    width="12"
                    height="4"
                    rx="1"
                    fill="#4b5563"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  />
                </g>
              ))}

              {/* Data flow particles - left to chip */}
              {[0, 2, 4].map((i) => (
                <motion.circle
                  key={`particle-left-${i}`}
                  r="2"
                  fill="#374151"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [leftNodePositions[i].x, 40, 60, 70],
                    cy: [leftNodePositions[i].y, pinYPositions[i] + (i > 2 ? 10 : i < 2 ? -10 : 0), pinYPositions[i], pinYPositions[i]],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "linear",
                  }}
                />
              ))}
              {/* Data flow particles - chip to right */}
              {[0, 2, 4].map((i) => (
                <motion.circle
                  key={`particle-right-${i}`}
                  r="2"
                  fill="#374151"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: [230, 250, 270, rightNodePositions[i].x],
                    cy: [pinYPositions[i], pinYPositions[i], pinYPositions[i] + (i > 2 ? 10 : i < 2 ? -10 : 0), rightNodePositions[i].y],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.5 + 0.3,
                    ease: "linear",
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Footer stats */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <motion.p
                  className="text-xl font-bold text-gray-900"
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
                  className="text-xl font-bold text-gray-900"
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
