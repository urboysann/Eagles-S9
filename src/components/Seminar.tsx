"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

export default function Seminar() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  const OPENING_DATE = new Date("2026-04-18T00:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = OPENING_DATE - now;

      if (distance < 0) {
        setIsOpen(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [OPENING_DATE]);

  return (
    // Menggunakan warna latar belakang #0a050a agar senada dengan header gambar mendaftar
    <section id="seminar" className="py-24 bg-[#0a050a] px-6 overflow-hidden relative">
      
      {/* Efek Ambient Glow Magenta di pojok kiri bawah agar latar belakang tidak flat */}
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-magenta/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Efek Ambient Glow Magenta di tengah teks untuk efek "kedalaman" */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            {/* BADGE EVENT */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-magenta/10 border border-magenta/20 mb-8">
               <span className="w-2 h-2 rounded-full bg-magenta animate-pulse"></span>
               <span className="text-magenta font-bold tracking-[0.2em] text-[10px] uppercase font-montserrat">
                 National Event
               </span>
            </div>

            {/* JUDUL */}
            <h2 className="text-5xl md:text-7xl font-black italic text-white uppercase font-outfit leading-[1] tracking-tight mb-8">
              THE FUTURE <br />
              <span className="text-magenta drop-shadow-[0_0_30px_rgba(255,80,193,0.4)]">OF GAMING</span>
            </h2>

            {/* DESKRIPSI */}
            <p className="text-gray-400 font-montserrat leading-relaxed mb-10 text-sm md:text-lg max-w-xl text-justify">
              Bukan sekadar hobi, tapi peluang profesi. Bergabunglah dalam <span className="text-white font-bold italic underline decoration-magenta underline-offset-4">Seminar Nasional Beyond Limits</span> dan temukan rahasia industri kreatif langsung dari para ahli.
            </p>

            {/* TOMBOL / COUNTDOWN */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              {isOpen ? (
                <Link 
                  href="https://forms.gle/link-google-form-kamu" 
                  target="_blank"
                  className="flex-1 px-8 py-4 bg-magenta text-white font-black text-[10px] tracking-[0.2em] uppercase rounded-xl hover:bg-white hover:text-[#0a050a] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,80,193,0.3)]"
                >
                  Daftar Sekarang <ArrowRight size={16} />
                </Link>
              ) : (
                <div className="flex-1 px-8 py-4 bg-white/5 border border-white/10 text-gray-400 rounded-2xl backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-2">
                    <Lock size={14} className="text-magenta" />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Pendaftaran Dibuka Dalam:</span>
                  </div>
                  <div className="text-white text-2xl font-black font-outfit tracking-tighter italic">
                    {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.mins}M : {timeLeft.secs}S
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* KARTU INFO (SISI KANAN) */}
          <div className="hidden lg:grid grid-cols-1 gap-6">  
            {[
              { icon: <Calendar size={24} />, label: "WAKTU", value: "24 MEI 2026", sub: "MENYESUAIKAN WAKTU SEMINAR" },
              { icon: <MapPin size={24} />, label: "LOKASI", value: "GEDUNG WIDYA PADMA", sub: "KAMPUS POLITEKNIK NEGERI BALI" },
              { icon: <Users size={24} />, label: "KUOTA", value: "300 PESERTA", sub: "NASIONAL & UMUM" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 flex items-center gap-6 group transition-all hover:border-magenta/40 hover:bg-white/[0.05] backdrop-blur-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-magenta/10 flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all shadow-[0_0_15px_rgba(255,80,193,0.1)]">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="text-2xl font-black text-white italic font-outfit leading-none">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-2 font-montserrat tracking-wide">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}