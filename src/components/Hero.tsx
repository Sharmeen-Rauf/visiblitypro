'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import Magnetic from './Magnetic';
import Tilt from './Tilt';

// Dynamically load the heavy React Three Fiber Canvas with SSR disabled
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-t-2 border-r-2 border-electric-blue animate-spin" />
        <span className="absolute text-xs text-electric-blue uppercase tracking-widest font-mono animate-pulse">
          Loading 3D...
        </span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const headlineWords = "Digital growth, engineered for results.".split(" ");

  // Framer motion containers for text stagger
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVars = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const, // premium easeOutCubic
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 md:px-8 xl:px-16 overflow-hidden bg-mesh-glow">
      {/* Cinematic Cyber Grid Backdrop */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] -z-10" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Massive Neon Auroras */}
      <div className="absolute top-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-cyber-violet/10 blur-[150px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-electric-blue/8 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
        
        {/* Left Typography Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left relative z-20">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-hologram-cyan animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-mono font-medium">
              NEXT-GEN VISIBILITY SYSTEMS
            </span>
          </div>

          {/* Staggered Word-by-Word Headline */}
          <motion.h1
            variants={containerVars}
            initial="hidden"
            animate="visible"
            className="font-display font-black text-5xl md:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white"
          >
            {headlineWords.map((word, idx) => (
              <span key={idx} className="inline-block overflow-hidden mr-3 pb-2">
                <motion.span
                  variants={wordVars}
                  className={`inline-block ${
                    word.toLowerCase().includes('results.') || word.toLowerCase().includes('growth,')
                      ? 'bg-gradient-to-r from-electric-blue via-hologram-cyan to-cyber-violet bg-clip-text text-transparent filter drop-shadow-[0_2px_15px_rgba(0,240,255,0.15)]'
                      : ''
                  }`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: 'easeOut' }}
            className="font-sans text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl"
          >
            We help ambitious businesses dominate search, convert visitors, and scale revenue — with SEO, PPC, social media, web development, and local visibility.
          </motion.p>

          {/* Interactive Magnetic CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4"
          >
            <Magnetic strength={0.2}>
              <Tilt maxRotation={6}>
                <a
                  href="https://wa.me/923146773542?text=Hello%20Visibility%20Pro,%20I%20would%20like%20to%20start%20a%20digital%20growth%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-electric-blue to-hologram-cyan text-black shadow-[0_4px_30px_rgba(0,240,255,0.25)] transition-all duration-500 hover:shadow-[0_4px_45px_rgba(0,240,255,0.5)] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Start your audit
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyber-violet to-electric-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out -z-10" />
                </a>
              </Tilt>
            </Magnetic>

            <Magnetic strength={0.15}>
              <a
                href="#services"
                className="relative group flex items-center justify-center gap-2 px-8 py-4.5 rounded-full text-sm font-bold uppercase tracking-wider text-white border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05]"
              >
                <span>See what we do</span>
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right 3D Scene Column */}
        <div className="lg:col-span-5 h-[400px] md:h-[550px] xl:h-[600px] w-full relative flex items-center justify-center z-10">
          
          {/* Dynamic 3D canvas */}
          <div className="w-full h-full">
            <ThreeScene />
          </div>

          {/* Floating UI dashboard cards surrounding the 3D Sphere */}
          
          {/* Floating Card 1: SEO Signal */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.6, duration: 1.0, type: 'spring' }}
            className="absolute top-[12%] right-[5%] md:right-[10%] p-4 rounded-2xl glass-panel-glow border border-electric-blue/30 flex items-center gap-3 backdrop-blur-xl animate-float"
          >
            <div className="p-2 rounded-xl bg-electric-blue/10 text-electric-blue">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-wider">AI AGENT ENGINE</span>
              <span className="block font-display font-extrabold text-sm text-white">99.8% Efficiency</span>
            </div>
          </motion.div>

          {/* Floating Card 2: Live ROI Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.8, duration: 1.0, type: 'spring' }}
            className="absolute bottom-[20%] left-[2%] md:left-[5%] p-4 rounded-2xl glass-panel border border-white/10 flex items-center gap-3 backdrop-blur-xl shadow-2xl"
            style={{ animation: 'float 7s ease-in-out infinite 1.5s' }}
          >
            <div className="p-2 rounded-xl bg-cyber-violet/10 text-cyber-violet">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-wider">INDEX SPEED</span>
              <span className="block font-display font-extrabold text-sm text-white">0.4s Global Sync</span>
            </div>
          </motion.div>

          {/* Floating Card 3: Cyber Security Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 1.0, type: 'spring' }}
            className="absolute top-[80%] right-[15%] p-3.5 rounded-2xl glass-panel border border-white/5 flex items-center gap-2.5 backdrop-blur-xl shadow-xl"
            style={{ animation: 'float 8s ease-in-out infinite 0.5s' }}
          >
            <ShieldCheck className="w-4 h-4 text-hologram-cyan" />
            <span className="text-xs text-zinc-300 font-mono tracking-wide">Secure Sandbox Active</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metrics Cards */}
      <div className="max-w-7xl mx-auto w-full mt-12 relative z-20">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { metric: "3.8×", label: "Average ROI", desc: "Proven return multiplier across diverse client campaigns." },
            { metric: "120+", label: "Campaigns launched", desc: "Custom web structures and enterprise digital solutions." },
            { metric: "94%", label: "Client retention", desc: "Long-term relationships driven by absolute performance." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: 'easeOut' }}
            >
              <Tilt maxRotation={6} className="h-full">
                <div className="glass-panel p-6 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-radial from-electric-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <span className="block font-display font-black text-4xl md:text-5xl bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent group-hover:from-electric-blue group-hover:to-hologram-cyan transition-colors duration-500">
                    {item.metric}
                  </span>
                  <span className="block text-sm font-semibold text-zinc-200 mt-2">
                    {item.label}
                  </span>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
