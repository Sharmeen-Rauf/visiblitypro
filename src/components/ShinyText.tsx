'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  className?: string;
}

export default function ShinyText({ text, className = '' }: ShinyTextProps) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent select-none ${className}`}
      style={{
        backgroundImage: 'linear-gradient(100deg, #64CEFB 35%, #ffffff 50%, #64CEFB 65%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
      animate={{
        backgroundPosition: ['200% 0', '-200% 0'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {text}
    </motion.span>
  );
}
