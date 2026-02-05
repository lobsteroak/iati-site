"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
  autoPlayInterval?: number;
}

export function TestimonialSlider({
  testimonials,
  className = "",
  autoPlayInterval = 5000,
}: TestimonialSliderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [testimonials.length, autoPlayInterval]);

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center px-4 lg:px-16"
          >
            <div className="text-4xl text-gray-300 mb-4">"</div>
            <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
              {testimonials[current].quote}
            </p>
            <div className="flex flex-col items-center">
              <p className="font-semibold">{testimonials[current].author}</p>
              <p className="text-sm text-muted">
                {testimonials[current].role}, {testimonials[current].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-foreground w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
