'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Lock } from 'lucide-react';
import Tilt from './Tilt';

interface Package {
  title: string;
  price: string;
  period: string;
  subtitle: string;
  features: string[];
  cta: string;
  tag?: string;
  featured?: boolean;
  colSpan: string;
  color: string; // Neon highlight shade
}

const packagesList: Package[] = [
  {
    title: "Traffic Audit Sprint",
    price: "$1,850",
    period: "one-off",
    subtitle: "Deep technical diagnostic & pipeline audit.",
    features: [
      "Technical crawl analysis",
      "Competitor keyword gap extraction",
      "Indexation bug and redirect cleanses",
      "2-Hour squad video alignment briefing"
    ],
    cta: "Order Audit Sprint",
    tag: "Audit",
    colSpan: "col-span-12 lg:col-span-4",
    color: "rgba(100, 206, 251, 0.15)",
  },
  {
    title: "Accelerated Scale",
    price: "$3,500",
    period: "/mo",
    subtitle: "Rapid ad scaling and SEO content velocity.",
    features: [
      "Dedicated Growth Engineer",
      "Multi-channel PPC ad sprints",
      "8 Long-form semantic topic clusters",
      "Weekly diagnostic briefing streams"
    ],
    cta: "Enroll in Program",
    tag: "Popular",
    featured: true,
    colSpan: "col-span-12 lg:col-span-4",
    color: "rgba(96, 165, 250, 0.3)",
  },
  {
    title: "Retained Growth Partner",
    price: "$7,500",
    period: "/mo",
    subtitle: "Complete digital dominance squad retainer.",
    features: [
      "Everything in Accelerated Scale",
      "Unlimited high-conversion landing pages",
      "Continuous technical SEO + local Maps",
      "Dedicated creative asset generation"
    ],
    cta: "Retain Growth Squad",
    tag: "Premium",
    colSpan: "col-span-12 lg:col-span-4",
    color: "rgba(100, 206, 251, 0.15)",
  },
];

function PricingCard({ pkg, index }: { pkg: Package; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
      className={`col-span-12 ${pkg.colSpan}`}
    >
      <Tilt maxRotation={4} className="h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className={`spotlight-card h-full p-8 rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative group backdrop-blur-md cursor-pointer transition-all duration-500 shadow-2xl ${
            pkg.featured
              ? 'border-electric-blue/40 bg-glass-card'
              : 'border-white/[0.04] bg-glass-card'
          }`}
        >
          {/* Neon Spotlight Radial Background */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-3xl rounded-[2.5rem]"
            style={{
              background: `radial-gradient(220px circle at var(--mouse-x, 150px) var(--mouse-y, 150px), ${pkg.color}, transparent 100%)`
            }}
          />

          {/* Featured Gradient Pulse Border */}
          {pkg.featured && (
            <div className="absolute inset-0 rounded-[2.5rem] p-[1.5px] bg-gradient-to-r from-electric-blue via-white to-cyber-violet -z-20 opacity-30 group-hover:opacity-75 transition-opacity duration-500" />
          )}

          <div>
            {/* Tag & Subtitle */}
            <div className="flex items-center justify-between">
              <span className={`text-[9px] font-mono tracking-widest font-bold uppercase px-3 py-1 rounded-full ${
                pkg.featured
                  ? 'bg-electric-blue/15 text-electric-blue border border-electric-blue/30'
                  : 'bg-white/[0.03] text-zinc-400 border border-white/5'
              }`}>
                {pkg.tag}
              </span>
              {pkg.featured && (
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
                </span>
              )}
            </div>

            {/* Package Title */}
            <h3 className="font-display font-black text-2xl uppercase tracking-wider text-white mt-5">
              {pkg.title}
            </h3>
            
            <p className="text-xs text-zinc-500 mt-2 min-h-[32px] leading-relaxed font-sans">
              {pkg.subtitle}
            </p>

            {/* Price section */}
            <div className="flex items-baseline gap-1 mt-6">
              <span className="font-display font-black text-4xl md:text-5xl text-white tracking-tight">
                {pkg.price}
              </span>
              <span className="text-zinc-500 text-xs font-mono lowercase">
                {pkg.period}
              </span>
            </div>

            {/* Features checklist */}
            <div className="flex flex-col gap-3.5 mt-8 border-t border-white/[0.05] pt-6">
              {pkg.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <div className={`p-0.5 rounded-full mt-0.5 ${
                    pkg.featured ? 'bg-electric-blue/10 text-electric-blue' : 'bg-white/[0.03] text-zinc-400'
                  }`}>
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs text-zinc-400 leading-snug group-hover:text-zinc-300 transition-colors duration-300 font-sans">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Button */}
          <div className="mt-10">
            <a
              href={`https://wa.me/923146773542?text=Hello%20VizibilityPro,%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package%20(${pkg.price}).`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full relative group inline-flex items-center justify-center gap-2 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                pkg.featured
                  ? 'bg-white text-black shadow-[0_4px_25px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_35px_rgba(100,206,251,0.4)]'
                  : 'bg-white/[0.03] text-white border border-white/5 hover:bg-white hover:text-black hover:border-transparent'
              }`}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {pkg.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
              {pkg.featured && (
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10 rounded-full" />
              )}
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-12 md:py-16 px-4 md:px-8 xl:px-16 bg-[#000000] overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute bottom-[20%] right-[15%] w-[45vw] h-[45vw] rounded-full bg-cyber-violet/4 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 md:gap-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 text-left max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-electric-blue uppercase">
              GROWTH INVESTMENT
            </span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-[0.95] text-white uppercase">
              TRANSPARENT GROWTH <br />
              <span className="text-electric-blue drop-shadow-[0_0_15px_rgba(100,206,251,0.4)]">TIERS.</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-md text-left leading-relaxed">
            Choose the package that matches your revenue goals. Flat rates with no hidden fees and dedicated strategic support from day one.
          </p>
        </div>

        {/* Pricing tiers grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 auto-rows-fr">
          {packagesList.map((pkg, idx) => (
            <PricingCard key={idx} pkg={pkg} index={idx} />
          ))}
        </div>

        {/* Small Risk Guarantee Footer */}
        <div className="w-full mt-4 flex items-center justify-center gap-3 py-4 px-6 rounded-3xl bg-white/[0.01] border border-white/5 max-w-3xl mx-auto text-xs text-zinc-500 font-mono uppercase">
          <Lock className="w-4 h-4 text-cyber-violet" />
          <span>NEED A CUSTOMIZED RETAINER OR PERFORMANCE-BASED STRUCTURE? <a href="#contact" className="text-white hover:underline">CONTACT OUR STRATEGY DIRECTORS</a></span>
        </div>
      </div>
    </section>
  );
}
