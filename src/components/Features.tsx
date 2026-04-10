"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Features() {
  const features = [
    {
      title: "Community-Driven",
      desc: "PNB EAGLES berkembang melalui dukungan dan energi player yang haus akan kompetisi.",
      icon: "🏆",
    },
    {
      title: "Multi-Game Format",
      desc: "Dari MLBB hingga Tekken 8, kami menghadirkan berbagai cabang game yang menguji skill terbaikmu.",
      icon: "🎮",
    },
    {
      title: "Strategic Growth",
      desc: "Kami bukan sekadar bermain rapi kami membangun mentalitas pemenang dan kerja sama tim yang solid.",
      icon: "📈",
    },
    {
      title: "Local Pride",
      desc: "Membawa nama harum instansi melalui prestasi di bidang E-Sports.",
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

  // Carousel setup dengan Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 }
      }
    }, 
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="features" className="py-24 px-6 bg-[#0a050a] relative overflow-hidden">
      {/* Efek Ambient Glow Magenta di latar belakang agar konsisten dengan section lain */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF50C1]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* Judul diatur menjadi 2-3 baris di mobile dengan max-width dan <br/> */}
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter leading-[1.1] md:leading-tight max-w-[280px] md:max-w-none mx-auto text-white font-outfit">
            Why <br className="md:hidden" /> 
            <span className="text-[#FF50C1] drop-shadow-[0_0_15px_rgba(255,80,193,0.3)]">PNB EAGLES</span> 
            <br className="md:hidden" /> Matters
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-montserrat">
            Membangun warisan E-Sports yang kompetitif, sportif, dan berprestasi.
          </p>
        </div>

        {/* Viewport Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3"
              >
                <div className="group h-full p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FF50C1]/50 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF50C1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Icon Container */}
                  <div className="text-3xl mb-6 inline-block p-4 rounded-xl bg-white/5 group-hover:bg-[#FF50C1]/10 transition-colors shadow-inner">
                    {item.icon}
                  </div>
                  
                  {/* Feature Title */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#FF50C1] transition-colors uppercase italic tracking-tight text-white font-outfit">
                    {item.title}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-gray-400 text-sm leading-relaxed text-justify font-montserrat">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === selectedIndex 
                ? "w-8 bg-[#FF50C1] shadow-[0_0_10px_rgba(255,80,193,0.5)]" 
                : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}