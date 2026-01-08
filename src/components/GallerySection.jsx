import React from 'react';
import { motion } from 'framer-motion';

// Mock data for gallery images with different aspect ratios
const photos = [
  "sweet.png", // Portrait
  "broReth.jpg",  // Square
  "lala.jpg", // Landscape
  "omg.jpg", // Portrait
  "phalla.jpg", // Landscape
  "steav.jpg",  // Almost Square
];

export const GallerySection = () => {
  return (
    <section className="py-24 px-4 bg-[#E8F3E8] relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-moul text-[#1A4D2E] text-3xl md:text-4xl mb-4">កម្រងរូបភាព</h2>
          <p className="font-playfair text-[#6B705C] italic text-xl">Our Sweet Memories</p>
          <div className="h-[2px] w-24 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        {/* Masonry-like grid using CSS columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-xl border-[6px] border-white bg-white"
            >
              <img 
                src={photo} 
                alt={`Couple Memory ${index + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#1A4D2E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
            <p className="font-playfair text-[#1A4D2E] italic opacity-70">"Every love story is beautiful, but ours is my favorite."</p>
        </div>
      </div>
    </section>
  );
};