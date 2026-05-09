'use client';

import { useEffect } from 'react';

export default function MouseTracker() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Find coordinates relative to the screen/scroll viewport
      // For absolute element positions inside scrolling containers, we capture Client coordinates.
      // Cards can then calculate positions using bounding rects or viewport coordinates.
      // In CSS, to make it perfectly align with absolute elements inside relative parents,
      // it is ideal to track the coordinates relative to the bounding box inside the card itself,
      // OR we can use simple CSS variables. Since our card before-pseudo elements are sized relative to the cards,
      // let's track relative to client viewport or let each card do a lightweight hook!
      // Wait, let's look at the spotlight-card style in CSS:
      // background: radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), ...)
      // Since it's inside card, the variables must be relative to the card's bounding rect!
      // Ah! If it's relative to the card, then having a single global coordinate is not enough UNLESS we set it relative to the page and subtract rect offsets.
      // Alternatively, we can let each card track mouse coordinates locally using a simple native mouse move event! This is very standard, simple, and 100% correct for individual card spotlight offsets.
      // Let's implement a local mouse tracker in the pricing and services cards themselves!
      // However, we can also keep a global cursor follower (like a floating organic custom circle spotlight behind the mouse).
      // Let's use this global tracker to drive an ambient "Mouse follow glow effect / organic custom cursor spotlight" on the background!
      // This is a beautiful aesthetic feature requested in the STYLE DIRECTION.
      
      const glow = document.getElementById('global-cursor-glow');
      if (glow) {
        // Animate glow coordinates with slight inertia or directly
        glow.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="global-cursor-glow"
      className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-radial from-[rgba(0,240,255,0.06)] via-[rgba(189,0,255,0.02)] to-transparent pointer-events-none z-10 transition-transform duration-300 ease-out will-change-transform opacity-60 mix-blend-screen"
    />
  );
}
