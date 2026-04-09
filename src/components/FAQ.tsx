"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Bagaimana cara mendaftar PNB EAGLES Season 9?",
    answer: "Kamu bisa mendaftar dengan menekan tombol 'Daftar Sekarang' pada cabang lomba atau seminar yang ingin kamu ikuti di atas. Kamu akan diarahkan langsung ke Google Form pendaftaran resmi.",
  },
  {
    question: "Apakah peserta di luar Politeknik Negeri Bali boleh ikut Seminar & Turnamen?",
    answer: "Boleh banget! PNB EAGLES Season 9 kali ini terbuka untuk seluruh mahasiswa serta umum di Regional Bali. Baik untuk agenda Seminar Nasional maupun Turnamen Game, pastikan kamu memiliki kartu identitas yang valid, ya!",
  },
  {
    question: "Apa saja agenda utama yang diselenggarakan?",
    answer: "Terdapat dua agenda utama yaitu Seminar Nasional dengan pembicara ahli di bidang E-Sports, serta Turnamen Game yang mempertandingkan Mobile Legends, PUBG Mobile, e-Football, dan Tekken 8.",
  },
  {
    question: "Apakah ada biaya pendaftaran untuk Seminar atau Lomba?",
    answer: "Informasi detail mengenai biaya pendaftaran (jika ada) untuk masing-masing kategori Seminar maupun Turnamen dapat kamu cek langsung melalui Google Form pendaftaran yang tersedia.",
  },
  {
    question: "Di mana saya bisa mendapatkan guidebook perlombaan & seminar?",
    answer: "Pedoman teknis atau guidebook untuk tiap cabang lomba serta detail pelaksanaan seminar tersedia dan dapat diakses pada masing-masing bagian informasi kategori yang kamu pilih.",
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
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase italic">
            FREQUENTLY ASKED <br /> 
            <span className="text-[#FF50C1] drop-shadow-[0_0_15px_rgba(255,80,193,0.4)]">QUESTION</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md text-justify font-medium">
            Punya pertanyaan seputar <span className="text-white">Seminar & Turnamen</span> di <span className="text-magenta italic font-bold">PNB EAGLES Season 9?</span> Cek beberapa jawaban yang sering ditanyakan di sini.
          </p>
          <div className="mt-10 w-24 h-1 bg-[#FF50C1] rounded-full shadow-[0_0_15px_rgba(255,80,193,0.8)]"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div 
              key={index} 
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:border-[#FF50C1]/30 transition-all duration-300"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center group transition-colors"
              >
                <span className="font-bold text-lg pr-4">{index + 1}. {item.question}</span>
                <span className={`text-2xl text-[#FF50C1] font-light transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[300px] opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-400 leading-relaxed text-justify border-t border-white/5 pt-4">
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