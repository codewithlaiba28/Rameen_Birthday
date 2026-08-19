"use client";

import React, { useEffect, useState } from "react";

interface Sparkle {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function AmbientBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate gentle floating ambient particles
    const generated: Sparkle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Warm Ambient Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-[#E8D5C4]/60 opacity-60 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-[#D48C84]/30 opacity-50 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2.5s" }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-[26rem] h-[26rem] bg-[#C9A27E]/30 opacity-40 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "5s" }}
      />

      {/* Floating Sparkles & Soft Petals */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          className="absolute rounded-full bg-gradient-to-r from-[#C9A27E] to-[#D48C84] animate-float"
          style={{
            top: `${sp.top}%`,
            left: `${sp.left}%`,
            width: `${sp.size}px`,
            height: `${sp.size}px`,
            animationDuration: `${sp.duration}s`,
            animationDelay: `${sp.delay}s`,
            opacity: sp.opacity,
            boxShadow: "0 0 10px rgba(201, 162, 126, 0.6)",
          }}
        />
      ))}

      {/* Grid subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#4A342A 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

