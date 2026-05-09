'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonialsList: Testimonial[] = [
  {
    quote: "Within 3 months, our organic leads doubled and our cost-per-click dropped by 40%. The technical precision of their work is remarkable.",
    author: "Marcus Vance",
    role: "VP of Growth, CoreLogic",
    rating: 5,
  },
  {
    quote: "The Next.js 15 speed refactor boosted our Google Business local maps ranking to #1 across 14 major metros. Performance is simply unmatched.",
    author: "Elena Rostova",
    role: "CMO, Hyperion Systems",
    rating: 5,
  },
  {
    quote: "Apex did not just build our website—they engineered our entire revenue machine. Our inbound pipeline increased by 185% in 90 days.",
    author: "Devon Chen",
    role: "Co-Founder, Synthetix Corp",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideVariants: any = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      filter: "blur(5px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      filter: "blur(5px)",
      transition: {
        duration: 0.4,
        ease: 'easeIn',
      },
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  // Auto slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = testimonialsList[currentIndex];

  return (
    <section className="relative w-full py-24 md:py-36 px-4 md:px-8 xl:px-16 bg-[#020205] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] rounded-full bg-cyber-violet/5 blur-[170px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 text-center mb-16 md:mb-24">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-cyber-violet uppercase">
            CLIENT INTEGRITY
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight leading-none text-white uppercase">
            SUREPROOF TESTIMONIALS.
          </h2>
        </div>

        {/* Testimonial Core Box */}
        <div className="relative glass-panel rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl relative min-h-[380px] md:min-h-[300px] flex flex-col justify-between">
          
          {/* Glowing Ambient Quote Icon behind text */}
          <div className="absolute top-12 left-12 text-white/[0.015] pointer-events-none">
            <Quote className="w-40 h-40 stroke-[1.5] -rotate-6 filter drop-shadow-[0_0_20px_rgba(255,255,255,0.02)]" />
          </div>

          <div className="relative z-10 w-full overflow-hidden">
            
            {/* Top Stars Row */}
            <div className="flex items-center gap-1 mb-8">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-hologram-cyan fill-hologram-cyan shadow-[0_0_10px_rgba(0,255,209,0.5)] animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Testimonial Slides */}
            <div className="relative min-h-[140px] md:min-h-[100px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full flex flex-col"
                >
                  <p className="font-display font-medium text-lg md:text-2xl text-white leading-relaxed tracking-wide italic">
                    "{activeTestimonial.quote}"
                  </p>
                  
                  {/* Author Name and Position Info */}
                  <div className="mt-8">
                    <span className="block font-sans font-bold text-base text-white">
                      {activeTestimonial.author}
                    </span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-zinc-500 mt-1">
                      {activeTestimonial.role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Slider Controllers */}
          <div className="flex items-center justify-between mt-12 md:mt-6 border-t border-white/[0.05] pt-6 relative z-10">
            {/* Slider bullet dots indicator */}
            <div className="flex gap-2">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-6 bg-electric-blue' : 'w-1.5 bg-zinc-800 hover:bg-zinc-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next / Prev Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/[0.04] transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
