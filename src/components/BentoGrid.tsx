'use client';

import React, { useRef } from 'react';
import { Database, Zap, Eye, Cpu, CheckCircle2 } from 'lucide-react';
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
    <section id="why-us" className="relative w-full py-12 md:py-16 px-4 md:px-8 xl:px-16 bg-[#000000] overflow-hidden">
      {/* Aurora Ambient Spot */}
      <div className="absolute top-[40%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-electric-blue/4 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full flex flex-col gap-12 md:gap-20">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-electric-blue uppercase">
            COMPETITIVE SUPREMACY
          </span>
          <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight leading-[0.95] text-white uppercase">
            WHY LEADING BRANDS <br />
            <span className="text-electric-blue drop-shadow-[0_0_15px_rgba(100,206,251,0.4)]">CHOOSE VIZIBILITYPRO.</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-400 mt-2 leading-relaxed font-sans">
            We operate at the intersection of high-fidelity creative content and cold, hard performance data. Here is why ambitious businesses trust us to command market attention and scale revenue.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 auto-rows-fr">
          
          {/* Tile 1: Wide Layout (8 Cols) */}
          <BentoTile className="col-span-12 lg:col-span-8 min-h-[350px]">
            {/* Visual simulation overlay background */}
            <div className="absolute top-4 right-4 w-[280px] h-[180px] rounded-2xl border border-white/5 bg-[#030308]/60 p-4 font-mono text-[9px] flex flex-col gap-2 shadow-2xl pointer-events-none opacity-40 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500">
              <div className="flex justify-between border-b border-white/5 pb-1 text-[8px] text-zinc-500">
                <span>ACQUISITION ENGINE</span>
                <span className="text-electric-blue">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>ROAS BENCHMARKS</span>
                <span className="text-white font-bold">4.2x AVERAGE</span>
              </div>
              <div className="w-full h-2 bg-zinc-950 rounded overflow-hidden">
                <div className="w-[84%] h-full bg-gradient-to-r from-cyber-violet to-electric-blue" />
              </div>
              <div className="flex items-center justify-between text-zinc-400">
                <span>CONVERSION SPLITS</span>
                <span className="text-white font-bold">+120% / MO</span>
              </div>
              <div className="w-full h-2 bg-zinc-950 rounded overflow-hidden">
                <div className="w-[62%] h-full bg-gradient-to-r from-electric-blue to-white animate-pulse" />
              </div>
              <div className="flex items-center gap-1.5 mt-2 p-1.5 rounded bg-white/[0.02] border border-white/5 text-electric-blue text-[7px]">
                <Database className="w-2.5 h-2.5 animate-pulse" />
                <span>TELEMETRY PARSING SYSTEM OPERATIONAL</span>
              </div>
            </div>

            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-electric-blue">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider mt-4">
                DATA-DRIVEN ARCHITECTS
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-md font-sans">
                Work directly with senior growth engineers, not junior account managers. Our team features market veterans who have scaled ad spend budgets for high-growth startups and enterprise brands, bringing battle-tested formulas directly to your campaigns.
              </p>
            </div>
            
            <div className="flex gap-2 mt-8 border-t border-white/[0.05] pt-5 relative z-10 text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
              VETERAN STRATEGISTS | WEEKLY DATA AUDITS | CONVERSION REFACTORING
            </div>
          </BentoTile>

          {/* Tile 2: Square Layout with Badge (4 Cols) */}
          <BentoTile className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[350px]">
            {/* Visual simulation inside tile */}
            <div className="absolute top-[10%] right-[10%] w-24 h-24 rounded-full border border-white/5 bg-zinc-950/40 flex items-center justify-center pointer-events-none group-hover:scale-110 group-hover:border-electric-blue/30 transition-all duration-500">
              <div className="w-16 h-16 rounded-full border border-dashed border-electric-blue animate-spin-slow flex items-center justify-center">
                <Zap className="w-6 h-6 text-electric-blue animate-pulse" />
              </div>
            </div>

            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-electric-blue">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mt-4">
                ROI-FOCUSED ENGINE
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                No vanity metrics, fake follower counts, or confusing jargon. We build comprehensive, end-to-end acquisition funnels focused entirely on driving qualified pipeline, customer sign-ups, and net new revenue.
              </p>
            </div>

            <div className="flex items-center gap-2 mt-8 border-t border-white/[0.05] pt-5 relative z-10 text-xs text-zinc-500 font-mono">
              <span className="text-electric-blue text-sm">🔵</span>
              <span>100% Attributable Revenue Growth</span>
            </div>
          </BentoTile>

          {/* Tile 3: Vertical Stat Layout (4 Cols) */}
          <BentoTile className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[350px]">
            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-cyber-violet">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl text-white uppercase tracking-wider mt-4">
                500M+ IMPRESSIONS
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                Join an elite circle of businesses that have scaled their digital presence globally. Leverage massive distribution channels, viral content strategies, and top-tier SEO rankings.
              </p>
            </div>

            {/* Interactive simulator ticker */}
            <div className="mt-8 pt-5 border-t border-white/[0.05] relative z-10 flex flex-col gap-2 font-mono text-[9px] text-zinc-500">
              <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded border border-white/5">
                <span>BRANDS SCALED:</span>
                <span className="text-electric-blue font-bold">500+ GLOBAL</span>
              </div>
              <div className="flex justify-between items-center bg-white/[0.01] p-1.5 rounded border border-white/5">
                <span>AD NETWORK STATUS:</span>
                <span className="text-white font-bold">PREMIER PARTNERS</span>
              </div>
            </div>
          </BentoTile>

          {/* Tile 4: Wide Innovation Layout (8 Cols) */}
          <BentoTile className="col-span-12 lg:col-span-8 min-h-[350px]">
            {/* Visual Vector graphic map overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-8 opacity-25 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none">
              <svg className="w-full h-full max-w-[350px]" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#64CEFB" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#64CEFB" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <line x1="100" y1="60" x2="40" y2="30" stroke="#333" strokeWidth="1" strokeDasharray="3,3" />
                <line x1="100" y1="60" x2="160" y2="30" stroke="#333" strokeWidth="1" />
                <line x1="100" y1="60" x2="40" y2="90" stroke="#333" strokeWidth="1" />
                <line x1="100" y1="60" x2="160" y2="90" stroke="#333" strokeWidth="1" strokeDasharray="3,3" />
                
                {/* Center Core Node */}
                <circle cx="100" cy="60" r="18" fill="url(#nodeGlow)" />
                <circle cx="100" cy="60" r="6" fill="#60a5fa" />
                
                {/* Peripheral Nodes */}
                <circle cx="40" cy="30" r="4" fill="#64CEFB" />
                <circle cx="160" cy="30" r="4" fill="#ffffff" />
                <circle cx="40" cy="90" r="4" fill="#64CEFB" />
                <circle cx="160" cy="90" r="4" fill="#64CEFB" />
              </svg>
            </div>

            {/* Core Content */}
            <div className="flex flex-col gap-3 relative z-10">
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 w-fit text-electric-blue">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-wider mt-4">
                AI-INTEGRATED MARKETING
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-md font-sans">
                Stay ahead of the curve. We combine advanced predictive AI modeling, automated audience clustering, and cutting-edge creative asset generation tools with traditional frameworks to triple your campaign optimization speed.
              </p>
            </div>

            <div className="flex gap-2 mt-8 border-t border-white/[0.05] pt-5 relative z-10 text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
              PREDICTIVE ROAS | META AUTOMATION | REAL-TIME BIDDING VELOCITY
            </div>
          </BentoTile>

        </div>
      </div>
    </section>
  );
}
