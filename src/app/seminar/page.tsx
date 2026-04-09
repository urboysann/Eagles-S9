"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  BookOpen, 
  Clock, 
  ArrowLeft 
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SeminarDetail() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("May 8, 2026 23:59:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#070707] min-h-screen text-white font-montserrat selection:bg-magenta/30">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        {/* Tombol Back */}
        <Link 
          href="/#seminar" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-magenta transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Kembali ke Beranda</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* SISI KIRI: KONTEN UTAMA */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-magenta/10 border border-magenta/20 text-magenta text-[10px] font-bold tracking-widest uppercase rounded">
                National Seminar
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black italic leading-[0.9] tracking-tighter uppercase mb-10">
              BEYOND <br />
              <span className="text-magenta drop-shadow-[0_0_30px_rgba(255,80,193,0.4)]">LIMITS</span>
            </h1>

            {/* Countdown Timer */}
            <div className="flex items-center gap-8 mb-12">
              <div className="flex gap-6">
                {[
                  { label: "DAYS", value: timeLeft.days },
                  { label: "HOURS", value: timeLeft.hours },
                  { label: "MINS", value: timeLeft.minutes },
                  { label: "SECS", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-4xl md:text-5xl font-black italic leading-none mb-1">
                      {String(item.value).padStart(2, '0')}
                    </p>
                    <p className="text-[8px] font-bold text-magenta tracking-[0.2em]">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
              <div className="hidden md:flex items-center gap-3 text-gray-500">
                <Clock size={16} className="animate-pulse text-magenta" />
                <p className="text-[10px] font-bold tracking-widest uppercase">BATAS AKHIR PENDAFTARAN</p>
              </div>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed max-w-2xl mb-12 text-justify">
              <p>
                <strong className="text-white">PNB EAGLES Season 9</strong> mempersembahkan Seminar Nasional yang mengeksplorasi potensi ekonomi di balik industri gaming. Bukan sekadar bermain, kami membawa insight profesional tentang bagaimana membangun karir yang berkelanjutan.
              </p>
              <p>
                Pelajari strategi content creation, manajemen tim e-sports, hingga peluang industri kreatif lainnya langsung dari para praktisi yang telah sukses di bidangnya.
              </p>
            </div>

            {/* Info Cards Kecil */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-magenta/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-magenta/10 flex items-center justify-center text-magenta">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Materi</p>
                    <p className="text-lg font-black italic uppercase tracking-tighter text-white">Career Talk</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-magenta/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-magenta/10 flex items-center justify-center text-magenta">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Benefit</p>
                    <p className="text-lg font-black italic uppercase tracking-tighter text-white">E - Sertifikat & SKKM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOMBOL AKSI (FIXED: SEJAJAR & SIMETRIS) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              <Link 
                href="https://forms.gle/link-pendaftaran" 
                target="_blank"
                className="flex-1"
              >
                <button className="w-full py-5 bg-magenta text-white font-black text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(255,80,193,0.3)]">
                  Daftar Sekarang
                </button>
              </Link>
              <button className="flex-1 py-5 border border-white/10 text-white font-black text-xs tracking-[0.2em] uppercase rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                <BookOpen size={18} className="text-magenta" /> Download Guidebook
              </button>
            </div>
          </div>

          {/* SISI KANAN: INFO DETAIL */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-[2.5rem] bg-[#111111] border border-white/5 flex items-center gap-8 group hover:border-white/10 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all">
                <Calendar size={28} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mb-1">WAKTU</p>
                <p className="text-3xl font-black text-white italic leading-none">24 MEI 2026</p>
                <p className="text-xs text-gray-400 mt-2 uppercase">MENYESUAIKAN WAKTU SEMINAR</p>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-[#111111] border border-white/5 flex items-center gap-8 group hover:border-white/10 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mb-1">LOKASI</p>
                <p className="text-3xl font-black text-white italic leading-none uppercase">Widya Padma</p>
                <p className="text-xs text-gray-400 mt-2 tracking-wide uppercase">Kampus Politeknik Negeri Bali</p>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-[#111111] border border-white/5 flex items-center gap-8 group hover:border-white/10 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-magenta group-hover:bg-magenta group-hover:text-white transition-all">
                <Users size={28} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold tracking-[0.2em] mb-1">KUOTA</p>
                <p className="text-3xl font-black text-white italic leading-none uppercase">300 Peserta</p>
                <p className="text-xs text-gray-400 mt-2 uppercase">Nasional & Umum</p>
              </div>
            </div>

            {/* Investasi Ilmu Card */}
            <div className="p-1 rounded-[2.5rem] bg-gradient-to-r from-magenta to-purple-600">
              <div className="bg-[#070707] rounded-[2.4rem] p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform text-white">
                  <Trophy size={140} />
                </div>
                <p className="text-[10px] font-bold tracking-[0.3em] text-magenta mb-3 uppercase relative z-10">
                  Investasi Ilmu
                </p>
                <h3 className="text-6xl font-black italic text-white mb-4 relative z-10">
                  FREE
                </h3>
                <div className="flex flex-col gap-1 relative z-10">
                  <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                    + E-Sertifikat & SKKM
                  </p>
                  <p className="text-[10px] text-gray-400 tracking-wider">
                    Snack & Seminar Kit (Offline Only)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}