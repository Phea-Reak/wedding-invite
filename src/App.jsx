import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CornerDecoration } from './components/CornerDecoration';
import { SakuraBackground } from './components/SakuraBackground';
import { MusicPlayer } from './components/MusicPlayer';

export default function WeddingInvite() {
  return (
    <div className="relative min-h-screen bg-[#9a8c78] font-battambang overflow-x-hidden selection:bg-[#fede00] selection:text-[#9a8c78]">
      <SakuraBackground />
      <MusicPlayer />

      {/* ================= SECTION 1: COVER ================= */}
      {/* Matches styling of Image 1: White background content area with Khmer ornaments */}
      <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-white/10 backdrop-blur-sm">
        
        {/* Top & Bottom Ornaments (Simulated) */}
        <CornerDecoration className="top-0 left-0" />
        <CornerDecoration className="top-0 right-0 scale-x-[-1]" />
        
        <motion.div 
            initial={{ y: -30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
            className="z-10 text-center mt-12 md:mt-0"
        >
          <h1 className="font-moul text-[#fede00] text-3xl md:text-5xl lg:text-6xl mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] tracking-wide">
            សិរីសួស្ដីអាពាហ៍ពិពាហ៍
          </h1>
        </motion.div>

        {/* Couple Image Placeholder */}
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }} 
           animate={{ scale: 1, opacity: 1 }} 
           transition={{ delay: 0.3, duration: 1, type: "spring" }}
           className="relative w-64 h-64 md:w-80 md:h-96 z-10 mb-12"
        >
            {/* Placeholder for the couple cartoon */}
            <div className="w-full h-full rounded-full md:rounded-2xl overflow-hidden border-4 border-[#fede00] shadow-2xl bg-white relative group">
                <img 
                    src="couple.jpg" 
                    alt="Couple" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#9a8c78]/60 to-transparent"></div>
            </div>
            {/* Decorative floral elements around image (simulated with absolute divs) */}
            <div className="absolute -bottom-6 -left-10 text-4xl animate-bounce delay-700">🌸</div>
            <div className="absolute -top-4 -right-8 text-4xl animate-bounce delay-1000">🌸</div>
        </motion.div>

        {/* Names Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full max-w-4xl z-10"
        >
            {/* Daughter */}
            <div className="text-center">
                <p className="text-white text-lg font-bold mb-2 tracking-widest drop-shadow-md">កូនប្រុសនាម</p>
                <h2 className="font-moul text-[#fede00] text-3xl md:text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">ហ៊ាង ផល្លា</h2>
            </div>
            
            {/* Center Heart Line */}
            <div className="hidden md:flex flex-col items-center px-4">
                 <div className="w-[1px] h-12 bg-[#fede00]/50 mb-2"></div>
                 <Heart className="text-[#eaadd4] fill-[#eaadd4] w-10 h-10 animate-pulse drop-shadow-lg" />
                 <div className="w-[1px] h-12 bg-[#fede00]/50 mt-2"></div>
            </div>
            <Heart className="md:hidden text-[#eaadd4] fill-[#eaadd4] w-8 h-8 animate-pulse my-2" />

             {/* Son */}
            <div className="text-center">
                <p className="text-white text-lg font-bold mb-2 tracking-widest drop-shadow-md">កូនស្រីនាម</p>
                <h2 className="font-moul text-[#fede00] text-3xl md:text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">លីម សេងហ៊ាង</h2>
            </div>
        </motion.div>
        
        {/* Bottom decorative divider */}
        <div className="w-full max-w-md h-1 bg-gradient-to-r from-transparent via-[#fede00] to-transparent mt-12 opacity-60"></div>
      </section>


      {/* ================= SECTION 2: INVITATION CARD ================= */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10 bg-[#9a8c78]">
         
         {/* Background Initials Watermark */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 overflow-hidden">
            <span className="font-moul text-[300px] md:text-[500px] text-white whitespace-nowrap select-none">L ♡ H</span>
         </div>
         
         {/* Flying Birds/Decorations top left */}
         <div className="absolute top-10 left-0 md:left-10 w-48 opacity-80 pointer-events-none">
             <CornerDecoration className="rotate-180" />
         </div>
         {/* Bells top right */}
         <div className="absolute top-10 right-4 md:right-10 w-24 md:w-32 animate-swing origin-top z-0">
             <svg viewBox="0 0 100 100" fill="white" className="drop-shadow-lg">
                 <path d="M50 20 C30 20 20 50 10 80 L90 80 C80 50 70 20 50 20 Z" fill="#fff" stroke="#fede00" strokeWidth="2"/>
                 <circle cx="50" cy="85" r="5" fill="#fede00" />
                 <path d="M50 20 L50 0" stroke="#fede00" strokeWidth="3" />
             </svg>
         </div>

        <motion.div 
             initial={{ scale: 0.9, opacity: 0 }} 
             whileInView={{ scale: 1, opacity: 1 }} 
             transition={{ duration: 0.8 }}
             viewport={{ once: true, margin: "-100px" }}
             className="w-full max-w-lg text-center z-10"
        >
            <h2 className="font-moul text-[#fede00] text-2xl md:text-4xl mb-8 drop-shadow-md">សូមគោរពអញ្ជើញ</h2>

            {/* The Main Card */}
            <div className="bg-[#a49683] backdrop-blur-md text-white p-1 rounded-[40px] shadow-2xl relative">
                {/* Inner Border Line */}
                <div className="border-2 border-[#fede00] rounded-[36px] p-8 md:p-12 flex flex-col items-center bg-[#9a8c78]">
                    
                    <div className="bg-[#fede00] text-[#9a8c78] px-8 py-2 rounded-full font-bold mb-6 font-moul text-lg shadow-lg">
                         ហុង លី
                    </div>

                    <h3 className="text-xl font-bold mb-6 opacity-90">
                        កូនប្រុស កូនស្រី របស់យើងខ្ញុំ ដែលនឹងប្រព្រឹត្តទៅនៅ
                    </h3>
                    
                    {/* Date & Time */}
                    <div className="w-full space-y-4">
                        <div className="border-b border-[#fede00]/30 pb-4">
                            <p className="font-moul text-[#fede00] text-xl md:text-2xl leading-relaxed">
                                ថ្ងៃ សុក្រ ទី ០៩ ខែ មករា <br/> ឆ្នាំ ២០២៦
                            </p>
                        </div>
                        <div className="pt-2">
                             <p className="font-moul text-white text-lg md:text-xl">វេលាម៉ោង ៦:០០ ល្ងាច</p>
                        </div>
                    </div>

                     {/* Ornamental Divider */}
                    <div className="mt-8 text-[#fede00] text-2xl opacity-80">
                         ❦ ❧
                    </div>
                </div>
            </div>
        </motion.div>
      </section>


      {/* ================= SECTION 3: KHMER THANKS ================= */}
      <section className="min-h-screen flex items-center justify-center p-6 relative z-10 bg-white/5">
        <motion.div 
             initial={{ y: 50, opacity: 0 }} 
             whileInView={{ y: 0, opacity: 1 }} 
             transition={{ duration: 0.8 }} 
             viewport={{ once: true }}
             className="max-w-2xl w-full relative bg-white p-2 rounded-lg shadow-2xl transform rotate-1 md:rotate-0"
        >
            {/* Inner Content with Fancy Border */}
            <div className="border-4 border-double border-[#eaadd4] p-8 md:p-14 text-center rounded-sm bg-white h-full flex flex-col items-center justify-center relative">
                
                {/* Corner Decorations */}
                <div className="absolute -top-6 -left-6 w-20 h-20 text-[#eaadd4] rotate-0">
                    <svg viewBox="0 0 50 50" fill="currentColor"><path d="M0 0 L50 0 L50 10 L10 10 L10 50 L0 50 Z" /></svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 text-[#eaadd4] rotate-180">
                    <svg viewBox="0 0 50 50" fill="currentColor"><path d="M0 0 L50 0 L50 10 L10 10 L10 50 L0 50 Z" /></svg>
                </div>

                {/* Top Label */}
                <div className="font-moul text-[#eaadd4] text-xl md:text-2xl mb-8 border-b-2 border-[#eaadd4] pb-2 inline-block">
                    សេចក្ដីថ្លែងអំណរគុណ
                </div>

                <p className="text-[#9a8c78] text-lg md:text-2xl leading-loose font-battambang font-medium">
                    សូមថ្លែងអំណរគុណ យ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស 
                    ក្នុងពិធី អាពាហ៍ពិពាហ៍ កូនប្រុសកូនស្រីរបស់យើងខ្ញុំ សូមជូនពរ 
                    តែសេចក្ដីសុខសុភមង្គលគ្រប់ពេលវេលា វេលាកុំបីឃ្លៀងឃ្លាតឡើយ ។
                </p>
                
                 <p className="font-moul text-[#eaadd4] text-xl mt-10">សូមអរគុណ !</p>
            </div>
        </motion.div>
      </section>

      {/* ================= SECTION 4: ENGLISH THANKS ================= */}
       <section className="min-h-[80vh] flex flex-col items-center justify-center p-8 relative z-10 text-center pb-24 bg-[#9a8c78]">
          {/* Top Branch Decoration */}
          <div className="absolute top-0 left-0 w-64 md:w-96 opacity-60 pointer-events-none">
             {/* Simulating the branch in Image 4 */}
             <svg viewBox="0 0 200 100" fill="none" stroke="white" strokeWidth="1" className="w-full">
                 <path d="M-20 20 Q50 80 200 10" />
                 <path d="M50 45 Q70 20 80 5" />
                 <circle cx="80" cy="5" r="3" fill="pink" stroke="none" />
                 <circle cx="120" cy="30" r="4" fill="pink" stroke="none" />
                 <circle cx="40" cy="50" r="3" fill="pink" stroke="none" />
             </svg>
          </div>

          <div className="absolute top-10 right-10">
              <span className="font-moul text-6xl text-white opacity-20">L♡H</span>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
             className="max-w-3xl"
          >
            <h2 className="text-[#fede00] font-serif text-3xl md:text-5xl mb-12 drop-shadow-sm font-bold tracking-wide">
                Expression of Gratitude
            </h2>
            
            <p className="text-white text-lg md:text-2xl italic leading-loose opacity-95 mb-16 font-serif px-4">
                    "We express our deepest thanks for the honor of your presence at the Wedding Ceremony 
                    of our son and daughter. May you encounter only happiness and prosperity at all times."
            </p>
            
            <div className="text-[#fede00] text-3xl md:text-5xl font-moul drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] animate-pulse">
                Thank You!
            </div>

          </motion.div>
      </section>

    </div>
  );
}