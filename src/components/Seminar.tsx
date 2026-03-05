"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Ticket, ArrowRight } from "lucide-react";

export default function Seminar() {
  return (
    <section id="seminar" className="py-24 bg-[#070707] px-6 overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta/10 border border-magenta/30 mb-8">
               <span className="w-2 h-2 rounded-full bg-magenta animate-pulse"></span>
               <span className="text-magenta font-bold tracking-[0.2em] text-[10px] uppercase font-montserrat">
                  National Event
               </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black italic text-white uppercase font-outfit leading-[1.1] tracking-tighter mb-8 pb-4">
              THE FUTURE <br />
              <span className="text-magenta drop-shadow-[0_0_30px_rgba(255,80,193,0.4)]">OF GAMING</span>
            </h2>

            <p className="text-gray-400 font-montserrat leading-relaxed mb-10 text-base md:text-lg max-w-xl">
              Bukan sekadar hobi, tapi peluang profesi. Bergabunglah dalam <span className="text-white font-bold italic underline decoration-magenta">Seminar Nasional eSports 2026</span> dan temukan rahasia industri kreatif langsung dari para ahli.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-magenta text-white font-black text-[10px] tracking-[0.2em] uppercase rounded-xl hover:bg-white hover:text-black transition-all flex items-center gap-3 shadow-[0_0_20px_rgba(255,80,193,0.3)]">
                Daftar Sekarang <ArrowRight size={16} />
              </button>
              <button className="px-8 py-4 border border-white/10 text-white font-black text-[10px] tracking-[0.2em] uppercase rounded-xl hover:bg-white/5 transition-all flex items-center gap-3 font-outfit">
                <Ticket size={16} className="text-magenta" /> Download Guidebook
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { icon: <Calendar size={24} />, label: "WAKTU", value: "24 MEI 2026", sub: "09:00 WITA - SELESAI" },
              { icon: <MapPin size={24} />, label: "LOKASI", value: "GEDUNG WIDYA PADMA", sub: "Kampus Politeknik Negeri, Bali" },
              { icon: <Users size={24} />, label: "KUOTA", value: "500 PESERTA", sub: "NASIONAL & UMUM" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex items-center gap-6 group transition-all hover:border-magenta/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-magenta/10 flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="text-2xl font-black text-white italic font-outfit leading-none">{item.value}</p>
                  <p className="text-xs text-gray-400 mt-2 font-montserrat tracking-wide">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}