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

  // Theme: Royal Burgundy (#4A0404) & Antique Gold (#C5A059) & Cream (#FDFBF7)

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#2C3E50] overflow-x-hidden selection:bg-[#C5A059] selection:text-white bg-texture">
      <SakuraBackground />
      {/* Ensure MusicPlayer is created. This is the last component we haven't converted yet. */}
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
            {/* ================= SECTION 1: HERO COVER ================= */}
            <section className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
              
              {/* Decorative Border Frame */}
              <div className="absolute inset-4 md:inset-8 border border-[#C5A059]/30 pointer-events-none z-20">
                 <div className="absolute inset-1 border border-[#C5A059]/20"></div>
                 <CornerDecoration className="top-0 left-0 text-[#C5A059]" />
                 <CornerDecoration className="top-0 right-0 scale-x-[-1] text-[#C5A059]" />
                 <CornerDecoration className="bottom-0 left-0 scale-y-[-1] text-[#C5A059]" />
                 <CornerDecoration className="bottom-0 right-0 scale-[-1] text-[#C5A059]" />
              </div>

              {/* Main Content */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="z-10 text-center relative mt-10 md:mt-0"
              >
                <div className="mb-6">
                    <span className="font-script text-[#C5A059] text-3xl md:text-5xl">The Wedding of</span>
                </div>
                
                <h1 className="font-moul text-[#4A0404] text-3xl md:text-5xl lg:text-6xl mb-8 drop-shadow-sm tracking-wide leading-relaxed">
                  សិរីសួស្ដីអាពាហ៍ពិពាហ៍
                </h1>

                {/* Couple Image - Arch Shape */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1.2 }}
                    className="relative mx-auto w-64 h-80 md:w-80 md:h-[500px] mb-10"
                >
                    <div className="absolute inset-0 rounded-t-[160px] border-[1px] border-[#C5A059] translate-x-2 translate-y-2"></div>
                    <div className="w-full h-full rounded-t-[160px] overflow-hidden bg-[#4A0404] relative shadow-2xl">
                        <img
                            src="reakandtey.jpg"
                            alt="Couple"
                            className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#4A0404]/60 via-transparent to-transparent"></div>
                    </div>
                </motion.div>

                {/* Names */}
                <div className="flex flex-col items-center justify-center gap-2 relative">
                    <h2 className="font-moul text-[#C5A059] text-2xl md:text-4xl">អ៊ាង​ សុភារក្ស</h2>
                    <span className="font-script text-[#4A0404] text-4xl mx-4">&</span>
                    <h2 className="font-moul text-[#C5A059] text-2xl md:text-4xl">ឡី​ ជិនតេយ្យ</h2>
                </div>
              </motion.div>
            </section>

            {/* ================= SECTION 2: FORMAL INVITATION ================= */}
            <section className="py-24 px-6 bg-[#4A0404] relative text-[#FDFBF7]">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
               
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="max-w-2xl mx-auto text-center border border-[#C5A059] p-8 md:p-16 relative"
               >
                  {/* Decorative corner lines */}
                  <div className="absolute top-2 left-2 w-16 h-16 border-t border-l border-[#C5A059]"></div>
                  <div className="absolute top-2 right-2 w-16 h-16 border-t border-r border-[#C5A059]"></div>
                  <div className="absolute bottom-2 left-2 w-16 h-16 border-b border-l border-[#C5A059]"></div>
                  <div className="absolute bottom-2 right-2 w-16 h-16 border-b border-r border-[#C5A059]"></div>

                  <p className="font-script text-3xl text-[#C5A059] mb-6">Save the Date</p>
                  
                  <h2 className="font-moul text-2xl md:text-4xl mb-8 leading-relaxed">
                    សូមគោរពអញ្ជើញ
                  </h2>
                  
                  <p className="text-lg md:text-xl font-khmer mb-8 opacity-90 leading-loose">
                    ជាកិត្តិយស សូមអញ្ជើញភ្ញៀវកិត្តិយសទាំងអស់ចូលរួមក្នុងពិធីមង្គលការ<br/>
                    របស់កូនប្រុស កូនស្រី របស់យើងខ្ញុំ
                  </p>

                  <div className="py-8 border-t border-b border-[#C5A059]/30 my-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                          <div>
                              <p className="uppercase tracking-widest text-xs text-[#C5A059] mb-2">Friday</p>
                              <p className="font-moul text-3xl">០៩</p>
                          </div>
                          <div className="border-l border-r border-[#C5A059]/30 px-4 md:border-t-0 md:border-b-0 border-t border-b py-4 md:py-0">
                              <p className="uppercase tracking-widest text-xs text-[#C5A059] mb-2">January</p>
                              <p className="font-moul text-2xl">មករា</p>
                          </div>
                          <div>
                              <p className="uppercase tracking-widest text-xs text-[#C5A059] mb-2">2026</p>
                              <p className="font-moul text-3xl">២០២៦</p>
                          </div>
                      </div>
                  </div>

                  <p className="font-moul text-[#C5A059] text-xl">វេលាម៉ោង ៦:០០ ល្ងាច</p>
               </motion.div>
            </section>

            {/* ================= SECTION: TIMELINE ================= */}
            <Timeline />

            {/* ================= SECTION: GALLERY ================= */}
            <GallerySection />

            {/* ================= SECTION: MAP ================= */}
            <MapSection />

            {/* ================= SECTION 3: THANK YOU ================= */}
            <section className="min-h-[80vh] flex flex-col items-center justify-center p-8 bg-[#FDFBF7] relative">
               <div className="w-full h-full absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
                   <h1 className="font-script text-[15rem] text-[#4A0404]">Thank You</h1>
               </div>

               <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl text-center relative z-10"
               >
                   <Heart className="w-12 h-12 text-[#C5A059] fill-[#C5A059] mx-auto mb-8" />
                   
                   <h2 className="font-moul text-[#4A0404] text-2xl md:text-4xl mb-8">
                     សេចក្ដីថ្លែងអំណរគុណ
                   </h2>

                   <p className="font-khmer text-[#2C3E50] text-lg md:text-xl leading-loose mb-12">
                     សូមថ្លែងអំណរគុណ យ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស
                     ក្នុងពិធី អាពាហ៍ពិពាហ៍ កូនប្រុសកូនស្រីរបស់យើងខ្ញុំ ។ វត្តមានរបស់លោកអ្នក
                     គឺជាកិត្តិយសដ៏ឧត្តុង្គឧត្តម និងជាសាក្សីនៃសេចក្តីស្រលាញ់របស់យើងខ្ញុំ។
                   </p>

                   <div className="inline-block border-b-2 border-[#C5A059] pb-2">
                       <p className="font-script text-4xl text-[#4A0404]"> You & Family</p>
                   </div>
               </motion.div>
            </section>
            
            <footer className="bg-[#4A0404] text-[#C5A059] py-8 text-center text-sm font-khmer">
                <p>&copy; 2026 Save The Date. All rights reserved.</p>
            </footer>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}