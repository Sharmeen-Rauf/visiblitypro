'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Disable body scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Cinematic entry animation for preloader elements
    const tlIntro = gsap.timeline();
    tlIntro.fromTo(
      textRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out' }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, letterSpacing: '0.1em' },
      { opacity: 1, letterSpacing: '0.4em', duration: 1.0, ease: 'power2.out' },
      '-=0.6'
    );

    let currentProgress = 0;
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8) + 1;
      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        
        // Exit timeline: morph loading bar color, lift elements, and slide overlay up
        const tlExit = gsap.timeline({
          onComplete: () => {
            // Restore body scroll
            document.body.style.overflow = '';
            onComplete();
          },
        });

        tlExit.to(progressLineRef.current, {
          backgroundColor: '#64CEFB', // Light Blue
          duration: 0.2,
        })
        .to([textRef.current, subtitleRef.current], {
          y: -40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.in',
        })
        .to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: 'power4.inOut',
        });
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#000000] z-[99999] flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Top Banner */}
      <div className="w-full flex justify-between items-center text-zinc-500 font-mono text-xs md:text-sm">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
          VIZIBILITYPRO PLATFORM v1.5
        </span>
        <span>© 2026 ALL RIGHTS RESERVED</span>
      </div>

      {/* Kinetic Brand Center */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="overflow-hidden">
          <h1
            ref={textRef}
            className="font-display font-black text-5xl md:text-8xl tracking-[0.15em] uppercase bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent"
          >
            VIZIBILITYPRO
          </h1>
          <p
            ref={subtitleRef}
            className="font-sans text-xs md:text-sm text-electric-blue tracking-[0.4em] uppercase mt-4"
          >
            Engineering digital supremacy
          </p>
        </div>
      </div>

      {/* Cinematic Progress Bar */}
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 font-mono">
        <div className="flex justify-between items-end text-xs text-zinc-400">
          <span className="text-zinc-600 animate-pulse">INITIALIZING HOLO GRAPHICS ENGINE...</span>
          <span className="text-2xl font-light text-electric-blue">
            {progress.toString().padStart(3, '0')}%
          </span>
        </div>
        <div className="w-full h-[2px] bg-zinc-900 overflow-hidden relative">
          <div
            ref={progressLineRef}
            className="h-full bg-gradient-to-r from-cyber-violet via-electric-blue to-white origin-left transition-all duration-75"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}
