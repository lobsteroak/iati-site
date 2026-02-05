"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className = "",
}: AnimatedButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-full transition-colors duration-200";

  const variants = {
    primary: "bg-foreground text-white hover:bg-foreground/90",
    secondary: "bg-gray-100 text-foreground hover:bg-gray-200",
    outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-white",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    </motion.div>
  );
}
