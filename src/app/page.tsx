'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Process from '@/components/Process';
import BentoGrid from '@/components/BentoGrid';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <>
      {/* Cinematic entrance preloader screen */}
      <AnimatePresence mode="wait">
        {!hasLoaded && (
          <Preloader onComplete={() => setHasLoaded(true)} />
        )}
      </AnimatePresence>

      {/* Global page fade-in once assets & counts are completed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasLoaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // easeOutExpo
        className="relative w-full h-full flex flex-col"
      >
        {hasLoaded && (
          <>
            {/* Header Floating Navigation */}
            <Navbar />
            
            {/* Main Sections Stack */}
            <main className="flex-1 w-full flex flex-col relative z-20">
              <Hero />
              <Marquee />
              <Services />
              <Process />
              <BentoGrid />
              <Pricing />
              <Testimonials />
              <Contact />
            </main>

            {/* Minimal Luxury Footer */}
            <Footer />
          </>
        )}
      </motion.div>
    </>
  );
}
