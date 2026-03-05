"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana cara mendaftar PNB EAGLES S9?",
    answer: "Kamu bisa mendaftar dengan menekan tombol 'Daftar Sekarang' pada cabang game yang ingin kamu ikuti di atas. Kamu akan diarahkan langsung ke Google Form resmi.",
  },
  {
    question: "Apakah peserta di luar PNB boleh ikut?",
    answer: "Untuk Season 9 ini, turnamen dikhususkan bagi mahasiswa aktif Politeknik Negeri Bali. Pastikan kamu memiliki KTM yang valid.",
  },
  {
    question: "Apa saja game yang dipertandingkan?",
    answer: "Terdapat 4 cabang game utama: Mobile Legends, PUBG Mobile, e-Football, dan Tekken 8.",
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer: "Informasi mengenai biaya pendaftaran dan total hadiah dapat kamu lihat secara detail di dalam link Google Form masing-masing cabang game.",
  },
  {
    question: "Di mana saya bisa mendapatkan guidebook perlombaan?",
    answer: "Guidebook atau pedoman teknis biasanya tersedia di dalam deskripsi Google Form atau akan dibagikan saat Technical Meeting melalui grup WhatsApp peserta.",
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
        {/* Sisi Kiri: Judul */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            FREQUENTLY ASKED <br /> 
            <span className="text-[#FF50C1]">QUESTION</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md">
            Punya pertanyaan seputar PNB EAGLES S9? Cek beberapa jawaban yang sering ditanyakan di sini.
          </p>
          
          {/* Efek dekoratif garis merah seperti di gambar */}
          <div className="mt-10 w-24 h-1 bg-[#FF50C1] rounded-full shadow-[0_0_15px_rgba(255,80,193,0.8)]"></div>
        </div>

        {/* Sisi Kanan: Accordion FAQ */}
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
                <p className="text-gray-400 leading-relaxed">
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