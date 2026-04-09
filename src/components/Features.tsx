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

  // Inisialisasi Carousel dengan Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
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
    <section id="features" className="py-24 px-6 bg-[#070707]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
            Why <span className="text-[#FF50C1]">PNB EAGLES</span> Matters
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
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
                <div className="group h-full p-8 rounded-2xl bg-[#2F0E24]/20 border border-white/5 hover:border-[#FF50C1]/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF50C1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="text-3xl mb-6 inline-block p-4 rounded-xl bg-white/5 group-hover:bg-[#FF50C1]/10 transition-colors">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#FF50C1] transition-colors uppercase italic tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === selectedIndex 
                ? "w-8 bg-[#FF50C1]" 
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