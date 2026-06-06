'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ShinyText from './ShinyText';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-between bg-black overflow-hidden font-sans select-none">
      {/* Background looping video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-60"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Subtle overlay gradient to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-between pt-32 pb-12 md:pb-16">
        
        {/* Top Section (Below Nav) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start w-full"
        >
          <div className="text-left">
            <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed">
              We deliver high-impact digital marketing strategies that empower ambitious brands with cutting-edge visibility and data-driven growth to thrive globally.
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">
              500+ Brands Scaled Globally !
            </p>
          </div>
        </motion.div>

        {/* Hero Section (Center) */}
        <div className="flex flex-col items-center text-center justify-center my-auto w-full">
          {/* Tagline above heading */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="uppercase text-white/80 text-xs md:text-sm tracking-tight font-semibold mb-3 md:mb-5"
          >
            STRATEGIC DIGITAL MARKETING FOR GROWING ENTERPRISES
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-medium text-5xl sm:text-7xl md:text-8xl xl:text-9xl leading-[0.85] tracking-tighter text-white flex flex-col items-center"
          >
            <span>Make Your</span>
            <ShinyText text="Business Visible." className="mt-1 md:mt-3 font-black" />
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 md:mt-12"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-semibold bg-black text-white hover:bg-zinc-900 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-2xl"
            >
              <span>Scale Your Business Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </div>

        {/* Empty row to balance the vertical spacing */}
        <div className="h-2" />
      </div>
    </section>
  );
}
