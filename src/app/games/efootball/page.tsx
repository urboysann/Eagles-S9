"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  BookOpen, 
  Target, 
  Shield, 
  Clock, 
  Gamepad2,
  ChevronRight 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data Navigasi Lomba sesuai file image_8f0e65.png & image_8f8da2.png
const OTHER_GAMES = [
  { name: "MLBB", slug: "mlbb", icon: <Gamepad2 size={14} /> },
  { name: "PUBG", slug: "pubg", icon: <Gamepad2 size={14} /> },
  { name: "E-FOOTBALL", slug: "efootball", icon: <Gamepad2 size={14} /> },
  { name: "TEKKEN 8", slug: "tekken", icon: <Gamepad2 size={14} /> },
];

export default function EfootballDetail() {
  const pathname = usePathname();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Konfigurasi Link
  const GOOGLE_FORM_LINK = "https://bit.ly/Pendaftaran-Lomba-PNB-EAGLES-S9";
  const GUIDEBOOK_PDF_PATH = "/files/guidebook-efootball.pdf";

  useEffect(() => {
    // Target waktu pendaftaran sesuai UI image_8f8da2.png
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
    { icon: <Calendar size={22} />, label: "WAKTU", value: "23 MEI 2026", sub: "MENYESUAIKAN JADWAL TURNAMEN" },
    { icon: <MapPin size={22} />, label: "LOKASI", value: "GEDUNG WIDYA PADMA", sub: "KAMPUS POLITEKNIK NEGERI BALI" },
    { icon: <Users size={22} />, label: "KUOTA", value: "32 PLAYER", sub: "1 VS 1 (CONSOLE MODE)" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070707] text-white pt-32 pb-20 px-6 relative overflow-hidden font-montserrat">
        {/* Dekorasi Background Ambient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magenta/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* TOP NAV & SWITCHER (image_8f8356.png style) */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <Link href="/#games" className="inline-flex items-center gap-2 text-gray-500 hover:text-magenta transition-colors group text-xs font-bold tracking-[0.2em]">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> KEMBALI KE ARENA
            </Link>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto overflow-hidden">
              <span className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase flex items-center gap-2 whitespace-nowrap">
                Lihat Turnamen Lainnya <ChevronRight size={14} className="text-magenta" />
              </span>
              <div className="flex flex-nowrap gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md overflow-x-auto no-scrollbar touch-pan-x w-full md:w-auto">
                {OTHER_GAMES.map((game) => {
                  const isActive = pathname.includes(game.slug);
                  return (
                    <Link key={game.slug} href={`/games/${game.slug}`} className="flex-shrink-0">
                      <button className={`px-4 py-2 rounded-xl text-[10px] font-black tracking-tighter transition-all flex items-center gap-2 whitespace-nowrap ${
                        isActive 
                          ? "bg-magenta text-white shadow-[0_0_15px_rgba(255,80,193,0.4)]" 
                          : "text-gray-400 hover:bg-white/10 hover:text-white"
                      }`}>
                        {game.icon} {game.name}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* SISI KIRI: HEADER & PENDAFTARAN */}
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
                  <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase font-montserrat">Console Tournament</span>
                </div>
              
                <h1 className="text-6xl md:text-7xl font-black italic leading-[0.85] uppercase font-outfit tracking-tighter">
                  TURNAMEN <br />
                  <span className="text-magenta drop-shadow-[0_0_20px_rgba(255,80,193,0.4)]">E-FOOTBALL</span>
                </h1>
              </div>

              {/* Countdown Timer (image_8f0e65.png style) */}
              <div className="flex items-center gap-6 py-8 border-y border-white/5">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HRS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds },
                ].map((time, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-black italic font-outfit text-white leading-none">
                      {String(time.value).padStart(2, '0')}
                    </span>
                    <span className="text-[9px] font-bold text-magenta tracking-[0.2em] uppercase mt-2">{time.label}</span>
                  </div>
                ))}
                <div className="ml-auto hidden md:flex items-center gap-2 text-gray-600 italic">
                  <Clock size={16} className="text-magenta" />
                  <span className="text-[10px] font-bold uppercase tracking-widest italic">BATAS AKHIR PENDAFTARAN</span>
                </div>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl text-justify font-medium">
                Kuasai lapangan hijau, susun formasi impian, dan cetak gol kemenangan. 
                <span className="text-white italic font-bold ml-1">PNB EAGLES Season 9</span> mengundang para 
                <span className="text-white italic font-bold ml-1">Manajer Virtual</span> terbaik untuk menunjukkan dominasi taktik dan kontrol presisi. 
                Tunjukkan mental juara di setiap menit pertandingan dan raih gelar 
                <span className="text-magenta font-bold italic ml-1 drop-shadow-[0_0_10px_rgba(255,80,193,0.3)]">GOLAZO!</span>
              </p>

              {/* Info Format & Platform */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] group hover:border-magenta/40 transition-all duration-300">
                  <Target className="text-magenta mb-3 group-hover:scale-110 transition-transform" size={22} />
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Format</p>
                  <p className="text-xl font-black italic uppercase text-white">1 VS 1 MODE</p>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-[1.5rem] group hover:border-magenta/40 transition-all duration-300">
                  <Shield className="text-magenta mb-3 group-hover:scale-110 transition-transform" size={22} />
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Platform</p>
                  <p className="text-xl font-black italic uppercase text-white">PlayStation 4</p>
                </div>
              </div>

              {/* Action Buttons (image_8eac65.png style) */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <button className="w-full py-5 bg-magenta text-white font-black text-[11px] tracking-[0.2em] uppercase rounded-2xl hover:bg-white hover:text-black transition-all shadow-[0_10px_40px_rgba(255,80,193,0.3)] active:scale-95">
                    Daftar Sekarang
                  </button>
                </a>

                <a href={GUIDEBOOK_PDF_PATH} download className="flex-1">
                  <button className="w-full py-5 bg-white/5 border border-white/10 text-white font-black text-[11px] tracking-[0.2em] uppercase rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3 active:scale-95">
                    <BookOpen size={18} /> DOWNLOAD GUIDEBOOK
                  </button>
                </a>
              </div>
            </motion.div>

            {/* SISI KANAN: INFO CARDS (image_8f8da2.png style) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6 lg:pl-10"
            >
              {infoLomba.map((item, i) => (
                <div key={i} className="bg-[#121212]/80 backdrop-blur-sm border border-white/5 p-8 rounded-[2.5rem] flex items-center gap-8 hover:border-magenta/30 transition-all group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all duration-500 shadow-xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">{item.label}</p>
                    <p className="text-2xl font-black italic uppercase leading-tight tracking-tight">{item.value}</p>
                    <p className="text-gray-400 text-[11px] mt-1 font-medium tracking-wide uppercase opacity-60">{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* Prize Pool Highlight (image_8f8da2.png style) */}
              <div className="relative p-10 rounded-[3rem] bg-gradient-to-br from-magenta via-[#c0187a] to-[#8a1458] overflow-hidden group shadow-[0_20px_60px_rgba(255,80,193,0.25)] mt-4">
                <div className="absolute -top-4 -right-4 p-6 opacity-10 group-hover:scale-125 transition-transform duration-700 rotate-12">
                  <Trophy size={180} />
                </div>
                <div className="relative z-10">
                  <p className="text-white/70 text-[10px] font-black tracking-[0.4em] uppercase mb-3">Total Prize Pool</p>
                  <h3 className="text-5xl md:text-6xl font-black italic leading-none uppercase tracking-tighter drop-shadow-lg">
                    Rp 1.000.000
                  </h3>
                  <div className="flex items-center gap-3 mt-8">
                    <div className="h-[2px] w-10 bg-white/40" />
                    <p className="text-white text-[11px] font-bold uppercase tracking-widest italic">
                      + Trophy & Sertifikat
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <Footer />
    </>
  );
}