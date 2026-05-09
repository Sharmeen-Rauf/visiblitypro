'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, DollarSign, Share2, MapPin, ArrowUpRight } from 'lucide-react';
import Tilt from './Tilt';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  tags: string[];
  color: string; // for custom accent glowing shades
  colSpan: string; // Tailwind grid spans
}

const servicesList: Service[] = [
  {
    icon: Search,
    title: "Search Engine Optimisation",
    desc: "Dominate search layouts using semantic crawling pipelines, contextual authority structures, and hyper-dense intent-targeted keyword clusters.",
    tags: ["Semantic SEO", "Domain Authority", "Core Web Vitals"],
    color: "rgba(0, 240, 255, 0.15)", // Electric blue
    colSpan: "lg:col-span-6",
  },
  {
    icon: Code2,
    title: "Website Development",
    desc: "Deploy blazing-fast, secure digital products built on Next.js 15, dynamic React Server Components, and modular WebGL canvases.",
    tags: ["Next.js 15", "Headless CMS", "Interactive 3D"],
    color: "rgba(189, 0, 255, 0.15)", // Cyber violet
    colSpan: "lg:col-span-6",
  },
  {
    icon: DollarSign,
    title: "Pay-Per-Click Ads",
    desc: "Maximize acquisition curves with machine-learning bid scaling, granular multi-channel funnels, and optimized landing-page hooks.",
    tags: ["Google Search & PMax", "Meta Algorithmic Scaling", "CRO Funnels"],
    color: "rgba(0, 255, 209, 0.12)", // Hologram cyan
    colSpan: "lg:col-span-4",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Architect viral inbound traffic networks using aesthetic visual stories, community feedback mechanics, and scalable kinetic content loops.",
    tags: ["Community Scaling", "Kinetic Design", "Inbound Virality"],
    color: "rgba(255, 0, 128, 0.12)", // Magenta pink
    colSpan: "lg:col-span-4",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Command your immediate metropolitan radius through map schema architecture, semantic review pipelines, and local citations.",
    tags: ["GBP Authority", "Local Citation Building", "Schema Map Injections"],
    color: "rgba(255, 170, 0, 0.12)", // Neon Gold
    colSpan: "lg:col-span-4",
  },
];

// Helper component for local mouse-coordinate tracking inside each card
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set variables to power the .spotlight-card border highlight locally
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
      className={`col-span-12 ${service.colSpan}`}
    >
      <Tilt maxRotation={6} className="h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="spotlight-card h-full p-8 rounded-[2.5rem] flex flex-col justify-between overflow-hidden relative group backdrop-blur-md cursor-pointer border border-white/[0.04] transition-all duration-500 shadow-2xl"
        >
          {/* Custom blurred glow spot centered behind the card content */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 blur-3xl rounded-[2.5rem]"
            style={{
              background: `radial-gradient(180px circle at var(--mouse-x, 150px) var(--mouse-y, 150px), ${service.color}, transparent 100%)`
            }}
          />

          {/* Card Top: Icon and Arrow */}
          <div className="flex items-center justify-between">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.04] text-zinc-300 group-hover:text-white group-hover:bg-white/[0.06] group-hover:border-white/[0.1] transition-all duration-500">
              <IconComponent className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
            </div>
            
            <div className="w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/20 group-hover:bg-white/[0.03] transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Card Middle: Text info */}
          <div className="mt-8">
            <h3 className="font-display font-black text-2xl text-white tracking-wide group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-zinc-300 group-hover:to-zinc-500 group-hover:bg-clip-text transition-colors duration-500">
              {service.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mt-3.5 group-hover:text-zinc-300 transition-colors duration-500">
              {service.desc}
            </p>
          </div>

          {/* Card Bottom: Premium Tags */}
          <div className="flex flex-wrap gap-2.5 mt-8 border-t border-white/[0.05] pt-6">
            {service.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono tracking-wider uppercase font-semibold px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.03] text-zinc-500 group-hover:text-zinc-300 group-hover:bg-white/[0.05] group-hover:border-white/[0.07] transition-all duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full py-24 md:py-36 px-4 md:px-8 xl:px-16 overflow-hidden bg-[#020205]">
      {/* Background ambient noise glow to separate sections */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] rounded-full bg-electric-blue/4 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 md:gap-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4 text-left max-w-xl">
            <span className="text-xs font-mono font-bold tracking-[0.3em] text-electric-blue uppercase">
              EXPERTISE PATHWAYS
            </span>
            <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-[0.95] text-white uppercase">
              HIGH-PERFORMANCE <br />
              <span className="bg-gradient-to-r from-electric-blue via-hologram-cyan to-cyber-violet bg-clip-text text-transparent">SERVICES.</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-md text-left leading-relaxed">
            We do not execute basic marketing. We design full-funnel digital supremacy structures that combine AI insights, lightning web performance, and aggressive SEO metrics.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
