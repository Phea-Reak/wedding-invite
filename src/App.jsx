import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { CornerDecoration } from './components/CornerDecoration';
import { SakuraBackground } from './components/SakuraBackground';
import { MusicPlayer } from './components/MusicPlayer';
import { OpeningSequence } from './components/OpeningSequence';
import { Timeline } from './components/Timeline';
import { MapSection } from './components/MapSection';
import { GallerySection } from './components/GallerySection';

export default function WeddingInvite() {
  const [isOpened, setIsOpened] = useState(false);

  // Theme Colors:
  // Bg: #E8F3E8 (Light Sage)
  // Text Primary: #1A4D2E (Deep Forest Green)
  // Text Accent: #D4AF37 (Gold)
  // Secondary Bg: #FFFFFF (White)

  return (
    <div className="relative min-h-screen bg-[#E8F3E8] font-battambang overflow-x-hidden selection:bg-[#1A4D2E] selection:text-[#E8F3E8]">
      <SakuraBackground />
      {/* Ensure you have the MusicPlayer component created or commented out if not ready */}
      <MusicPlayer />

      <AnimatePresence>
        {!isOpened ? (
          <OpeningSequence key="opening" onOpen={() => setIsOpened(true)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* ================= SECTION 1: COVER ================= */}
            <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>
              
              <CornerDecoration className="top-0 left-0 text-[#D4AF37]" />
              <CornerDecoration className="top-0 right-0 scale-x-[-1] text-[#D4AF37]" />

              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-10 text-center mt-12 md:mt-0"
              >
                <h1 className="font-moul text-[#1A4D2E] text-3xl md:text-5xl lg:text-6xl mb-12 drop-shadow-sm tracking-wide leading-relaxed p-2">
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
                <div className="w-full h-full rounded-full md:rounded-[100px] overflow-hidden border-4 border-[#D4AF37] shadow-xl bg-white relative group ring-4 ring-[#1A4D2E]/10">
                  <img
                    src="sweet.png"
                    alt="Couple"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A4D2E]/40 to-transparent"></div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#D4AF37] rounded-full -z-10 opacity-20 blur-xl animate-pulse"></div>
              </motion.div>

              {/* Names Section */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 w-full max-w-4xl z-10"
              >
                {/* Groom */}
                <div className="text-center">
                  <p className="text-[#6B705C] text-lg font-bold mb-2 tracking-widest uppercase font-playfair">កូនស្រីនាម</p>
                  <h2 className="font-moul text-[#1A4D2E] text-3xl md:text-4xl drop-shadow-sm">ស៊ុន​ សារ៉េត</h2>
                </div>

                {/* Center Heart Line */}
                <div className="hidden md:flex flex-col items-center px-4">
                  <div className="w-[1px] h-12 bg-[#D4AF37] mb-2"></div>
                  <Heart className="text-[#D4AF37] fill-[#D4AF37] w-8 h-8 animate-pulse" />
                  <div className="w-[1px] h-12 bg-[#D4AF37] mt-2"></div>
                </div>
                <Heart className="md:hidden text-[#D4AF37] fill-[#D4AF37] w-8 h-8 animate-pulse my-2" />

                {/* Bride */}
                <div className="text-center">
                  <p className="text-[#6B705C] text-lg font-bold mb-2 tracking-widest uppercase font-playfair">កូនប្រុសនាម</p>
                  <h2 className="font-moul text-[#1A4D2E] text-3xl md:text-4xl drop-shadow-sm">ហ៊ាង​ ផល្លា</h2>
                </div>
              </motion.div>

              <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-[#1A4D2E] to-transparent mt-16 opacity-30"></div>
            </section>

            {/* ================= SECTION 2: INVITATION CARD ================= */}
            <section className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10 bg-[#FFFFFF]">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden">
                <span className="font-playfair text-[200px] md:text-[500px] text-[#1A4D2E] whitespace-nowrap select-none italic">L & R</span>
              </div>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full max-w-xl text-center z-10"
              >
                <div className="mb-10">
                   <h2 className="font-moul text-[#D4AF37] text-2xl md:text-4xl mb-2">សូមគោរពអញ្ជើញ</h2>
                   <p className="font-playfair text-[#6B705C] italic">Save the Date</p>
                </div>

                <div className="bg-[#E8F3E8] p-8 md:p-12 rounded-t-[200px] rounded-b-[20px] shadow-2xl relative border border-[#1A4D2E]/10">
                    <div className="absolute top-8 left-1/2 -translate-x-1/2">
                         <div className="w-16 h-1 bg-[#1A4D2E] rounded-full mb-1"></div>
                         <div className="w-8 h-1 bg-[#D4AF37] rounded-full mx-auto"></div>
                    </div>

                    <div className="mt-12 flex flex-col items-center">
                        <div className="bg-[#1A4D2E] text-white px-8 py-3 rounded-full font-bold mb-8 font-moul text-lg shadow-lg tracking-wider">
                          អ៊ាង​ ​​សុភារក្ស 
                        </div>
                        <h3 className="text-xl font-bold mb-8 text-[#586F58] font-battambang leading-relaxed">
                          កូនប្រុស កូនស្រី របស់យើងខ្ញុំ ដែលនឹងប្រព្រឹត្តទៅនៅ
                        </h3>
                        
                        <div className="border-y border-[#D4AF37]/50 py-8 w-full">
                             <p className="font-moul text-[#1A4D2E] text-xl md:text-3xl leading-relaxed">
                             ថ្ងៃ សុក្រ ទី ០៩ ខែ មករា <br /> ឆ្នាំ ២០២៦
                            </p>
                        </div>
                        
                        <div className="mt-8">
                           <p className="font-moul text-[#D4AF37] text-xl">វេលាម៉ោង ៦:០០ ល្ងាច</p>
                        </div>
                    </div>
                </div>
              </motion.div>
            </section>
            
            {/* ================= SECTION: TIMELINE ================= */}
            <Timeline />

            {/* ================= SECTION: GALLERY ================= */}
            <GallerySection />

            {/* ================= SECTION: MAP ================= */}
            <MapSection />

            {/* ================= SECTION 3: KHMER THANKS ================= */}
            <section className="min-h-screen flex items-center justify-center p-6 relative z-10 bg-[#E8F3E8]">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl w-full relative bg-white p-2 shadow-2xl"
              >
                <div className="border-2 border-[#1A4D2E] p-8 md:p-14 text-center h-full flex flex-col items-center justify-center relative outline outline-1 outline-offset-4 outline-[#D4AF37]">
                  
                  <div className="font-moul text-[#1A4D2E] text-xl md:text-3xl mb-8 pb-4 border-b border-[#D4AF37]">
                    សេចក្ដីថ្លែងអំណរគុណ
                  </div>

                  <p className="text-[#586F58] text-lg md:text-2xl leading-loose font-battambang font-medium">
                    សូមថ្លែងអំណរគុណ យ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស
                    ក្នុងពិធី អាពាហ៍ពិពាហ៍ កូនប្រុសកូនស្រីរបស់យើងខ្ញុំ សូមជូនពរ
                    តែសេចក្ដីសុខសុភមង្គលគ្រប់ពេលវេលា វេលាកុំបីឃ្លៀងឃ្លាតឡើយ ។
                  </p>

                  <div className="mt-12">
                     <Heart className="w-12 h-12 text-[#D4AF37] fill-[#D4AF37] mx-auto animate-bounce" />
                     <p className="font-moul text-[#1A4D2E] text-xl mt-4">សូមអរគុណ !</p>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* ================= SECTION 4: ENGLISH THANKS ================= */}
            <section className="min-h-[60vh] flex flex-col items-center justify-center p-8 relative z-10 text-center pb-24 bg-[#1A4D2E] text-[#E8F3E8]">
              
              <div className="w-full max-w-4xl border-t border-[#D4AF37]/30 mb-12"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl"
              >
                <h2 className="text-[#D4AF37] font-playfair text-4xl md:text-6xl mb-12 italic">
                  With Gratitude
                </h2>

                <p className="text-[#E8F3E8] text-lg md:text-2xl font-playfair leading-loose opacity-90 mb-16 px-4 font-light">
                  "We express our deepest thanks for the honor of your presence at the Wedding Ceremony
                  of our son and daughter. May you encounter only happiness and prosperity at all times."
                </p>

                <button className="bg-[#D4AF37] text-[#1A4D2E] px-8 py-3 rounded-sm font-moul text-lg hover:bg-white transition-colors duration-300">
                  Thank You
                </button>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}