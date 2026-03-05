"use client";
import React from 'react';
import { Instagram, Youtube, Music2 } from 'lucide-react'; // Music2 cocok untuk icon TikTok

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* KOLOM 1: LOGO & DESKRIPSI */}
          <div className="md:col-span-1">
            {/* GANTI TEKS DENGAN FOTO LOGO */}
            <img 
              src="/images/logo.png" 
              alt="PNB EAGLES Logo" 
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed font-montserrat">
             Wadah eSports resmi UKM Computer Club, KBM Politeknik Negeri Bali. Menumbuhkan talenta, membangun komunitas, mencetak juara.
            </p>
          </div>

          {/* KOLOM 2: ABOUT US */}
          <div>
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-6">About Us</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-magenta text-xs transition-colors">Our Mission</a></li>
              <li><a href="#" className="text-gray-500 hover:text-magenta text-xs transition-colors">Team & Contributors</a></li>
              <li><a href="#" className="text-gray-500 hover:text-magenta text-xs transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* KOLOM 3: EVENTS */}
          <div>
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-6">Events</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-magenta text-xs transition-colors">Match Schedule</a></li>
              <li><a href="#" className="text-gray-500 hover:text-magenta text-xs transition-colors">Past Winners</a></li>
              <li><a href="#" className="text-gray-500 hover:text-magenta text-xs transition-colors">Rules</a></li>
            </ul>
          </div>

          {/* KOLOM 4: STAY CONNECTED DENGAN ICON */}
          <div>
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-6">Stay Connected</h4>
            <div className="flex gap-4">
              {/* INSTAGRAM */}
              <a href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-magenta hover:border-magenta transition-all duration-300">
                <Instagram size={18} />
              </a>
              {/* YOUTUBE */}
              <a href="https://youtube.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-magenta hover:border-magenta transition-all duration-300">
                <Youtube size={18} />
              </a>
              {/* TIKTOK */}
              <a href="https://tiktok.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-magenta hover:border-magenta transition-all duration-300">
                <Music2 size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BORDER */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            © 2026 PNB EAGLES. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            MADE BY PNB EAGLES
          </p>
        </div>
      </div>
    </footer>
  );
}