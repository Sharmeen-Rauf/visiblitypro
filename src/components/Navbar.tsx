'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const menuItems = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  // Monitor scroll height to auto-hide navbar on scroll down, show on scroll up
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = lastScrollY.current;
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY.current = latest;
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none"
      >
        <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-full bg-glass-card border border-glass-border backdrop-blur-md pointer-events-auto shadow-2xl shadow-black/40">
          
          {/* Logo */}
          <Magnetic strength={0.2}>
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-display font-black text-xl md:text-2xl tracking-wider text-white uppercase relative overflow-hidden">
                APEX
                <span className="text-electric-blue">.</span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-blue translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav Items with Framer Motion Sliding Backplate */}
          <div className="hidden md:flex items-center gap-1 relative">
            {menuItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-4 py-2 text-sm text-zinc-300 font-medium transition-colors duration-300 hover:text-white"
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navBackplate"
                    className="absolute inset-0 bg-white/[0.04] border border-white/[0.02] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            
            {/* Live Client availability Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-black/60 rounded-full border border-glass-border">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hologram-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-hologram-cyan"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-medium">
                Taking clients for Q3 2026
              </span>
            </div>

            {/* Magnetic Book a Call CTA */}
            <div className="hidden md:block">
              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white text-black overflow-hidden shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[0_4px_30px_rgba(0,240,255,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Book a Call
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-hologram-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out -z-10" />
                </a>
              </Magnetic>
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Glassmorphic Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl md:hidden flex flex-col justify-between p-8"
          >
            {/* Top Empty buffer to offset drawer elements */}
            <div className="h-16" />

            {/* Mobile Links */}
            <div className="flex flex-col gap-6 text-left my-auto">
              <span className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase">MENU SECTIONS</span>
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -30, opacity: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.5, ease: 'easeOut' }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display font-black text-4xl uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-300 flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-6 h-6 text-electric-blue" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info Status & CTAs */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[1px] bg-white/10" />
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hologram-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-hologram-cyan"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Taking clients for Q3 2026
                </span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-full text-sm font-bold uppercase bg-white text-black"
              >
                Book a Discovery Call
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
