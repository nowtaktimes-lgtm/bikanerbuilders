'use client';

import React, { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before Construction',
  afterAlt = 'After Construction',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(percentage);
  };

  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchend', onMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-slate-200 select-none aspect-[4/3] md:aspect-video"
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseMove={(e: MouseEvent) => handleMove(e.clientX)}
      onTouchStart={() => setIsDragging(true)}
      onTouchMove={(e: TouchEvent) => handleMove(e.touches[0].clientX)}
    >
      <Image
        src={beforeImage}
        alt={beforeAlt}
        fill
        loading="lazy"
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 1000px"
      />

      <div 
        className="absolute inset-0 z-10 overflow-hidden"
        style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
      >
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          loading="lazy"
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 1000px"
        />
      </div>

      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-white/90 backdrop-blur-sm cursor-ew-resize drop-shadow-md"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.3)] border border-gray-100">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#0F172A" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M10 16l-4-4 4-4M14 8l4 4-4 4" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
        <span className="bg-navy-900/80 backdrop-blur-md text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20 bg-[#0F172A]">
          Before
        </span>
      </div>
      
      <div className="absolute bottom-4 right-4 z-30 pointer-events-none">
        <span className="bg-orange-500/90 backdrop-blur-md text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20 bg-[#EA580C]">
          After
        </span>
      </div>
    </div>
  );
}
