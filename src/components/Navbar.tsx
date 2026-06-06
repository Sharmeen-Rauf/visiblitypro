'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#why-us' },
  { name: 'Services', href: '/#services' },
  { name: 'Case Studies', href: '/#process' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Blog', href: '/#blog' },
  { name: 'Contact us', href: '/#contact', icon: ArrowUpRight },
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
        <div className="w-full max-w-7xl flex items-center justify-between px-6 py-4 pointer-events-auto">
          {/* Logo: Circular design with 2px white border, filled white circle inside, text */}
          <Magnetic strength={0.25}>
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              <span className="font-display font-black text-lg md:text-xl tracking-wider text-white uppercase">
                VIZIBILITYPRO
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav Items: Rounded pill container with gray-700 (zinc-700) border */}
          <div className="hidden lg:flex items-center gap-1 px-4 py-2 rounded-full border border-zinc-700 bg-black/60 backdrop-blur-md relative">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-3.5 py-1 text-sm text-white/80 font-medium transition-colors duration-300 hover:text-white flex items-center gap-1"
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navBackplate"
                    className="absolute inset-0 bg-white/[0.06] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{item.name}</span>
                {item.icon && <item.icon className="w-3.5 h-3.5 stroke-[2.5]" />}
              </a>
            ))}
          </div>

          {/* Mobile hamburger menu icon on screens smaller than lg */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white transition-colors"
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-8"
          >
            {/* Top buffer spacing */}
            <div className="h-20" />

            {/* Mobile Links */}
            <div className="flex flex-col gap-6 text-left my-auto">
              <span className="text-zinc-600 font-mono text-[10px] tracking-[0.3em] uppercase">NAVIGATION</span>
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4, ease: 'easeOut' }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display font-black text-3xl md:text-4xl uppercase tracking-wider text-zinc-300 hover:text-white transition-colors duration-300 flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    {item.icon ? (
                      <item.icon className="w-6 h-6 text-electric-blue" />
                    ) : (
                      <ArrowUpRight className="w-6 h-6 text-zinc-700" />
                    )}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Bottom info */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-[1px] bg-white/10" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-blue"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono font-medium">
                  Enrollment Closes Soon
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
