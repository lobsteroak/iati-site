"use client";

import { motion } from "framer-motion";

const logos = [
  "Empresa A",
  "Empresa B",
  "Empresa C",
  "Empresa D",
  "Empresa E",
  "Empresa F",
  "Empresa G",
  "Empresa H",
];

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8">
      <div className="relative">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {/* Double the logos for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] text-gray-400 font-semibold text-lg"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
      <p className="text-center text-sm text-muted mt-6">
        Empresas que confiam na IATI
      </p>
    </div>
  );
}
