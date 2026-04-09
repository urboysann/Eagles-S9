export default function StepByStep() {
  const steps = [
    {
      id: "01",
      tagline: "Form Registration",
      title: "Pilih Cabang Lomba atau Seminar",
      desc: "Tentukan kategori yang ingin kamu ikuti di PNB EAGLES Season 9, baik itu turnamen game maupun seminar nasional, lalu akses link pendaftaran resmi yang tersedia.",
    },
    {
      id: "02",
      tagline: "Stand Out",
      title: "Lengkapi Data Diri & Tim Anda",
      desc: "Siapkan data diri anggota, foto identitas aktif, serta informasi tambahan lainnya untuk diunggah ke form pendaftaran yang sudah tersedia di masing-masing kategori yang diikuti.",
    },
    {
      id: "03",
      tagline: "Lock In",
      title: "Konfirmasi & Verifikasi",
      desc: "Setelah submit, tim kami akan memverifikasi datamu. Pastikan nomor WhatsApp yang didaftarkan aktif untuk mendapatkan info konfirmasi selanjutnya.",
    },
  ];

  return (
    <section className="py-24 bg-[#2F0E24]/10 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FF50C1]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic tracking-tighter">
              Step-by-Step: Mendaftar Di<br />
              <span className="text-[#FF50C1] drop-shadow-[0_0_15px_rgba(255,80,193,0.4)]">
                PNB EAGLES Season 9
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-8 rounded-3xl bg-[#2F0E24]/30 border border-white/10 hover:border-[#FF50C1]/40 transition-all h-full backdrop-blur-sm">
                <span className="text-[#FF50C1] font-bold text-sm tracking-widest uppercase block mb-4">
                  {step.tagline}
                </span>
                <h3 className="text-2xl font-bold mb-4 uppercase italic leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 text-justify opacity-80">
                  {step.desc}
                </p>
                <div className="relative h-[2px] w-full bg-white/10 mt-auto">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-[#FF50C1] group-hover:w-full transition-all duration-500" />
                  <div className="absolute -top-1 left-0 w-3 h-3 bg-[#FF50C1] rounded-full shadow-[0_0_10px_#FF50C1]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}