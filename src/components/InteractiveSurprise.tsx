"use client";

import React, { useState } from "react";
import { Flame, Gift, Sparkles, Heart, Award, Star } from "lucide-react";
import confetti from "canvas-confetti";

export default function InteractiveSurprise() {
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [isBlownOut, setIsBlownOut] = useState(false);
  const [isGiftOpened, setIsGiftOpened] = useState(false);

  const handleBlowCandles = () => {
    setCandlesLit([false, false, false]);
    setIsBlownOut(true);

    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.5 },
      colors: ["#C9A27E", "#B87C5D", "#E8D5C4", "#D48C84", "#FFFDF9"],
    });
  };

  const handleRelight = () => {
    setCandlesLit([true, true, true]);
    setIsBlownOut(false);
  };

  const handleOpenGift = () => {
    setIsGiftOpened(!isGiftOpened);
    if (!isGiftOpened) {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#D48C84", "#C9A27E", "#FFFDF9"],
      });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D5C4]/60 border border-[#C9A27E]/30 text-[#B87C5D] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Celebrations</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl text-[#4A342A] mb-3">
            Make a Wish & Open Your Gift
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#4A342A]/80 max-w-xl mx-auto">
            Blow out the candles on Rameen's virtual birthday cake and unlock a special birthday surprise!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Virtual Cake & Candle Blowing */}
          <div className="glass-card-interactive rounded-3xl p-8 sm:p-10 text-center flex flex-col justify-between items-center relative overflow-hidden border border-[#C9A27E]/30 shadow-xl">
            <div className="w-full flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#B87C5D]">
                Interactive Feature #1
              </span>
              <span className="px-3 py-1 rounded-full bg-[#E8D5C4]/50 text-xs text-[#4A342A] font-medium">
                Birthday Cake
              </span>
            </div>

            {/* Cake Display */}
            <div className="my-8 relative flex flex-col items-center">
              {/* Candles Row */}
              <div className="flex justify-center gap-6 mb-2">
                {candlesLit.map((isLit, i) => (
                  <div key={i} className="flex flex-col items-center relative">
                    {/* Flame */}
                    <div
                      className={`transition-all duration-500 ${
                        isLit
                          ? "opacity-100 scale-100 animate-flicker"
                          : "opacity-0 scale-50"
                      }`}
                    >
                      <Flame className="w-6 h-6 text-amber-500 fill-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    </div>

                    {/* Candle stick */}
                    <div className="w-2.5 h-10 bg-gradient-to-b from-[#E8D5C4] to-[#B87C5D] rounded-t-sm shadow-sm border border-[#C9A27E]/40" />
                  </div>
                ))}
              </div>

              {/* Cake Top Layer */}
              <div className="w-44 h-12 bg-gradient-to-r from-[#FFFDF9] via-[#E8D5C4] to-[#FFFDF9] rounded-t-2xl border-t border-x border-[#C9A27E]/40 shadow-sm flex items-center justify-center relative">
                <span className="text-xs font-handwritten text-[#B87C5D] text-lg">
                  Happy Birthday Rameen
                </span>
              </div>

              {/* Cake Bottom Layer */}
              <div className="w-56 h-16 bg-gradient-to-r from-[#E8D5C4] via-[#C9A27E]/40 to-[#E8D5C4] rounded-b-2xl border border-[#C9A27E]/40 shadow-md flex items-center justify-around px-4">
                <Heart className="w-4 h-4 text-[#B87C5D] fill-[#B87C5D]/40" />
                <Star className="w-4 h-4 text-[#C9A27E] fill-[#C9A27E]/40" />
                <Heart className="w-4 h-4 text-[#B87C5D] fill-[#B87C5D]/40" />
              </div>
              {/* Cake Stand Base */}
              <div className="w-64 h-3 bg-[#4A342A]/20 rounded-full blur-xs mt-1" />
            </div>

            {/* Action Buttons */}
            <div className="w-full mt-4">
              {!isBlownOut ? (
                <button
                  onClick={handleBlowCandles}
                  className="w-full py-3.5 rounded-2xl bg-[#B87C5D] text-[#FFFDF9] font-medium text-sm sm:text-base shadow-md hover:bg-[#A36B4E] transition-all flex items-center justify-center gap-2 group"
                >
                  <Flame className="w-4 h-4 text-amber-300 group-hover:scale-110 transition-transform" />
                  <span>Blow Out Candles</span>
                </button>
              ) : (
                <button
                  onClick={handleRelight}
                  className="w-full py-3.5 rounded-2xl bg-[#FFFDF9] text-[#4A342A] border border-[#C9A27E]/40 font-medium text-sm sm:text-base shadow-sm hover:bg-[#E8D5C4]/40 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C9A27E]" />
                  <span>Light Candles Again</span>
                </button>
              )}
              {isBlownOut && (
                <p className="text-xs text-[#B87C5D] font-medium mt-3 animate-bounce">
                  Wish made! May all your dreams come true on August 23rd!
                </p>
              )}
            </div>
          </div>

          {/* Card 2: Surprise Gift Box */}
          <div className="glass-card-interactive rounded-3xl p-8 sm:p-10 text-center flex flex-col justify-between items-center relative overflow-hidden border border-[#C9A27E]/30 shadow-xl">
            <div className="w-full flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#B87C5D]">
                Interactive Feature #2
              </span>
              <span className="px-3 py-1 rounded-full bg-[#E8D5C4]/50 text-xs text-[#4A342A] font-medium">
                Gift Reveal
              </span>
            </div>

            {/* Gift Display */}
            <div className="my-6 relative flex flex-col items-center justify-center min-h-[160px] w-full">
              {!isGiftOpened ? (
                <div className="flex flex-col items-center animate-float">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#B87C5D] via-[#C9A27E] to-[#D48C84] flex items-center justify-center shadow-lg relative group cursor-pointer" onClick={handleOpenGift}>
                    <Gift className="w-12 h-12 text-[#FFFDF9] animate-pulse" />
                    <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-[#FFFDF9]/60" />
                  </div>
                  <span className="text-xs text-[#4A342A]/70 font-medium mt-4">
                    Tap the box to unwrap Rameen's message
                  </span>
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#C9A27E]/40 text-left shadow-inner relative animate-reveal-up w-full">
                  <div className="flex items-center gap-2 mb-3 text-[#B87C5D]">
                    <Award className="w-5 h-5" />
                    <span className="font-serif italic font-semibold text-lg text-[#4A342A]">
                      A Special Blessing for Rameen
                    </span>
                  </div>
                  <p className="text-sm text-[#4A342A]/90 leading-relaxed font-sans mb-3">
                    "May August 23rd mark the beginning of your happiest year yet, filled with peace, continuous growth, soft moments of joy, and unwavering success!"
                  </p>
                  <p className="font-handwritten text-xl text-[#B87C5D] text-right">
                    Crafted with pure admiration
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="w-full mt-4">
              <button
                onClick={handleOpenGift}
                className="w-full py-3.5 rounded-2xl bg-[#FFFDF9] text-[#4A342A] border border-[#C9A27E]/40 font-medium text-sm sm:text-base shadow-sm hover:bg-[#E8D5C4]/40 transition-all flex items-center justify-center gap-2"
              >
                <Gift className="w-4 h-4 text-[#B87C5D]" />
                <span>{isGiftOpened ? "Close Gift Box" : "Unwrap Birthday Surprise"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
