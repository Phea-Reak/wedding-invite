import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export const OpeningSequence = ({ onOpen }) => {
  const [stage, setStage] = useState('intro'); // 'intro' | 'aiming' | 'shooting' | 'impact' | 'note' | 'opening'

  useEffect(() => {
    // Smoother timeline
    const timers = [
        setTimeout(() => setStage('aiming'), 3500),   // Walk in
        setTimeout(() => setStage('shooting'), 4500), // Aim
        setTimeout(() => setStage('impact'), 5000),   // Shoot
        setTimeout(() => setStage('note'), 5500)      // Impact & Note
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleOpenClick = () => {
    setStage('opening');
    setTimeout(onOpen, 1200);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-[#4A0404] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
       {/* Premium Grain Texture */}
       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

       {/* Story Container */}
       <div className="relative w-full max-w-5xl h-[500px] flex items-end justify-between px-4 md:px-20 pb-20">
          
          {/* Golden Floor */}
          <div className="absolute bottom-20 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>

          {/* --- GIRL (Golden Silhouette) --- */}
          <motion.div 
            className="relative z-10 w-28 h-48 md:w-40 md:h-64 shrink-0"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          >
             {/* Using a simplified, elegant path for silhouette style */}
             <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor:"#C5A059", stopOpacity:1}} />
                        <stop offset="50%" style={{stopColor:"#F3E5AB", stopOpacity:1}} />
                        <stop offset="100%" style={{stopColor:"#C5A059", stopOpacity:1}} />
                    </linearGradient>
                </defs>
                
                {/* Dress Silhouette */}
                <path d="M50 30 Q70 30 70 60 L60 180 Q50 190 40 180 L30 60 Q30 30 50 30" fill="url(#goldGrad)" />
                <circle cx="50" cy="25" r="12" fill="url(#goldGrad)" />
                
                {/* Bow Arms */}
                {stage === 'intro' ? (
                      <motion.path d="M50 50 L50 100" stroke="url(#goldGrad)" strokeWidth="3" 
                         animate={{ d: ["M50 50 L40 90", "M50 50 L60 90", "M50 50 L40 90"] }}
                         transition={{ duration: 1.5, repeat: Infinity }}
                      />
                ) : (
                      <g>
                         <path d="M45 50 L80 60" stroke="url(#goldGrad)" strokeWidth="3" />
                         <path d="M55 50 L80 60" stroke="url(#goldGrad)" strokeWidth="3" />
                         {/* Elegant Bow */}
                         <path d="M80 30 C100 60 100 90 80 120" stroke="#F3E5AB" strokeWidth="2" fill="none" />
                         <line x1="80" y1="30" x2="80" y2="120" stroke="white" strokeWidth="0.5" opacity="0.5" />
                      </g>
                )}
             </svg>
          </motion.div>

          {/* --- ARROW (Golden Streak) --- */}
          {(stage === 'shooting' || stage === 'impact' || stage === 'note') && (
              <motion.div
                  className="absolute z-20 bottom-[140px]"
                  initial={{ left: '20%', opacity: 1, scale: 0.5 }}
                  animate={stage === 'shooting' ? { left: '75%', scale: 1 } : { left: '75%', opacity: 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}
              >
                 <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#fff]"></div>
                 <Heart className="absolute -right-2 -top-3 w-6 h-6 text-[#C5A059] fill-[#C5A059] rotate-90" />
              </motion.div>
          )}

          {/* --- MAN (Golden Silhouette) --- */}
          <div className="relative z-10 w-28 h-48 md:w-40 md:h-64 shrink-0 opacity-90">
              <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                 {/* Chair & Table Silhouette */}
                 <path d="M60 120 L100 120 L100 180 L60 180" fill="#1F0A0A" stroke="#C5A059" strokeWidth="1" />
                 
                 {/* Man Sitting */}
                 <path d="M20 180 L40 120 L40 50 L20 120 Z" fill="url(#goldGrad)" />
                 <circle cx="40" cy="40" r="14" fill="url(#goldGrad)" />
                 <path d="M40 120 L60 120 L60 180" stroke="url(#goldGrad)" strokeWidth="4" fill="none" />

                 {/* Arm Drinking */}
                 <motion.g
                    animate={{ rotate: [0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    style={{ originX: "40px", originY: "60px" }}
                 >
                     <path d="M40 60 L70 80" stroke="url(#goldGrad)" strokeWidth="4" />
                     <rect x="65" y="70" width="10" height="15" fill="#F3E5AB" />
                 </motion.g>

                 {/* Love Impact */}
                 <AnimatePresence>
                     {(stage === 'impact' || stage === 'note' || stage === 'opening') && (
                        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                           <Heart x="30" y="0" width="30" height="30" className="text-red-500 fill-red-500 animate-bounce" />
                        </motion.g>
                     )}
                 </AnimatePresence>
              </svg>
          </div>
       </div>

       {/* --- PREMIUM ENVELOPE --- */}
       <AnimatePresence>
       {(stage === 'note' || stage === 'opening') && (
          <motion.div
             className="absolute top-1/2 left-1/2 z-50 cursor-pointer"
             initial={{ y: -800, x: "-50%", rotate: 5, opacity: 0 }}
             animate={stage === 'opening' 
                ? { scale: 15, opacity: 0 } 
                : { y: "-50%", x: "-50%", rotate: 0, opacity: 1 }
             }
             transition={stage === 'opening' ? { duration: 1.2, ease: "anticipate" } : { type: "spring", stiffness: 100, damping: 20 }}
             onClick={handleOpenClick}
          >
              <div className="w-[350px] bg-[#FDFBF7] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center p-8 rounded-sm border border-[#C5A059] relative">
                  {/* Wax Seal */}
                  <div className="w-16 h-16 bg-[#8B0000] rounded-full absolute -top-8 shadow-md flex items-center justify-center border-4 border-[#700000] group">
                      <div className="w-12 h-12 border border-[#a00000] rounded-full flex items-center justify-center">
                        <span className="font-script text-[#C5A059] text-2xl group-hover:scale-110 transition-transform">T&R</span>
                      </div>
                  </div>

                  <div className="mt-6 text-center space-y-4">
                      <p className="font-script text-[#C5A059] text-2xl">You are cordially invited</p>
                      <div className="w-full h-[1px] bg-[#C5A059]/30"></div>
                      <h3 className="font-moul text-[#4A0404] text-lg">អាពាហ៍ពិពាហ៍</h3>
                      <p className="font-khmer text-[#2C3E50] text-sm opacity-80">
                         សូមចុចដើម្បីបើកសំបុត្រ
                      </p>
                  </div>
              </div>
          </motion.div>
       )}
       </AnimatePresence>
       
       <div className="absolute bottom-10 text-[#C5A059] opacity-50 font-script text-xl">
           A Love Story
       </div>
    </motion.div>
  );
};