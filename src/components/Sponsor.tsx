"use client";
import { motion, cubicBezier } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: cubicBezier(0.16, 1, 0.3, 1) 
    }
  },
};

const PARTNERS = {
  principal: [
    { name: "Keras Organizer", logo: "/images/keras.png" },
  ],
  media: [
    { name: "Bangli Daily", logo: "/medpart/banglidaily.png" },
    { name: "Buleleng Terkini", logo: "/medpart/buleleng_terkini.png" },
    { name: "Info Badung Bali", logo: "/medpart/infobadung.bali.png" },
    { name: "Info Klungkung", logo: "/medpart/infoklungkung.png" },
    { name: "Info Mengwi", logo: "/medpart/infomengwi.png" },
    { name: "Nusa Bali", logo: "/medpart/Nusabali com.png" },
  ],
};

export default function Sponsor() {
  return (
    <section className="py-32 bg-[#070707] relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-magenta/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* 1. PRINCIPAL PARTNER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
          className="mb-40"
        >
          <motion.h4 
            variants={itemVariants}
            className="text-magenta font-black tracking-[0.6em] text-[12px] uppercase mb-12 font-montserrat"
          >
            Official Principal Partner
          </motion.h4>
          
          <div className="flex justify-center items-center">
            {PARTNERS.principal.map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="relative group">
                <div className="absolute inset-0 bg-magenta/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-110" />
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="h-32 md:h-52 w-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,80,193,0.2)] transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 2. MAIN SPONSORS CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-40"
        >
          <h4 className="text-gray-500 font-bold tracking-[0.5em] text-[10px] uppercase mb-12 font-montserrat">
            Official Main Sponsors
          </h4>
          
          <div className="relative inline-block px-10 py-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-magenta" />
             <h3 className="text-3xl md:text-5xl font-black italic text-white/90 uppercase tracking-tighter mb-4 leading-tight">
               CALLING OUT <span className="text-magenta">SPONSORS</span>
             </h3>
             <p className="text-gray-400 font-medium tracking-[0.3em] text-[10px] uppercase mb-8 font-montserrat">
               Elevate Your Brand With Us
             </p>
             
             <div className="flex flex-col items-center gap-6">
                <a 
                  href="https://wa.me/6285977561738" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-white text-black font-black text-[11px] tracking-[0.2em] uppercase rounded-full hover:bg-magenta hover:text-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,80,193,0.4)] hover:-translate-y-1"
                >
                  Contact For Partnership
                </a>
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-magenta animate-pulse" />
                    <p className="text-white font-bold tracking-widest text-[12px]">
                      TUGUS: <span className="text-magenta/90">+62 859-7756-1738</span>
                    </p>
                </div>
             </div>
          </div>
        </motion.div>

        {/* 3. MEDIA PARTNERS - FAST MARQUEE */}
        <div className="pt-20 border-t border-white/5">
          <h4 className="text-gray-400 font-bold tracking-[0.5em] text-[10px] uppercase mb-16 font-montserrat">
            Publicity & Media Partners
          </h4>
          
          <div className="relative flex overflow-hidden">
            {/* Fade Gradients for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#070707] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#070707] to-transparent z-20 pointer-events-none" />

            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear",
              }}
              className="flex flex-nowrap gap-16 md:gap-24 items-center whitespace-nowrap"
            >
              {[...PARTNERS.media, ...PARTNERS.media].map((item, i) => (
                <img 
                  key={i}
                  src={item.logo} 
                  alt={item.name}
                  className="h-10 md:h-14 w-auto flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}