'use client';
import React, { useState } from 'react';

export default function ReadMoreText({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={className}>
      <div className={`${isExpanded ? '' : 'line-clamp-2'} md:line-clamp-none transition-all duration-300`}>
        {children}
      </div>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-orange-500 font-bold text-sm md:hidden hover:underline focus:outline-none"
      >
        {isExpanded ? '- Read Less' : '+ Read More'}
      </button>
    </div>
  );
}
