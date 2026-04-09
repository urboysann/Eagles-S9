"use client";
import React from 'react';
import { Instagram, Youtube, Music2, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          
          {/* KOLOM 1: LOGO & DESKRIPSI */}
          <div className="md:col-span-2 max-w-sm">
            <img 
              src="/images/logo.png" 
              alt="PNB EAGLES Logo" 
              className="h-10 w-auto object-contain mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed font-montserrat text-justify">
              Wadah E-Sports resmi UKM Computer Club, Politeknik Negeri Bali. Menumbuhkan talenta, membangun komunitas dan mencetak juara.
            </p>
          </div>

          {/* KOLOM 2: QUICK LINKS */}
          <div className="md:justify-self-center">
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/#about" className="text-gray-500 hover:text-magenta text-xs transition-colors">
                  About Season 9
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-500 hover:text-magenta text-xs transition-colors">
                  Our Features
                </Link>
              </li>
              <li>
                <Link href="/#seminar" className="text-gray-500 hover:text-magenta text-xs transition-colors">
                  National Seminar
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-500 hover:text-magenta text-xs transition-colors">
                  Help & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: CONTACT PERSON */}
          <div className="md:justify-self-center">
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-6">Contact Person</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/6287718048166" target="_blank" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
                  <MessageSquare size={16} className="text-magenta opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs">+62 877-1804-8166 (Santika)</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/6282146775407" target="_blank" className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors group">
                  <MessageSquare size={16} className="text-magenta opacity-80 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs">+62 821-4677-5407 (Mita)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: STAY CONNECTED (FIXED FOR MOBILE) */}
          <div className="md:justify-self-end">
            <h4 className="text-white font-bold text-[10px] tracking-[0.2em] uppercase mb-6 text-left">
              Stay Connected
            </h4>
            <div className="flex justify-start gap-4">
              <a href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-magenta hover:border-magenta transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-magenta hover:border-magenta transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-magenta hover:border-magenta transition-all duration-300">
                <Music2 size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BORDER */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            © 2026 PNB EAGLES. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-600 text-[10px] tracking-widest uppercase">
            MADE BY PNB EAGLES SEASON 9
          </p>
        </div>
      </div>
    </footer>
  );
}