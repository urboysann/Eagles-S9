"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana cara mendaftar PNB EAGLES Season 9?",
    answer: "Kamu bisa mendaftar dengan menekan tombol 'Daftar Sekarang' pada cabang game yang ingin kamu ikuti di atas. Kamu akan diarahkan langsung ke Google Form resmi.",
  },
  {
    question: "Apakah peserta di luar Politeknik Negeri Bali boleh ikut Turnamen?",
    answer: "Boleh banget! PNB EAGLES Season 9 kali ini skalanya lebih besar dan terbuka untuk seluruh mahasiswa/umum di Regional Bali. Pastikan kamu punya kartu identitas yang valid, ya!",
  },
  {
    question: "Apa saja game yang dipertandingkan?",
    answer: "Terdapat 4 cabang game utama yaitu Mobile Legends, PUBG Mobile, e-Football, dan Tekken 8.",
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer: "Untuk informasi biaya pendaftaran, dapat kamu cek langsung melalui Google Form pendaftaran di masing-masing cabang game.",
  },
  {
    question: "Di mana saya bisa mendapatkan guidebook perlombaan?",
    answer: "Pedoman teknis atau guidebook tersedia dan dapat diakses pada masing-masing cabang perlombaan yang diikuti.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 bg-[#070707] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            FREQUENTLY ASKED <br /> 
            <span className="text-[#FF50C1]">QUESTION</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md text-justify">
            Punya pertanyaan seputar PNB EAGLES Season 9? Cek beberapa jawaban yang sering ditanyakan di sini.
          </p>
          <div className="mt-10 w-24 h-1 bg-[#FF50C1] rounded-full shadow-[0_0_15px_rgba(255,80,193,0.8)]"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-all"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{index + 1}. {item.question}</span>
                <span className={`text-2xl text-[#FF50C1] transform transition-transform ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-400 leading-relaxed text-justify">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}