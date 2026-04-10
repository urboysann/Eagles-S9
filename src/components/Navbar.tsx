"use client";
import React, { useState } from 'react'; 
import { Menu, X } from 'lucide-react'; 
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const LINKTREE_URL = "https://linktr.ee/PNBEAGLES_S9";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#070707]/80 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <img 
            src="/images/logo.png" 
            alt="PNB EAGLES Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#home" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">
            HOME
          </Link>
          <Link href="/#timeline" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">
            TIMELINE
          </Link>
          <Link href="/#games" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">
            TOURNAMENTS
          </Link>
          <Link href="/#seminar" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta transition-colors">
            SEMINAR
          </Link>    
        </div>

        <div className="hidden md:block">
          <a 
            href={LINKTREE_URL} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <button className="px-6 py-2 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-lg hover:bg-magenta hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer">
              DAFTAR SEKARANG
            </button>
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#070707] border-b border-white/5 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/#home" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">
            HOME
          </Link>
          <Link href="/#timeline" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">
            TIMELINE
          </Link>
          <Link href="/#games" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">
            TOURNAMENTS
          </Link>
          <Link href="/#seminar" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-magenta">
            SEMINAR
          </Link>
          
          <a 
            href={LINKTREE_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full pt-2"
          >
            <button className="w-full py-4 bg-white text-black text-[10px] font-black tracking-widest uppercase rounded-lg active:scale-95 transition-transform shadow-lg">
              DAFTAR SEKARANG
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}