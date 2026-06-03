import React from 'react';
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
  return (
    <div className="relative w-full h-full flex flex-col">
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
    </div>
  );
}
