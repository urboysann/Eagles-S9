export default function Features() {
  const features = [
    {
      title: "Community-Driven",
      desc: "PNB Eagles berkembang melalui dukungan dan energi mahasiswa yang haus akan kompetisi.",
      icon: "🏆",
    },
    {
      title: "Multi-Game Format",
      desc: "Dari MLBB hingga Tekken 8, kami menghadirkan berbagai cabang game yang menguji skill terbaikmu.",
      icon: "🎮",
    },
    {
      title: "Strategic Growth",
      desc: "Kami bukan sekadar bermain; kami membangun mentalitas pemenang dan kerja sama tim yang solid.",
      icon: "📈",
    },
    {
      title: "Local Pride",
      desc: "Membawa nama harum jurusan dan Politeknik Negeri Bali melalui prestasi di bidang eSports.",
      icon: "📍",
    },
    {
      title: "Live Action",
      desc: "Nikmati keseruan pertandingan melalui siaran langsung dan konten eksklusif di setiap season.",
      icon: "🎥",
    },
    {
      title: "Innovation at Core",
      desc: "Dari sistem turnamen hingga pengalaman pemain, kami mendesain segalanya dengan standar profesional.",
      icon: "💡",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-[#070707]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Why <span className="text-[#FF50C1]">PNB EAGLES</span> Matters
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Membangun warisan eSports mahasiswa yang kompetitif, sportif, dan berprestasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-[#2F0E24]/20 border border-white/5 hover:border-[#FF50C1]/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Efek Cahaya Magenta Saat Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF50C1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="text-3xl mb-6 inline-block p-4 rounded-xl bg-white/5 group-hover:bg-[#FF50C1]/10 transition-colors">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#FF50C1] transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}