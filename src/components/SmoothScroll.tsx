'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check if we are on a touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    const lenis = new Lenis({
      duration: isTouch ? 1.0 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isTouch, // Disable wheel smoothing on mobile/touch to let native handles do their job
    });

    // Sync Lenis scroll updates with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Hook Lenis raf loops to GSAP's high-precision ticker
    const updateGsapTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateGsapTicker);
    };
  }, []);

  return <>{children}</>;
}
