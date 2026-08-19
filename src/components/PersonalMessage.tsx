"use client";

import React, { useState } from "react";
import { Quote, Feather, Heart, Mail, Sparkles } from "lucide-react";

export default function PersonalMessage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section id="message" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#E8D5C4]/50 border border-[#C9A27E]/30 text-[#B87C5D] text-xs font-semibold uppercase tracking-widest mb-3">
            <Feather className="w-3.5 h-3.5 text-[#B87C5D]" />
            <span>A Heartfelt Tribute</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl text-[#4A342A]">
            A Personal Letter for Rameen
          </h2>
        </div>

        {/* Letter Container */}
        <div className="relative glass-card rounded-3xl p-5 sm:p-10 md:p-14 border border-[#C9A27E]/40 shadow-2xl overflow-hidden glow-card-gold">
          {/* Subtle Decorative Accents */}
          <div className="absolute top-6 right-6 opacity-15 pointer-events-none">
            <Feather className="w-20 h-20 text-[#B87C5D]" />
          </div>

          <div className="absolute top-6 left-6 text-[#C9A27E]/30">
            <Quote className="w-10 h-10 rotate-180" />
          </div>

          {/* Letter Header */}
          <div className="mb-8 border-b border-[#E8D5C4] pb-5 flex justify-between items-center flex-wrap gap-4">
            <div>
              <span className="font-handwritten text-3xl sm:text-4xl text-[#B87C5D] block">
                Dearest Rameen Afzal,
              </span>
              <span className="text-xs text-[#4A342A]/60 uppercase tracking-widest font-semibold mt-1 block">
                August 23rd • Special Birthday Edition
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D5C4]/50 border border-[#C9A27E]/30 text-xs text-[#4A342A]/80 font-semibold shadow-xs">
              <Heart className="w-3.5 h-3.5 text-[#B87C5D] fill-[#B87C5D]" />
              <span>Aug 23 Tribute</span>
            </div>
          </div>

          {/* Letter Body Content */}
          <div className="space-y-6 text-base sm:text-xl leading-relaxed text-[#4A342A]/90 font-sans">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#B87C5D] first-letter:mr-2 first-letter:float-left">
              On this beautiful day of <strong className="font-semibold text-[#B87C5D]">August 23rd</strong>, we stop to celebrate you, a truly rare and wonderful soul. Rameen, you are not only incredibly beautiful, humble, and honest, but also an exceptionally hard-working and dedicated professional.
            </p>
            <p>
              You bring genuine warmth and positivity into every room you walk into, gracefully balancing your career ambitions with sincere, heartfelt care for others. Your kindness is effortless, your work ethic is inspiring, and your friendship is truly one of the most beautiful and cherished blessings in our lives.
            </p>
            <p>
              May this new year of your life unfold with endless moments of peace, continuous success, genuine laughter, fulfillment, health, and all the sweet happiness your heart can hold.
            </p>
          </div>

          {/* Letter Footer Signature */}
          <div className="mt-10 pt-8 border-t border-[#E8D5C4] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="font-handwritten text-3xl text-[#B87C5D]">
                With warmth & endless admiration,
              </p>
              <p className="text-xs uppercase tracking-wider text-[#4A342A]/60 mt-1 font-semibold">
                Always celebrating you
              </p>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-serif italic text-[#C9A27E] bg-[#FFFDF9] px-4 py-2 rounded-2xl border border-[#C9A27E]/30 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B87C5D]" />
              <span>August 23rd • Celebrating Rameen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

