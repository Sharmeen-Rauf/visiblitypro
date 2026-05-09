'use client';

import React, { useState, useRef, MouseEvent } from 'react';

interface TiltProps {
  children: React.ReactNode;
  maxRotation?: number; // Maximum tilting angle in degrees, default is 10
  className?: string;
}

export default function Tilt({ children, maxRotation = 10, className = '' }: TiltProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to the card bounds
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation angles
    // Y-rotation maps to horizontal movement, X-rotation maps to vertical (inverted)
    const rX = -((mouseY - height / 2) / (height / 2)) * maxRotation;
    const rY = ((mouseX - width / 2) / (width / 2)) * maxRotation;

    setRotation({ x: rX, y: rY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const style = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.03, 1.03, 1.03)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
