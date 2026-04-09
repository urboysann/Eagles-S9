"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, BookOpen, Shield, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EfootballDetail() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("May 4, 2026 23:59:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const infoLomba = [
    { icon: <Calendar size={22} />, label: "WAKTU", value: "23 MEI 2026", sub: "MENYESUAIKAN WAKTU TURNAMEN" },
    { icon: <MapPin size={22} />, label: "LOKASI", value: "GEDUNG WIDYA PADMA", sub: "KAMPUS POLITEKNIK NEGERI BALI" },
    { icon: <Users size={22} />, label: "KUOTA", value: "32 PLAYER", sub: "1 VS 1 (PLAYSTATION 4)" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] text-white pt-32 pb-20 px-6 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magenta/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-magenta/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <Link href="/#games" className="inline-flex items-center gap-2 text-gray-500 hover:text-magenta transition-colors mb-12 group text-xs font-bold tracking-widest">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> KEMBALI KE ARENA
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-magenta/20 border border-magenta/50 text-magenta text-[10px] font-black tracking-widest uppercase rounded-md">
                    Sports • Arcade
                  </span>
                  <span className="w-12 h-[1px] bg-white/20"></span>
                  <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Console Tournament</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black italic leading-none uppercase font-outfit">
                  Turnamen <br />
                  <span className="text-magenta">E-Football</span>
                </h1>
              </div>

              {/* Countdown Timer */}
              <div className="flex gap-4 py-6 border-y border-white/5">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds },
                ].map((time, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black italic font-outfit text-white">
                      {String(time.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold text-magenta tracking-widest uppercase">{time.label}</span>
                  </div>
                ))}
                <div className="ml-auto flex items-center gap-2 text-gray-500 italic">
                  <Clock size={16} />
                  <span className="text-[10px] font-bold uppercase tracking-widest italic">BATAS AKHIR PENDAFTARAN</span>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-montserrat text-justify">
                Tunjukkan kemampuan olah bola virtualmu di <span className="text-white italic">PNB EAGLES Season 9.</span> Bangun skuad impianmu dan taklukkan lapangan hijau untuk menjadi yang terbaik. Saatnya mencetak sejarah!
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <Shield className="text-magenta mb-2" size={24} />
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">System</p>
                  <p className="text-lg font-black italic">SINGLE ELIMINATION</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <Clock className="text-magenta mb-2" size={24} />
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Match Time</p>
                  <p className="text-lg font-black italic">10 MINUTES</p>
                </div>
              </div>

              {/* ACTION BUTTONS (FIXED: Sejajar & Sama Panjang) */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full max-w-xl">
                <Link href="/register/efootball" className="flex-1">
                  <button className="w-full py-4 bg-magenta text-white font-black text-[10px] tracking-widest uppercase rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,80,193,0.3)]">
                    Daftar Sekarang
                  </button>
                </Link>
                <button className="flex-1 py-4 bg-white/5 border border-white/10 text-white font-black text-[10px] tracking-widest uppercase rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <BookOpen size={16} /> DOWNLOAD GUIDEBOOK
                </button>
              </div>
            </motion.div>

            {/* INFO CARDS SISI KANAN */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {infoLomba.map((item, i) => (
                <div 
                  key={i}
                  className="bg-[#121212] border border-white/5 p-8 rounded-[2rem] flex items-center gap-6 hover:border-magenta/30 transition-all group"
                >
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{item.label}</p>
                    <p className="text-2xl font-black italic uppercase leading-none">{item.value}</p>
                    <p className="text-gray-400 text-xs mt-1 font-montserrat">{item.sub}</p>
                  </div>
                </div>
              ))}
              
              {/* Prize Pool Card */}
              <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-br from-magenta to-[#9d1c6a] overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-20">
                  <Trophy size={120} />
                </div>
                <div className="relative z-10">
                  <p className="text-white/60 text-[10px] font-black tracking-[0.3em] uppercase mb-2">Total Prize Pool</p>
                  <h3 className="text-4xl md:text-5xl font-black italic leading-none uppercase">
                    Rp 1.000.000
                  </h3>
                  <p className="text-white/40 text-xs mt-4 font-bold uppercase tracking-widest">
                    + Trophy & Sertifikat
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}