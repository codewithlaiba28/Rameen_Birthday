"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Heart, Calendar, ChevronDown, PartyPopper, Star } from "lucide-react";
import confetti from "canvas-confetti";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Golden & rose confetti burst on initial load
    const timer = setTimeout(() => {
      confetti({
        particleCount: 45,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#C9A27E", "#E8D5C4", "#B87C5D", "#D48C84", "#FFFDF9"],
        disableForReducedMotion: true,
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 75,
      spread: 90,
      origin: { y: 0.5 },
      colors: ["#C9A27E", "#E8D5C4", "#B87C5D", "#D48C84", "#FFFDF9"],
    });
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 py-20 overflow-hidden">
      {/* Decorative Light & Shimmer Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8D5C4]/35 via-transparent to-[#FAF3EA] pointer-events-none" />

      {/* Monogram Logo RA - Absolutely Positioned Top Right */}
      <div
        className={`absolute top-6 right-6 sm:top-8 sm:right-12 z-20 flex items-center gap-2.5 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#B87C5D] via-[#C9A27E] to-[#E8D5C4] p-[1.5px] shadow-sm">
          <div className="w-full h-full bg-[#FFFDF9] rounded-full flex items-center justify-center">
            <span className="font-serif italic font-bold text-sm sm:text-base tracking-widest text-[#B87C5D] pl-0.5">
              RA
            </span>
          </div>
        </div>
        <div className="text-left hidden xs:block">
          <span className="font-serif italic font-bold text-base sm:text-lg text-[#4A342A] block leading-tight">
            Rameen Afzal
          </span>
          <span className="text-[9px] uppercase tracking-widest text-[#B87C5D] font-semibold block">
            Official Tribute
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

        {/* Date Badge */}
        <div
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFFDF9]/90 border border-[#C9A27E]/50 text-[#B87C5D] text-xs sm:text-sm tracking-widest uppercase font-semibold shadow-md mb-8 backdrop-blur-md transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Calendar className="w-4 h-4 text-[#B87C5D]" />
          <span>August 23rd • Birthday Edition</span>
          <Sparkles className="w-4 h-4 text-[#C9A27E]" />
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif italic text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-[#4A342A] leading-[1.08] tracking-tight mb-6 sm:mb-8 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Happy Birthday <br className="hidden sm:inline" />
          <span className="relative inline-block text-gradient-shimmer not-italic font-semibold break-words">
            Rameen Afzal
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#C9A27E]/60 pointer-events-none"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q 50 0, 100 15"
                stroke="currentColor"
                strokeWidth="3.5"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-sans text-sm sm:text-lg md:text-xl text-[#4A342A]/85 max-w-2xl leading-relaxed mb-8 sm:mb-12 transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Celebrating the grace, kindness, and golden warmth you bring to everyone around you. A special tribute crafted with endless admiration for your special day on <strong className="font-semibold text-[#B87C5D]">August 23rd</strong>.
        </p>

        {/* Interactive CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row w-full sm:w-auto justify-center items-center gap-3.5 sm:gap-5 transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="#wishes"
            className="w-full sm:w-auto group px-8 py-3.5 sm:py-4 rounded-full bg-[#B87C5D] text-[#FFFDF9] font-medium text-sm sm:text-base shadow-lg hover:bg-[#A36B4E] hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <Heart className="w-5 h-5 fill-current group-hover:scale-110 transition-transform text-[#FFFDF9]" />
            <span>Leave a Birthday Wish</span>
          </a>

          <button
            onClick={triggerConfetti}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-[#FFFDF9] text-[#4A342A] border border-[#C9A27E]/50 font-medium text-sm sm:text-base shadow-md hover:bg-[#E8D5C4]/40 hover:border-[#B87C5D] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95"
          >
            <PartyPopper className="w-5 h-5 text-[#C9A27E]" />
            <span>Celebrate Rameen</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#countdown"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A342A]/60 hover:text-[#B87C5D] transition-colors duration-300 cursor-pointer ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[11px] tracking-widest uppercase font-semibold">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C9A27E]" />
      </a>
    </section>
  );
}

