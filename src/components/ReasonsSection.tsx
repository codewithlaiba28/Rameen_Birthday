"use client";

import React, { useState } from "react";
import { Sun, HeartHandshake, ShieldCheck, Sparkles, Smile, Star, Compass } from "lucide-react";

export default function ReasonsSection() {
  const [activeReason, setActiveReason] = useState<number | null>(null);

  const reasons = [
    {
      id: 1,
      icon: Sun,
      title: "Radiant Warmth",
      description: "Your presence brings deep comfort and golden light, making every interaction feel like a warm, serene afternoon.",
      tag: "Warmth",
    },
    {
      id: 2,
      icon: HeartHandshake,
      title: "Genuine Kindness",
      description: "You have a rare, humble heart that listens deeply and cares for others with unconditional grace and empathy.",
      tag: "Grace",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Unwavering Loyalty",
      description: "A steadfast anchor and dependable friend who balances career ambition with genuine care for everyone around you.",
      tag: "Loyalty",
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Professional Dedication",
      description: "An exceptionally hard-working professional whose honesty and positivity inspire everyone around her.",
      tag: "Dedication",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D5C4]/60 border border-[#C9A27E]/30 text-[#B87C5D] text-xs font-semibold uppercase tracking-widest mb-3">
            <Star className="w-3.5 h-3.5 text-[#B87C5D]" />
            <span>A Tribute to Your Qualities</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl text-[#4A342A] mb-3">
            Reasons We Adore You
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4A342A]/80 max-w-xl mx-auto">
            The unique virtues and golden qualities that make Rameen Afzal so deeply special to all of us.
          </p>
        </div>

        {/* Grid of 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            const isHovered = activeReason === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveReason(item.id)}
                onMouseLeave={() => setActiveReason(null)}
                className={`glass-card-interactive rounded-3xl p-8 sm:p-9 flex flex-col justify-between group relative overflow-hidden cursor-pointer border ${
                  isHovered ? "border-[#B87C5D] shadow-2xl scale-[1.02]" : "border-[#C9A27E]/30"
                }`}
              >
                {/* Background soft highlight circle */}
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#E8D5C4]/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

                <div>
                  {/* Top Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#E8D5C4]/60 border border-[#C9A27E]/40 flex items-center justify-center text-[#B87C5D] group-hover:bg-[#B87C5D] group-hover:text-[#FFFDF9] transition-all duration-300 shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif italic text-2xl sm:text-3xl text-[#4A342A] mb-3 group-hover:text-[#B87C5D] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4A342A]/85 font-sans text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E8D5C4]/50 flex items-center justify-between text-xs text-[#B87C5D] font-semibold">
                  <span className="tracking-widest uppercase">Quality #{item.id} • {item.tag}</span>
                  <span className="font-handwritten text-xl opacity-90 group-hover:opacity-100 transition-opacity">
                    Rameen's Essence ✨
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

