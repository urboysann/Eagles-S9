import Image from "next/image";

export default function Theme() {
  return (
    <section className="py-24 px-6 bg-[#070707] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-3/5 z-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[#FF50C1]">🎮</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Level Up Your Game
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
            Masuki Arena. Masa Depan <br />
            <span className="text-[#FF50C1]">PNB EAGLES</span> Mulai Di Sini.
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
            Baik kamu bertanding untuk mengejar juara, menciptakan konten, atau sekadar mendukung tim jurusanmu, 
            PNB EAGLES adalah titik awal menuju masa depan kompetisi di kampus. Jadilah bagian dari legenda 
            yang digerakkan oleh ambisi, skill, dan semangat generasi pemain baru.
          </p>

          <div className="flex flex-wrap gap-6 items-center">            
            <a href="#" className="text-sm font-bold uppercase tracking-widest border-b-2 border-[#FF50C1] pb-1 hover:text-[#FF50C1] transition-colors">
              Pelajari Format Lomba
            </a>
          </div>
        </div>

        {/* Sisi Kanan: Visual Pemain (Meniru layout image_8dcbb7.jpg) */}
        <div className="w-full lg:w-2/5 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,80,193,0.2)]">
            <img 
              src="images/turnamen.jpg" 
              alt="PNB Arena" 
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient Magenta */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF50C1]/40 to-transparent mix-blend-overlay" />
          </div>
          
          {/* Efek Glow Biru/Magenta di Belakang (Meniru aksen cahaya di referensi) */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[80px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF50C1]/20 blur-[80px] rounded-full" />
        </div>

      </div>
    </section>
  );
}