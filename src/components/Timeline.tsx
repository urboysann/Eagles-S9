"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Presentation, Calendar, Rocket, Target } from 'lucide-react';

const timelineEvents = [
  {
    id: 1,
    title: "Pendaftaran Turnamen",
    date: "11 April - 04 Mei 2026",
    desc: "Waktu resmi bagi tim atau peserta untuk mengamankan slot di arena pertandingan.",
    icon: <Rocket size={20} />,
    type: "Tournament"
  },
  {
    id: 2,
    title: "Pendaftaran Seminar",
    date: "18 April - 08 Mei 2026",
    desc: "Registrasi Seminar Nasional 'Beyond Limits' resmi dibuka.",
    icon: <Users size={20} />,
    type: "Seminar"
  },
  {
    id: 3,
    title: "Technical Meeting",
    date: "19 Mei - 20 Mei 2026",
    desc: "Pembahasan aturan turnamen dan jadwal tanding untuk seluruh peserta lomba, dilakukan secara online melalui platform Zoom Meeting.",
    icon: <Target size={20} />,
    type: "Tournament"
  },
  {
    id: 4,
    title: "Kualifikasi MLBB & PUBGM",
    date: "22 Mei 2026",
    desc: "Babak penyisihan sengit untuk menentukan siapa yang layak ke Grand Final, dilakukan secara online.",
    icon: <Trophy size={20} />,
    type: "Tournament"
  },
  {
    id: 5,
    title: "Final Seluruh Cabang Lomba",
    date: "23 Mei 2026",
    desc: "Puncak pertandingan turnamen di Gedung Widya Padma, Kampus Politeknik Negeri Bali.",
    icon: <Calendar size={20} />,
    type: "Tournament"
  },
  {
    id: 6,
    title: "Seminar Nasional & Awarding",
    date: "24 Mei 2026",
    desc: "Acara puncak seminar bersama para ahli industri E-Sport dan Sesi awarding untuk para juara turnamen.",
    icon: <Presentation size={20} />,
    type: "Seminar & Awarding"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-[#070707] px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
        
        {/* SISI KIRI: HEADER - Sekarang sejajar dengan item pertama di kanan */}
        <div className="md:w-1/3 md:sticky h-fit pt-2"> 
          <p className="text-xs font-bold tracking-[0.4em] text-magenta uppercase mb-3 font-montserrat">
            Rangkaian Kegiatan
          </p>
          <h3 className="text-5xl md:text-6xl font-black italic uppercase text-white leading-[0.9] font-outfit mb-6">
            EVENT <br />
            <span className="text-magenta drop-shadow-[0_0_15px_rgba(255,80,193,0.3)]">TIMELINE</span>
          </h3>
            <p className="text-gray-400 font-montserrat text-sm leading-relaxed max-w-[340px] text-justify">
            Jadilah <span className="text-white font-semibold">lebih dari sekadar pemain</span>. 
            Pantau seluruh rangkaian kegiatan <span className="text-white">PNB EAGLES Season 9</span>,
            dimana arena kompetisi bertemu dengan pusat inovasi. 
            
            Persiapkan strategimu untuk <span className="text-white border-b border-white/20">menguasai turnamen</span>,
            sekaligus tajamkan wawasanmu melalui Seminar Nasional <span className="text-magenta font-bold italic drop-shadow-[0_0_8px_rgba(255,80,193,0.4)]">
                'Beyond Limits'
            </span> bersama para ahli industri.
            
            Dari registrasi hingga awarding, pastikan kamu hadir di setiap momen untuk mendominasi masa depan digital!
            </p>
        </div>

        <div className="md:w-2/3 relative pl-8 md:pl-12">
          <div className="absolute left-0 top-0 h-full w-[1px] bg-white/10">
            <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-magenta to-transparent" />
          </div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6 md:gap-8 group"
              >
                {/* IKON */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-[#0c0c0c] text-magenta group-hover:border-magenta group-hover:bg-magenta group-hover:text-white transition-all duration-500 shadow-xl">
                  {event.icon}
                  {/* Marker pada garis vertikal */}
                  <div className="absolute -left-[33px] md:-left-[49px] w-2 h-2 rounded-full bg-magenta opacity-0 group-hover:opacity-100 transition-opacity blur-[2px]" />
                </div>

                {/* KARTU KONTEN */}
                <div className="flex-1">
                  <div className="flex flex-col gap-1 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
                        {event.date}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-magenta/10 text-magenta text-[8px] font-bold uppercase border border-magenta/20">
                        {event.type}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-black uppercase italic text-white group-hover:text-magenta transition-colors duration-300">
                      {event.title}
                    </h4>
                  </div>
                  
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-montserrat max-w-lg">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}