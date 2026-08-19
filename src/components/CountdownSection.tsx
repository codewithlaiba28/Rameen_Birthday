"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Clock, Heart, Gift } from "lucide-react";
import confetti from "canvas-confetti";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isBirthdayToday: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let birthday = new Date(currentYear, 7, 23); // Month index 7 = August

      // If August 23 of this year has passed, target next year
      if (now.getTime() > birthday.getTime() + 86400000) {
        birthday = new Date(currentYear + 1, 7, 23);
      }

      const diff = birthday.getTime() - now.getTime();
      const isToday =
        now.getMonth() === 7 && now.getDate() === 23;

      if (diff <= 0 || isToday) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isBirthdayToday: true,
        });
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isBirthdayToday: false,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#C9A27E", "#B87C5D", "#E8D5C4", "#D48C84", "#FFFDF9"],
    });
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-6 sm:p-12 text-center border border-[#C9A27E]/40 shadow-2xl relative overflow-hidden glow-card-gold">
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E8D5C4]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D5C4]/60 border border-[#C9A27E]/30 text-[#B87C5D] text-xs font-semibold uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#B87C5D]" />
            <span>Grand Celebration Date</span>
          </div>

          <h2 className="font-serif italic text-3xl sm:text-5xl text-[#4A342A] mb-3">
            August 23rd • Birthday Countdown
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#4A342A]/80 max-w-lg mx-auto mb-8">
            Counting down every magical moment until Rameen Afzal's special birthday!
          </p>

          {/* Countdown Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#C9A27E]/30 shadow-md group hover:border-[#B87C5D] transition-all"
              >
                <span className="font-serif text-3xl sm:text-5xl font-bold text-[#B87C5D] tracking-tight group-hover:scale-105 transition-transform">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#4A342A]/60 mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Trigger */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={triggerCelebration}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B87C5D] via-[#C9A27E] to-[#D48C84] text-[#FFFDF9] font-medium text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-[#FFFDF9]" />
              <span>Shower Birthday Confetti 🎉</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
