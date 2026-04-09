"use client";
import React, { useState } from 'react'; // Tambahkan useState
import { Menu, X } from 'lucide-react'; // Tambahkan icon untuk mobile
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#070707]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <img 
            src="/images/logo.png" 
            alt="PNB EAGLES Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* MENU NAVIGASI (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#home" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">HOME</Link>
          <Link href="/#about" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">ABOUT</Link>
          <Link href="/#games" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">TOURNAMENTS</Link>
          <Link href="/#faq" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">FAQ</Link>
        </div>

        {/* BUTTON DAFTAR (TAMPIL DI DESKTOP) */}
        <div className="hidden md:block">
          <button className="px-6 py-2 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-lg hover:bg-magenta hover:text-white transition-all">
            DAFTAR SEKARANG
          </button>
        </div>

        {/* HAMBURGER BUTTON (MOBILE ONLY) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#070707] border-b border-white/5 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/#home" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">HOME</Link>
          <Link href="/#about" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">ABOUT</Link>
          <Link href="/#games" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">TOURNAMENTS</Link>
          <Link href="/#faq" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">FAQ</Link>
          <button className="w-full py-3 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-lg">
            DAFTAR SEKARANG
          </button>
        </div>
      )}
    </nav>
  );
}