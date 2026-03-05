export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#070707] relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Side */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-magenta to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#1A0B16] rounded-[2rem] overflow-hidden border border-white/10">
            <img 
              src="images/home.jpg" 
              alt="Gaming & Seminar" 
              className="w-full h-[400px] object-cover mix-blend-luminosity hover:mix-blend-normal transition duration-500"
            />
          </div>
        </div>

        {/* Content Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 italic">
            BEYOND THE <span className="text-magenta">CONTROLLER.</span>
          </h2>
          <div className="space-y-6 text-gray-400 font-montserrat leading-relaxed">
            <p>
              <strong className="text-white">PNB EAGLES Season 9</strong> adalah program kerja unggulan Unit Kegiatan Mahasiswa Politeknik Negeri Bali yang didesain sebagai ekosistem e-sports mahasiswa terbesar.
            </p>
            <p>
              Kami percaya hobi bermain game memiliki potensi ekonomi luar biasa. Melalui <span className="text-white font-bold italic underline decoration-magenta">Seminar Nasional</span> kami, kamu akan mengeksplorasi cara menghasilkan uang dari industri game—mulai dari content creation, shoutcasting, hingga manajemen event—tanpa harus menjadi pro-player.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border-l-4 border-magenta">
                <h4 className="text-white font-bold mb-1 uppercase text-sm">Competitive Area</h4>
                <p className="text-xs">Uji skill timmu di turnamen bergengsi.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border-l-4 border-magenta">
                <h4 className="text-white font-bold mb-1 uppercase text-sm">Knowledge Hub</h4>
                <p className="text-xs">Seminar Nasional & Insight Industri.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}