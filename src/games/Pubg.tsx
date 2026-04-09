"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, BookOpen, Target, Shield } from "lucide-react";
import Link from "next/link";

export default function PubgDetail() {
  const infoLomba = [
    { icon: <Calendar size={22} />, label: "WAKTU", value: "26 MEI 2026", sub: "10:00 WITA - SELESAI" },
    { icon: <MapPin size={22} />, label: "LOKASI", value: "GEDUNG WIDYA PADMA", sub: "KAMPUS PNB, BALI" },
    { icon: <Users size={22} />, label: "KUOTA", value: "16 TIM", sub: "SQUAD MODE (4+1)" },
  ];

  return (
    <section className="min-h-screen bg-[#070707] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Ambient Glow - Orange PUBG Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Tombol Back */}
        <Link href="/#games" className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors mb-12 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> KEMBALI KE ARENA
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* SISI KIRI: HEADER & DESKRIPSI */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-orange-600/20 border border-orange-600/50 text-orange-500 text-[10px] font-black tracking-widest uppercase rounded-md">
                  Battle Royale
                </span>
                <span className="w-12 h-[1px] bg-white/20"></span>
                <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">Squad Mode</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black italic leading-none uppercase font-outfit">
                PUBG <br />
                <span className="text-orange-600">MOBILE</span>
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-montserrat">
              Turun, jarah, dan bertahan hidup. **PNB Eagles Season 9** menghadirkan medan tempur paling kompetitif untuk para survivor. Tunjukkan strategi rotasi terbaik dan akurasi tembakan timmu untuk meraih *Winner Winner Chicken Dinner!*
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <Target className="text-orange-500 mb-2" size={24} />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Format</p>
                <p className="text-lg font-black italic">TPP MODE</p>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                <Shield className="text-orange-500 mb-2" size={24} />
                <p className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Maps</p>
                <p className="text-lg font-black italic">ERANGEL / MIRAMAR</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/register" className="flex-1 min-w-[200px]">
                <button className="w-full py-4 bg-orange-600 text-white font-black text-xs tracking-widest uppercase rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)]">
                  Daftar Sekarang
                </button>
              </Link>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-xs tracking-widest uppercase rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <BookOpen size={16} /> Rulebook
              </button>
            </div>
          </motion.div>

          {/* SISI KANAN: INFO CARDS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {infoLomba.map((item, i) => (
              <div 
                key={i}
                className="bg-[#121212] border border-white/5 p-8 rounded-[2rem] flex items-center gap-6 hover:border-orange-600/30 transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">{item.label}</p>
                  <p className="text-2xl font-black italic uppercase leading-none">{item.value}</p>
                  <p className="text-gray-400 text-xs mt-1 font-montserrat">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Total Prize Pool Highlight */}
            <div className="relative p-10 rounded-[2.5rem] bg-gradient-to-br from-orange-600 to-orange-900 overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <Trophy size={120} />
              </div>
              <div className="relative z-10">
                <p className="text-orange-200 text-[10px] font-black tracking-[0.3em] uppercase mb-2">Total Prize Pool</p>
                <h3 className="text-4xl md:text-5xl font-black italic leading-none uppercase">
                  Rp 2.500.000++
                </h3>
                <p className="text-orange-200/60 text-xs mt-4 font-bold uppercase tracking-widest">
                  + Trophy & Sertifikat Nasional
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}