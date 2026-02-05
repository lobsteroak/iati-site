"use client";

import { motion } from "framer-motion";

interface AnimatedPillsProps {
  pills: string[];
  className?: string;
}

export function AnimatedPills({ pills, className = "" }: AnimatedPillsProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      className={`flex flex-wrap gap-2 lg:gap-3 ${className}`}
    >
      {pills.map((pill, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 10 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { duration: 0.3, ease: "easeOut" }
            },
          }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors duration-200 cursor-default"
        >
          {pill}
        </motion.span>
      ))}
    </motion.div>
  );
}
