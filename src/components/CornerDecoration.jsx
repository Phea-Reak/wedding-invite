import React from 'react';

export const CornerDecoration = ({ className }) => {
  return (
    <div className={`absolute w-24 h-24 md:w-40 md:h-40 z-0 pointer-events-none ${className}`}>
        {/* Since we don't have the actual SVG/PNG, this SVG mimics the 
           "Kanok" or Khmer floral art style in Gold.
        */}
       <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm opacity-80">
          <path d="M100 0C100 55.2285 55.2285 100 0 100V80C44.1828 80 80 44.1828 80 0H100Z" fill="#fede00" />
          <path d="M90 0C90 49.7056 49.7056 90 0 90V85C46.9442 85 85 46.9442 85 0H90Z" fill="#bfa700" />
          <circle cx="85" cy="85" r="5" fill="#fede00" />
          <circle cx="70" cy="92" r="3" fill="#fede00" />
          <circle cx="92" cy="70" r="3" fill="#fede00" />
          <path d="M60 10C65 25 75 35 90 40" stroke="#fede00" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 60C25 65 35 75 40 90" stroke="#fede00" strokeWidth="2" strokeLinecap="round" />
       </svg>
    </div>
  );
};