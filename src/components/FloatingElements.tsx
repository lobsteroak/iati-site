"use client";

import { motion } from "framer-motion";

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orb 1 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-gray-100 to-gray-200/50 blur-3xl"
        style={{ top: "10%", right: "10%" }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating orb 2 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-gray-50 to-gray-100/30 blur-3xl"
        style={{ bottom: "20%", left: "5%" }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

    </div>
  );
}
