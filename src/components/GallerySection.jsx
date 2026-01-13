import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  "reakandtey.jpg", // Portrait
  "tey-hacker.jpg",  // Square
  "tey.png", // Landscape
  "teytey.jpg", // Portrait
  "reakkk.JPG", // Landscape
  "nhreak.JPG", 
  "teyyy.jpg",
  "teyy.jpg",
  "reqkk.jpg",
  "reqkkkk.jpg", 



];

export const GallerySection = () => {
  return (
    <section className="py-24 px-6 bg-[#F8F6F0]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-script text-[#C5A059] text-3xl">Memories</span>
          <h2 className="font-moul text-[#4A0404] text-3xl md:text-4xl mt-2">កម្រងរូបភាព</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="break-inside-avoid bg-white p-4 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transform hover:-translate-y-2 transition-transform duration-500 border border-[#eee]"
            >
              <div className="overflow-hidden bg-[#eee]">
                <img 
                    src={photo} 
                    alt="Memory" 
                    className="w-full h-auto object-cover  transition-all duration-700" 
                />
              </div>
              <div className="mt-4 text-center">
                  <span className="font-script text-[#4A0404] text-xl opacity-60">Moment {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};