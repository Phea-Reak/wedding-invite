import React, { useEffect, useState } from 'react';

export const SakuraBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // 1. Inject Styles dynamically on mount (Client-side only)
    if (typeof document !== 'undefined' && !document.getElementById('gold-particle-style')) {
        const styleSheet = document.createElement("style");
        styleSheet.id = 'gold-particle-style';
        styleSheet.innerText = `
        @keyframes fall {
          0% { transform: translateY(-10vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(50vh) translateX(20px); opacity: 0.8; }
          100% { transform: translateY(110vh) translateX(-20px); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        `;
        document.head.appendChild(styleSheet);
    }

    // 2. Initialize particles
    const count = 25; 
    setParticles(Array.from({ length: count }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((i) => (
        <GoldParticle key={i} />
      ))}
    </div>
  );
};

const GoldParticle = () => {
  // We use a simplified random style generation here.
  // Note: In a strict Next.js environment, random values during render can cause 
  // hydration mismatches. If you see warnings, move these calcs to a useEffect or useMemo.
  const style = {
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${15 + Math.random() * 10}s`,
    opacity: 0.3 + Math.random() * 0.5,
    width: `${2 + Math.random() * 4}px`,
    height: `${2 + Math.random() * 4}px`,
  };

  return (
    <div 
      className="absolute top-[-10px] bg-[#C5A059] rounded-full animate-fall shadow-[0_0_5px_#C5A059]"
      style={style}
    ></div>
  );
};