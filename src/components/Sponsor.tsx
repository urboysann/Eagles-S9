"use client";
import { motion } from "framer-motion";

const PARTNERS = {
  community: [
    { name: "KERAS 1", logo: "/images/keras.png" },
    { name: "KERAS 2", logo: "/images/keras.png" },
    { name: "KERAS 3", logo: "/images/keras.png" },
    { name: "KERAS 4", logo: "/images/keras.png" },
    { name: "KERAS 5", logo: "/images/keras.png" },
  ],
  sponsors: [
    { name: "Principal", logo: "/images/keras.png" },
  ],
  media: Array.from({ length: 10 }).map((_, i) => ({
    name: `Media ${i + 1}`,
    logo: "/images/keras.png",
  })),
};

export default function Sponsor() {
  return (
    <section className="py-32 bg-[#070707] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-magenta/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* 1. PRINCIPAL PARTNER */}
        <div className="mb-40">
          <motion.h4 className="text-magenta font-black tracking-[0.6em] text-[12px] uppercase mb-20 font-montserrat">
            Official Principal Partner
          </motion.h4>
          <div className="flex justify-center items-center">
            {PARTNERS.sponsors.map((item, i) => (
              <motion.img 
                key={i}
                src={item.logo} 
                alt={item.name}
                className="h-32 md:h-52 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,80,193,0.2)]"
              />
            ))}
          </div>
        </div>

        {/* 2. MAIN SPONSORS - Menghapus animasi delay dan opacity rendah */}
        <div className="mb-32">
          <h4 className="text-gray-400 font-bold tracking-[0.5em] text-[10px] uppercase mb-16 font-montserrat">
            Official Main Sponsors
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {PARTNERS.community.map((item, i) => (
              <motion.img 
                key={i}
                whileHover={{ scale: 1.05 }}
                src={item.logo} 
                alt={item.name}
                /* Pastikan tidak ada opacity, grayscale, atau delay animasi di sini */
                className="h-24 md:h-32 w-auto object-contain" 
              />
            ))}
          </div>
        </div>

        {/* 3. MEDIA PARTNERS - Warna Terang Merata */}
        <div className="pt-20 border-t border-white/5 overflow-hidden">
          <h4 className="text-gray-400 font-bold tracking-[0.5em] text-[10px] uppercase mb-16 font-montserrat">
            Publicity & Media Partners
          </h4>
          
          <div className="relative flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex flex-nowrap gap-16 md:gap-24 items-center whitespace-nowrap"
            >
              {[...PARTNERS.media, ...PARTNERS.media].map((item, i) => (
                <img 
                  key={i}
                  src={item.logo} 
                  alt={item.name}
                  /* Menghapus opacity-30 agar warna langsung terlihat jelas */
                  className="h-16 md:h-24 w-auto object-contain flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}