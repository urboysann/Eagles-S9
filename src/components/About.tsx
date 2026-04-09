"use client";
import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#070707] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-magenta to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#1A0B16] rounded-[2rem] overflow-hidden border border-white/10">
            <img 
              src="images/home.jpg" 
              alt="Gaming & Seminar" 
              className="w-full h-auto aspect-square md:aspect-video lg:h-[450px] object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic leading-tight uppercase">
            BEYOND THE <span className="text-magenta">CONTROLLER.</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 font-montserrat leading-relaxed text-sm md:text-base text-justify">
            <p>
              <strong className="text-white">PNB EAGLES Season 9</strong> adalah program kerja Unit Kegiatan Mahasiswa Computer Club yang didesain sebagai ekosistem E-Sports terbesar di Bali.
            </p>
            <p>
              Kami percaya hobi bermain game memiliki potensi ekonomi luar biasa. Melalui <span className="text-white font-bold underline decoration-magenta">Seminar Nasional Beyond Limits,</span> kamu akan mengeksplorasi cara menghasilkan uang dari industri game, mulai dari content creation hingga manajemen event.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="p-5 rounded-2xl bg-white/5 border-l-4 border-magenta transition-transform hover:scale-105">
                <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Competitive Area</h4>
                <p className="text-[11px] leading-relaxed">Uji skill timmu di turnamen bergengsi.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border-l-4 border-magenta transition-transform hover:scale-105">
                <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-widest">Knowledge Hub</h4>
                <p className="text-[11px] leading-relaxed">Seminar Nasional & Insight Industri.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}