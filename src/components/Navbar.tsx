"use client";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#070707]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <img 
            src="/images/logo.png" 
            alt="PNB EAGLES Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">HOME</a>
          <a href="#about" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">ABOUT</a>
          <a href="#games" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">TOURNAMENTS</a>
          <a href="#faq" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">FAQ</a>
        </div>

        <div>
          <button className="px-6 py-2 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-lg hover:bg-magenta hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            DAFTAR SEKARANG
          </button>
        </div>

      </div>
    </nav>
  );
}