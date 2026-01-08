import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection = () => {
  return (
    <section className="py-24 px-4 bg-[#1A4D2E] text-white relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-moul text-[#D4AF37] text-3xl md:text-4xl mb-12">ទីតាំងពិធី</h2>
        
        <div className="bg-[#D4AF37] p-1 rounded-sm shadow-2xl mx-auto max-w-2xl">
             <div className="w-full h-80 bg-white relative group cursor-pointer overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250151.15121016462!2d104.75010046030983!3d11.579666933549247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1715412345678!5m2!1sen!2skh" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-[#1A4D2E] text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 animate-bounce border border-[#D4AF37]">
                        <MapPin size={20} />
                        <span>មើលផែនទី</span>
                    </div>
                </div>
             </div>
        </div>

        <div className="mt-12 space-y-2">
            <h3 className="font-bold text-xl font-moul text-[#D4AF37]">គេហដ្ឋានខាងកូនស្រី</h3>
            <p className="text-[#E8F3E8] opacity-80 font-playfair tracking-wide text-lg">ភូមិភ្នំពេញ​ សង្កាត់ភ្នំពេញ ក្រុងភ្នំពេញ ខេត្តភ្នំពេញ</p>
        </div>
      </div>
    </section>
  );
};