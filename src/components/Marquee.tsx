'use client';

import React from 'react';

const marqueeTexts = [
  "Product Design", "UX/UI Research", 
  "Interaction Design", "Figma Mastery", 
  "Design Systems", "Visual Hierarchy", 
  "Design Leadership", "Portfolio Readiness"
];

export default function Marquee() {
  // We duplicate the list to ensure the track width is larger than the viewport, 
  // allowing a seamless -50% translation loop
  const duplicatedItems = [...marqueeTexts, ...marqueeTexts];

  return (
    <section className="relative w-full py-10 md:py-16 bg-[#000000] overflow-hidden border-y border-white/[0.04]">
      {/* Soft vignette overlays on left and right to hide clipping */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="w-full flex overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center cursor-pointer">
          {duplicatedItems.map((text, idx) => (
            <div key={idx} className="flex items-center gap-10 md:gap-14 px-5">
              <span className="font-display font-black text-2xl md:text-5xl uppercase tracking-[0.1em] text-zinc-600 hover:text-white transition-colors duration-300">
                {text}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-electric-blue to-white shadow-[0_0_10px_rgba(100,206,251,0.7)] animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
