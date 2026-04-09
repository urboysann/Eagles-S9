"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const GAME_LIST = [
  {
    title: "MOBILE LEGENDS",
    category: "MOBA • TOURNAMENT",
    image: "/images/mlbb.jpg", 
    color: "from-blue-600/20",
    slug: "mlbb",
  },
  {
    title: "PUBG MOBILE",
    category: "BATTLE ROYALE",
    image: "/images/pubg.jpg",
    color: "from-orange-600/20",
    slug: "pubg",
  },
  {
    title: "E-FOOTBALL",
    category: "SPORTS • ARCADE",
    image: "/images/e-football.jpg",
    color: "from-green-600/20",
    slug: "efootball",
  },
  {
    title: "TEKKEN 8",
    category: "FIGHTING • GAME",
    image: "/images/tekken.jpg",
    color: "from-red-600/20",
    slug: "tekken",
  },
];

const GOOGLE_FORM_LINK = "https://bit.ly/Pendaftaran-Lomba-PNB-EAGLES-S9";

export default function Games() {
  // Animasi untuk muncul satu per satu di mobile (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="games" className="py-24 bg-[#070707] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-magenta"></span>
              <span className="text-magenta font-bold tracking-[0.3em] text-[10px] uppercase">
                Choose Your Arena
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase font-outfit leading-none">
              CABANG <span className="text-magenta">PERTANDINGAN</span>
            </h2>
            <p className="text-gray-400 mt-6 font-montserrat text-sm md:text-base leading-relaxed">
              Pilih arena terbaikmu dan buktikan kemampuan timmu. Pemenang tidak hanya mendapatkan hadiah, tapi juga akses eksklusif ke <span className="text-white italic">Panggung Turnamen PNB EAGLES Season 9.</span>
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-6xl font-black text-white/5 italic">Season 9</span>
          </div>
        </div>

        {/* Container dengan Stagger Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {GAME_LIST.map((game, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#121212]"
            >
              <div className="absolute inset-0">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover transition duration-700 md:mix-blend-luminosity md:group-hover:mix-blend-normal opacity-100 md:opacity-40 md:group-hover:opacity-100 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${game.color} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                <div className="mb-6 md:mb-0 md:group-hover:mb-6 transition-all duration-500 ease-out">
                  <p className="text-[10px] font-bold text-magenta tracking-[0.2em] mb-1 uppercase">
                    {game.category}
                  </p>
                  <h3 className="text-2xl font-black text-white italic leading-tight md:group-hover:text-magenta transition-colors">
                    {game.title}
                  </h3>
                </div>
                
                <div className="max-h-[200px] opacity-100 mb-2 md:max-h-0 md:opacity-0 md:group-hover:max-h-[200px] md:group-hover:opacity-100 transition-all duration-500 ease-out space-y-3 pointer-events-auto">
                  <a 
                    href={GOOGLE_FORM_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block"
                  >
                    <button className="w-full py-3.5 bg-magenta text-white font-black text-[10px] tracking-[0.2em] uppercase rounded-xl hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,80,193,0.3)]">
                      Daftar Sekarang
                    </button>
                  </a>

                  <Link href={`/games/${game.slug}`} className="block">
                    <button className="w-full py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] tracking-[0.2em] uppercase rounded-xl hover:bg-white/20 transition-all">
                      Lihat Selengkapnya
                    </button>
                  </Link>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-magenta/40 md:border-magenta/0 md:group-hover:border-magenta/40 rounded-[2.5rem] transition-all pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}