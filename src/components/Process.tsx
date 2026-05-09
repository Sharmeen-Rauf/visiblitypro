'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Compass, Milestone, Rocket, BarChart4 } from 'lucide-react';
import Tilt from './Tilt';

interface Step {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

const stepsList: Step[] = [
  {
    num: "01",
    title: "Discovery & Audit",
    desc: "We extract raw data signatures from your digital presence, identifying indexing bottlenecks, semantic gaps, and high-revenue keywords.",
    icon: Compass,
    details: ["Technical crawl analysis", "Competitor matrix parsing", "Semantic intent mapping"],
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "We architect a multi-quarter growth matrix, matching organic asset deployment with high-conversion PPC campaigns and map authority pipelines.",
    icon: Milestone,
    details: ["Content clusters schema", "Bidding algorithm presets", "Local maps schema planning"],
  },
  {
    num: "03",
    title: "Execute & Optimise",
    desc: "Our engineering squad deploys React structures, optimises codebases for high speed, and pushes authoritative backlinks and targeted PPC bids.",
    icon: Rocket,
    details: ["Blazing core web vitals", "Ad copy automation systems", "Backlink network injection"],
  },
  {
    num: "04",
    title: "Report & Scale",
    desc: "We stream detailed real-time performance analytics directly to you, pruning non-converting targets and doubling down on active revenue hubs.",
    icon: BarChart4,
    details: ["Real-time reporting dashboards", "Attribution path audits", "Ad budget reallocation"],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress inside the process container to animate the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth the scroll signal with a spring to prevent stuttering
  const scaleYSpring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="relative w-full py-12 md:py-16 px-4 md:px-8 xl:px-16 bg-[#030303] overflow-hidden">
      {/* Aurora Ambient Light */}
      <div className="absolute top-[50%] right-[0%] w-[45vw] h-[45vw] rounded-full bg-cyber-violet/5 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[5%] w-[40vw] h-[40vw] rounded-full bg-electric-blue/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-cyber-violet uppercase">
            OPERATIONAL PLAYBOOK
          </span>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-[0.95] text-white uppercase">
            GROWTH ARCHITECTURE <br />
            <span className="bg-gradient-to-r from-cyber-violet via-electric-blue to-hologram-cyan bg-clip-text text-transparent">TIMELINE.</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-500 mt-2 leading-relaxed">
            Four surgical phases engineered to take your company from its current baseline to organic dominance and scaled conversion heights.
          </p>
        </div>

        {/* Timeline body with centering guide */}
        <div ref={containerRef} className="relative w-full">
          
          {/* Base Background Line (Unfilled) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-900 -translate-x-1/2 -z-10" />

          {/* Active Filling Glowing Line */}
          <motion.div
            style={{ scaleY: scaleYSpring }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-violet via-electric-blue to-hologram-cyan origin-top -translate-x-1/2 -z-10 shadow-[0_0_12px_rgba(0,240,255,0.8)]"
          />

          {/* Steps Grid */}
          <div className="flex flex-col gap-16 md:gap-24">
            {stepsList.map((step, idx) => {
              const IconComponent = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row w-full items-start relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Anchor Pin (glowing circular node) */}
                  <div className="absolute left-[20px] md:left-1/2 top-[24px] w-4 h-4 rounded-full bg-[#030303] border-2 border-zinc-700 -translate-x-1/2 flex items-center justify-center z-20 group">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0.5 }}
                      whileInView={{ scale: 1.2, opacity: 1 }}
                      viewport={{ once: true, margin: "-120px" }}
                      className="w-2.5 h-2.5 rounded-full bg-electric-blue shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                      style={{
                        backgroundColor: idx % 3 === 0 ? '#bd00ff' : idx % 3 === 1 ? '#00f0ff' : '#00ffd1'
                      }}
                    />
                  </div>

                  {/* Half grid width spacing placeholder for large screens */}
                  <div className="hidden md:block w-1/2" />

                  {/* Timeline Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -60 : 60, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-120px' }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Tilt maxRotation={5}>
                        <div className="glass-panel p-6 md:p-8 rounded-[2rem] border border-white/5 relative group cursor-pointer shadow-2xl hover:border-white/10 transition-colors">
                          
                          {/* Step Floating Identifier Tag */}
                          <div className="flex items-center justify-between mb-6">
                            <span className="font-display font-black text-5xl md:text-6xl text-zinc-800 tracking-wide group-hover:text-electric-blue/30 transition-colors duration-500">
                              {step.num}
                            </span>
                            <div className="p-3 rounded-2xl bg-white/[0.03] text-zinc-400 group-hover:text-white group-hover:bg-white/[0.06] transition-colors duration-500">
                              <IconComponent className="w-6 h-6" />
                            </div>
                          </div>

                          {/* Text Title */}
                          <h3 className="font-display font-black text-xl md:text-2xl text-white uppercase tracking-wider group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 group-hover:bg-clip-text transition-all">
                            {step.title}
                          </h3>
                          
                          <p className="text-sm text-zinc-400 leading-relaxed mt-3">
                            {step.desc}
                          </p>

                          {/* Bullet Checklist */}
                          <div className="flex flex-col gap-2 mt-6 pt-6 border-t border-white/[0.05]">
                            {step.details.map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-hologram-cyan" />
                                <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-500 font-mono uppercase">
                                  {detail}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Tilt>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
