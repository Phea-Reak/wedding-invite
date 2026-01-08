import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { time: '07:00 AM', khTime: '០៧:០០ ព្រឹក', title: 'ពិធីហែរជំនូន', desc: 'Procession of the Groom' },
  { time: '08:00 AM', khTime: '០៨:០០ ព្រឹក', title: 'ពិធីសែនមេបា', desc: 'Ceremony honoring ancestors' },
  { time: '11:00 AM', khTime: '១១:០០ ថ្ងៃត្រង់', title: 'ពិធីពិសាភោជនាហារ', desc: 'Lunch Reception' },
  { time: '05:00 PM', khTime: '០៥:០០ ល្ងាច', title: 'ពិធីកាត់នំ', desc: 'Cake Cutting Ceremony' },
];

export const Timeline = () => {
  return (
    <section className="py-24 px-4 bg-[#FDFBF7] relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-script text-[#C5A059] text-3xl">The Agenda</span>
          <h2 className="font-moul text-[#4A0404] text-3xl md:text-4xl mt-2 mb-8">កម្មវិធី</h2>
          <div className="w-[1px] h-16 bg-[#C5A059] mx-auto"></div>
        </div>

        <div className="relative">
          {/* Elegant Center Line */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 w-[1px] h-full bg-[#4A0404]/20"></div>

          <div className="space-y-16 pl-10 md:pl-0">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Text Content */}
                <div className="flex-1 text-left md:text-right">
                   {index % 2 === 0 ? (
                     <div className="md:text-right">
                        <h3 className="font-moul text-lg text-[#4A0404] mb-2">{event.title}</h3>
                        <p className="font-serif text-[#2C3E50] italic opacity-80">{event.desc}</p>
                     </div>
                   ) : (
                     <div className="hidden md:block">
                        <div className="font-moul text-[#C5A059] text-xl">{event.khTime}</div>
                        <div className="font-serif text-[#4A0404] text-sm uppercase tracking-widest">{event.time}</div>
                     </div>
                   )}
                </div>

                {/* Dot Node */}
                <div className="absolute left-[9px] md:left-1/2 md:transform md:-translate-x-1/2 w-[13px] h-[13px] rounded-full bg-[#FDFBF7] border-2 border-[#C5A059] z-10 shadow-[0_0_0_4px_#FDFBF7]"></div>

                {/* Text Content Right */}
                <div className="flex-1 text-left">
                   {index % 2 !== 0 ? (
                     <div>
                        <h3 className="font-moul text-lg text-[#4A0404] mb-2">{event.title}</h3>
                        <p className="font-serif text-[#2C3E50] italic opacity-80">{event.desc}</p>
                     </div>
                   ) : (
                     <div className="hidden md:block">
                        <div className="font-moul text-[#C5A059] text-xl">{event.khTime}</div>
                        <div className="font-serif text-[#4A0404] text-sm uppercase tracking-widest">{event.time}</div>
                     </div>
                   )}
                   
                   {/* Mobile Time */}
                   <div className="md:hidden mt-2">
                      <span className="font-moul text-[#C5A059] text-lg">{event.khTime}</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};