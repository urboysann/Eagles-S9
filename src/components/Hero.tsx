"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

function Counter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "circOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Hero() {
  return (
    <section className="relative h-auto w-full flex flex-col items-center bg-[#070707] pt-40 pb-24 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-magenta/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center z-10 px-6 max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1 border border-magenta/40 rounded-full text-[10px] font-bold tracking-[0.4em] text-magenta mb-10 bg-magenta/5"
        >
          #BreakYourLimits
        </motion.div>
        
        <h1 className="text-5xl md:text-8xl lg:text-[9.5rem] font-black italic leading-[1.0] uppercase mb-10 font-outfit tracking-tighter pb-4">
          <span className="text-white">PNB</span> <span className="text-magenta drop-shadow-[0_0_30px_rgba(255,80,193,0.5)]">EAGLES</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 block">SEASON 9</span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-gray-400 font-medium font-montserrat tracking-wide leading-relaxed mb-20 text-sm md:text-base px-4">
          Wadah e-sports mahasiswa terbesar di PNB. Tidak hanya kompetisi, temukan masa depanmu di industri gaming melalui <span className="text-white font-bold italic underline decoration-magenta">Seminar Nasional</span> kami. Main game bukan sekadar hobi, tapi peluang profesi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/10 w-full">
          <div className="flex flex-col items-center">
            <h3 className="text-6xl md:text-7xl font-black italic text-white leading-none font-outfit">
              <Counter value={5} />
            </h3>
            <p className="text-[10px] font-bold text-magenta tracking-[0.4em] uppercase mt-3">Event Titles</p>
          </div>
          
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/5 py-10 md:py-0">
            <h3 className="text-6xl md:text-7xl font-black italic text-white leading-none font-outfit">
              <Counter value={300} />+
            </h3>
            <p className="text-[10px] font-bold text-magenta tracking-[0.4em] uppercase mt-3">Players Registered</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-6xl md:text-7xl font-black italic text-white leading-none font-outfit">
              <Counter value={8} />M+
            </h3>
            <p className="text-[10px] font-bold text-magenta tracking-[0.4em] uppercase mt-3">Prize Pool</p>
          </div>
        </div>
      </div>
    </section>
  );
}