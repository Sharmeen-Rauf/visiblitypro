'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Eye, Share, CheckCircle2 } from 'lucide-react';
import Tilt from './Tilt';

// Helper component for local spotlight cursor variables inside each tile
function BentoTile({
  children,
  className = '',
  maxRotation = 5,
}: {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
}) {
  const tileRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const tile = tileRef.current;
    if (!tile) return;
    const rect = tile.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    tile.style.setProperty('--mouse-x', `${x}px`);
    tile.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Tilt maxRotation={maxRotation} className={className}>
      <div
        ref={tileRef}
        onMouseMove={handleMouseMove}
        className="spotlight-card h-full p-6 md:p-8 rounded-[2.5rem] border border-white/[0.04] bg-glass-card backdrop-blur-lg flex flex-col justify-between overflow-hidden relative group cursor-pointer transition-all duration-500 shadow-2xl"
      >
        {children}
      </div>
    </Tilt>
  );
}

export default function BentoGrid() {
  return (
    <section id="why-us" className="relative w-full py-24 md:py-36 px-4 md:px-8 xl:px-16 bg-[#020205] overflow-hidden">
      {/* Aurora Ambient Spot */}
      <div className="absolute top-[40%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-electric-blue/4 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 md:gap-20">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-hologram-cyan uppercase">
            COMPETITIVE SUPREMACY
          </span>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-[0.95] text-white uppercase">
            WHY THE WORLD'S BEST <br />
            <span className="bg-gradient-to-r from-electric-blue via-hologram-cyan to-cyber-violet bg-clip-text text-transparent">CHOOSE VISIBILITY PRO.</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-2 leading-relaxed">
            We operate at the convergence of absolute technological scale and data science. Here is why enterprise giants and ambitious startups partner with us.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 auto-rows-fr">
          
          {/* Tile 1: Data-First Decisions (8 Cols) */}
          <BentoTile className="col-span-12 lg:col-span-8 min-h-[350px]">
            {/* Visual simulation overlay background */}
            <div className="absolute top-4 right-4 w-[280px] h-[180px] rounded-2xl border border-white/5 bg-[#030308]/60 p-4 font-mono text-[9px] flex flex-col gap-2 shadow-2xl pointer-events-none opacity-40 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500">
              <div className="flex justify-between border-b border-white/5 pb-1 text-[8px] text-zinc-500">
                <span>SEGMENTATION ENGINE</span>
                <span className="text-electric-blue">SYNCED</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>AQUISITION RATIOS</span>
                <span className="text-white font-bold">+184.2%</span>
              </div>
              <div className="w-full h-2 bg-zinc-950 rounded overflow-hidden">
                <div className="w-[84%] h-full bg-gradient-to-r from-cyber-violet to-electric-blue" />
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>CONVERSIONS TRIGGERED</span>
                <span className="text-white font-bold">12,492 / SEC</span>
              </div>
              <div className="w-full h-2 bg-zinc-950 rounded overflow-hidden">
                <div className="w-[62%] h-full bg-gradient-to-r from-electric-blue to-hologram-cyan animate-pulse" />
              </div>
              <div className="flex items-center gap-1.5 mt-2 p-1.5 rounded bg-white/[0.02] border border-white/5 text-hologram-cyan text-[7px]">
                <Database className="w-2.5 h-2.5 animate-pulse" />
                <span>ACTIVE ALGORITHMIC PARSING PIPELINE CONNECTED</span>
              </div>
            </div>

            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-electric-blue">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider mt-4">
                Data-First Decisions
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                We discard guesswork entirely. Every crawl adaptation, keyword investment, ad copy split-test, and code compilation is derived from deep-layer algorithmic simulations and continuous mathematical verification.
              </p>
            </div>
            
            <div className="flex gap-2.5 mt-8 border-t border-white/[0.05] pt-5 relative z-10">
              {["Telemetry Models", "Regression Tests", "Statistical Certitude"].map((lbl, idx) => (
                <span key={idx} className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">{lbl}</span>
              ))}
            </div>
          </BentoTile>

          {/* Tile 2: Speed to Results (4 Cols) */}
          <BentoTile className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[350px]">
            {/* Visual simulation inside tile */}
            <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full border border-white/5 bg-zinc-950/40 flex items-center justify-center pointer-events-none group-hover:scale-110 group-hover:border-electric-blue/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-full border border-dashed border-electric-blue animate-spin-slow flex items-center justify-center">
                <Zap className="w-6 h-6 text-electric-blue animate-pulse" />
              </div>
            </div>

            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-hologram-cyan">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mt-4">
                Speed to Results
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                By compiling blazing React platforms and orchestrating automated bid triggers, we shrink traditional SEO and marketing timeline rampups.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-8 border-t border-white/[0.05] pt-5 relative z-10 text-xs text-zinc-500 font-mono">
              <CheckCircle2 className="w-4 h-4 text-hologram-cyan" />
              <span>Avg Ramp-up: 14 Days</span>
            </div>
          </BentoTile>

          {/* Tile 3: Full Transparency (4 Cols) */}
          <BentoTile className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[350px]">
            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-cyber-violet">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mt-4">
                Full Transparency
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No closed doors. Our custom web portals stream live rank, impression, ad spend, and conversion metrics in real-time, giving you total insight.
              </p>
            </div>

            {/* Interactive simulator ticker */}
            <div className="mt-8 pt-5 border-t border-white/[0.05] relative z-10 flex flex-col gap-2 font-mono text-[9px] text-zinc-500">
              <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded border border-white/5">
                <span>PIPELINE RENDERED</span>
                <span className="text-hologram-cyan font-bold">100% OK</span>
              </div>
              <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded border border-white/5">
                <span>AUDIT RECORD</span>
                <span className="text-white font-bold">LIVE STREAM</span>
              </div>
            </div>
          </BentoTile>

          {/* Tile 4: Integrated Channels (8 Cols) */}
          <BentoTile className="col-span-12 lg:col-span-8 min-h-[350px]">
            {/* Visual Vector graphic map overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8 opacity-25 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none">
              <svg className="w-full h-full max-w-[350px]" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <line x1="100" y1="60" x2="40" y2="30" stroke="#333" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="100" y1="60" x2="160" y2="30" stroke="#333" strokeWidth="1" />
                <line x1="100" y1="60" x2="40" y2="90" stroke="#333" strokeWidth="1" />
                <line x1="100" y1="60" x2="160" y2="90" stroke="#333" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Center Core Node */}
                <circle cx="100" cy="60" r="18" fill="url(#nodeGlow)" />
                <circle cx="100" cy="60" r="6" fill="#bd00ff" />
                
                {/* Peripheral Nodes */}
                <circle cx="40" cy="30" r="4" fill="#00f0ff" />
                <circle cx="160" cy="30" r="4" fill="#00ffd1" />
                <circle cx="40" cy="90" r="4" fill="#00f0ff" />
                <circle cx="160" cy="90" r="4" fill="#00f0ff" />
              </svg>
            </div>

            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-electric-blue">
                <Share className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider mt-4">
                Integrated Channels
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                We dismantle traditional marketing siloes. SEO insights automatically optimize PPC search targets; paid conversion triggers inform local Google map content strategies, resulting in unified digital growth.
              </p>
            </div>

            <div className="flex gap-2.5 mt-8 border-t border-white/[0.05] pt-5 relative z-10">
              {["Cross-attribution", "SEO + Ads sync", "GBP + Conversion link"].map((lbl, idx) => (
                <span key={idx} className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">{lbl}</span>
              ))}
            </div>
          </BentoTile>

        </div>
      </div>
    </section>
  );
}
