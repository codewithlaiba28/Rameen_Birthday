"use client";

import React from "react";
import { Heart, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 py-12 px-4 sm:px-6 border-t border-[#E8D5C4] bg-[#FAF3EA]/90 backdrop-blur-md mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        {/* Left branding */}
        <div>
          <h3 className="font-serif italic text-2xl text-[#4A342A] font-semibold">
            Rameen Afzal
          </h3>
          <p className="text-xs text-[#4A342A]/70 font-sans mt-0.5 font-medium">
            August 23rd • Birthday Celebration Edition
          </p>
        </div>

        {/* Center line requirement */}
        <div className="flex items-center gap-2 text-sm text-[#4A342A]/85 font-semibold">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-[#B87C5D] fill-[#B87C5D] animate-pulse" />
          <span>for Rameen Afzal • August 23rd</span>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="p-3.5 rounded-full bg-[#FFFDF9] border border-[#C9A27E]/40 text-[#4A342A] hover:bg-[#E8D5C4] hover:border-[#B87C5D] transition-all shadow-md group active:scale-95"
        >
          <ArrowUp className="w-4.5 h-4.5 text-[#B87C5D] group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

