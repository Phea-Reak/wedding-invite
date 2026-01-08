import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

export const OpeningSequence = ({ onOpen }) => {
  const [stage, setStage] = useState('intro'); // 'intro' | 'aiming' | 'shooting' | 'impact' | 'note' | 'opening'

  useEffect(() => {
    // 1. Walking Phase (0-3s)
    const walkTimer = setTimeout(() => setStage('aiming'), 3000);
    
    // 2. Aiming Phase (3-4s)
    const aimTimer = setTimeout(() => setStage('shooting'), 4000);

    // 3. Shooting Phase (4-4.6s)
    const shootTimer = setTimeout(() => setStage('impact'), 4600);

    // 4. Impact Phase (4.6-5.1s)
    const impactTimer = setTimeout(() => setStage('note'), 5100);

    return () => {
      clearTimeout(walkTimer);
      clearTimeout(aimTimer);
      clearTimeout(shootTimer);
      clearTimeout(impactTimer);
    };
  }, []);

  const handleOpenClick = () => {
    setStage('opening');
    setTimeout(onOpen, 800);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-[#1A4D2E] flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
       {/* Container for the story scene */}
       <div className="relative w-full max-w-6xl h-[60vh] md:h-[500px] flex items-end justify-between px-6 md:px-20 pb-10 overflow-hidden md:overflow-visible">
          
          {/* Ground Line */}
          <div className="absolute bottom-10 left-0 right-0 h-[2px] bg-[#D4AF37]/30 rounded-full"></div>

          {/* --- GIRL CHARACTER --- */}
          <motion.div 
            className="relative z-10 w-24 h-40 md:w-32 md:h-52 shrink-0"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, ease: "linear" }}
          >
             {/* SVG Character */}
             <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl filter saturate-150">
                {/* Hair */}
                <path d="M50 20 Q80 20 85 60 L80 90 Q50 80 20 90 L15 60 Q20 20 50 20" fill="#3E2723" />
                <circle cx="50" cy="45" r="20" fill="#F3E5AB" /> {/* Face */}
                
                {/* Body / Dress */}
                <path d="M50 65 L20 160 Q50 170 80 160 L50 65" fill="#A8C6A8" /> {/* Sage Dress */}
                
                {/* Legs (Animated when walking) */}
                {stage === 'intro' ? (
                   <g>
                     <motion.path 
                       d="M40 160 L40 195" stroke="#F3E5AB" strokeWidth="8" strokeLinecap="round"
                       animate={{ d: ["M40 160 L30 190", "M40 160 L50 190", "M40 160 L30 190"] }}
                       transition={{ repeat: Infinity, duration: 0.6 }}
                     />
                     <motion.path 
                       d="M60 160 L60 195" stroke="#F3E5AB" strokeWidth="8" strokeLinecap="round"
                       animate={{ d: ["M60 160 L70 190", "M60 160 L50 190", "M60 160 L70 190"] }}
                       transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                     />
                   </g>
                ) : (
                   <g>
                     <path d="M40 160 L35 195" stroke="#F3E5AB" strokeWidth="8" strokeLinecap="round" />
                     <path d="M60 160 L65 195" stroke="#F3E5AB" strokeWidth="8" strokeLinecap="round" />
                   </g>
                )}

                {/* Arms */}
                {stage === 'intro' ? (
                    <motion.path 
                      d="M50 75 L50 120" stroke="#F3E5AB" strokeWidth="8" strokeLinecap="round"
                      animate={{ d: ["M50 75 L30 110", "M50 75 L70 110", "M50 75 L30 110"] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    />
                ) : (
                    // Shooting Pose
                    <g>
                        {/* Back Arm */}
                        <path d="M45 75 L75 85" stroke="#F3E5AB" strokeWidth="8" strokeLinecap="round" />
                        {/* Front Arm */}
                        <path d="M55 75 L75 85" stroke="#F3E5AB" strokeWidth="8" strokeLinecap="round" />
                        {/* Bow */}
                        <path d="M75 50 Q95 85 75 120" stroke="#D4AF37" strokeWidth="2" fill="none" />
                        <line x1="75" y1="50" x2="75" y2="120" stroke="white" strokeWidth="0.5" opacity="0.6" />
                    </g>
                )}
             </svg>
          </motion.div>

          {/* --- ARROW PROJECTILE --- */}
          {(stage === 'shooting' || stage === 'impact' || stage === 'note') && (
              <motion.div
                  className="absolute z-20 top-auto bottom-[80px] md:bottom-[120px]"
                  initial={{ left: '15%', opacity: 1 }}
                  animate={stage === 'shooting' ? { left: '80%' } : { left: '80%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: "linear" }}
              >
                 <div className="flex items-center transform rotate-6">
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                    <Heart className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37] -ml-2 transform rotate-90" />
                 </div>
              </motion.div>
          )}

          {/* --- MAN CHARACTER --- */}
          <div className="relative z-10 w-28 h-40 md:w-40 md:h-52 shrink-0">
              <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-2xl">
                 {/* Table */}
                 <path d="M60 140 L120 140 L120 200 L60 200" fill="#5D4037" />
                 <rect x="65" y="120" width="10" height="20" fill="white" /> {/* Cup */}

                 {/* Chair */}
                 <path d="M10 140 L40 140 L40 200 L10 200" fill="#3E2723" />
                 
                 {/* Body Sitting */}
                 <path d="M20 140 L20 180" stroke="#2d2d2d" strokeWidth="10" /> {/* Legs */}
                 <path d="M40 140 L40 180" stroke="#2d2d2d" strokeWidth="10" />

                 <path d="M20 70 L20 140 Q40 150 60 140 L60 70" fill="#D7CCC8" /> {/* Shirt */}
                 <circle cx="40" cy="50" r="22" fill="#F3E5AB" /> {/* Head */}
                 <path d="M18 40 Q40 10 62 40" fill="none" stroke="#212121" strokeWidth="8" strokeLinecap="round" /> {/* Hair */}

                 {/* Drinking Arm */}
                 <motion.g
                    animate={{ rotate: [0, -25, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    style={{ originX: "40px", originY: "70px" }}
                 >
                     <path d="M30 70 L50 100" stroke="#F3E5AB" strokeWidth="10" strokeLinecap="round" />
                     <path d="M50 100 L65 115" stroke="#F3E5AB" strokeWidth="10" strokeLinecap="round" />
                 </motion.g>

                 {/* Impact Hearts */}
                 <AnimatePresence>
                     {(stage === 'impact' || stage === 'note' || stage === 'opening') && (
                        <g>
                           <motion.text x="50" y="30" fontSize="30" fill="red"
                             initial={{ opacity: 0, y: 0 }}
                             animate={{ opacity: 1, y: 20 }}
                           >
                             ❤️
                           </motion.text>
                        </g>
                     )}
                 </AnimatePresence>
              </svg>
          </div>

       </div>

       {/* --- FALLING NOTE --- */}
       <AnimatePresence>
       {(stage === 'note' || stage === 'opening') && (
          <motion.div
             className="absolute top-1/2 left-1/2 z-50 cursor-pointer w-[90%] max-w-sm"
             initial={{ y: -600, x: "-50%", rotate: 20, opacity: 0 }}
             animate={stage === 'opening' 
                ? { scale: 5, opacity: 0 } 
                : { y: "-50%", x: "-50%", rotate: 0, opacity: 1 }
             }
             transition={stage === 'opening' ? { duration: 0.8 } : { type: "spring", damping: 12 }}
             onClick={handleOpenClick}
          >
              <div className="bg-[#FFF8E1] w-full p-6 rounded-lg shadow-2xl border-4 border-[#D4AF37] text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="mb-4">
                     <Heart className="w-10 h-10 text-[#D4AF37] fill-[#D4AF37] mx-auto animate-pulse" />
                  </div>
                  <h3 className="font-moul text-[#1A4D2E] text-xl mb-2">សូមគោរពអញ្ជើញ</h3>
                  <p className="font-playfair text-[#5D4037] text-lg font-bold mb-4">
                    You are invited to the Wedding
                  </p>
                  <p className="font-battambang text-sm text-[#8D6E63] animate-bounce mt-4">
                    Click to Open
                  </p>
              </div>
          </motion.div>
       )}
       </AnimatePresence>

       {/* Background Elements */}
       <div className="absolute inset-0 pointer-events-none">
           <div className="absolute top-10 left-10 w-20 h-20 bg-[#D4AF37] rounded-full blur-3xl opacity-20"></div>
           <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#D4AF37] rounded-full blur-3xl opacity-10"></div>
       </div>

    </motion.div>
  );
};