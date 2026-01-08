import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const events = [
  { time: '០៧:០០ ព្រឹក', title: 'ពិធីហែរជំនូន', desc: 'Procession of the Groom' },
  { time: '០៨:០០ ព្រឹក', title: 'ពិធីសែនមេបា', desc: 'Ceremony honoring ancestors' },
  { time: '១១:០០ ថ្ងៃត្រង់', title: 'ពិធីពិសាភោជនាហារ', desc: 'Lunch Reception' },
  { time: '០៧:០០ យប់', title: 'ពិធីកាត់នំ', desc: 'Cake Cutting Ceremony' },
];

export const Timeline = () => {
  return (
    <section className="py-24 px-4 bg-[#FFFFFF] relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-moul text-[#1A4D2E] text-3xl md:text-4xl mb-4">កម្មវិធី</h2>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-[#1A4D2E]/20 hidden md:block"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-right">
                   {index % 2 === 0 && (
                     <>
                        <h3 className="font-moul text-xl text-[#1A4D2E]">{event.title}</h3>
                        <p className="font-playfair text-[#6B705C] italic">{event.desc}</p>
                     </>
                   )}
                   {index % 2 !== 0 && (
                     <div className="hidden md:block font-bold text-[#D4AF37] text-2xl font-moul">{event.time}</div>
                   )}
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border border-[#D4AF37]">
                  <Clock className="text-[#1A4D2E] w-6 h-6" />
                </div>

                <div className="flex-1 text-center md:text-left">
                   {index % 2 !== 0 && (
                     <>
                        <h3 className="font-moul text-xl text-[#1A4D2E]">{event.title}</h3>
                        <p className="font-playfair text-[#6B705C] italic">{event.desc}</p>
                     </>
                   )}
                   {index % 2 === 0 && (
                     <div className="hidden md:block font-bold text-[#D4AF37] text-2xl font-moul">{event.time}</div>
                   )}
                   {/* Mobile Time display */}
                   <div className="md:hidden font-bold text-[#D4AF37] text-xl font-moul mt-2">{event.time}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};