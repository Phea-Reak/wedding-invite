import React from 'react';

export const CornerDecoration = ({ className }) => {
  return (
    <div className={`absolute w-32 h-32 md:w-56 md:h-56 z-0 pointer-events-none opacity-60 ${className}`}>
       {/* Simplified Floral Art Deco / Khmer Hybrid */}
       <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Main Leaf shape */}
          <path d="M0 0 L100 0 C100 40 60 100 0 100 L0 0 Z" fill="currentColor" fillOpacity="0.1"/>
          <path d="M5 5 L95 5 C90 40 55 90 5 95 L5 5 Z" stroke="currentColor" strokeWidth="1"/>
          
          {/* Inner details - Gold */}
          <path d="M0 0 C40 10 70 40 80 80" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M10 0 C45 15 65 45 70 80" stroke="#D4AF37" strokeWidth="1" fill="none" />
          
          {/* Flowers */}
          <circle cx="80" cy="80" r="4" fill="#D4AF37" />
          <circle cx="65" cy="90" r="3" fill="#D4AF37" />
          <circle cx="90" cy="65" r="3" fill="#D4AF37" />
       </svg>
    </div>
  );
};