import React from "react";
import AmbientBackground from "@/components/AmbientBackground";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import InteractiveSurprise from "@/components/InteractiveSurprise";
import PersonalMessage from "@/components/PersonalMessage";
import ReasonsSection from "@/components/ReasonsSection";
import WishesWall from "@/components/WishesWall";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-[#E8D5C4] selection:text-[#4A342A]">
      {/* Ambient Floating Glow & Particles */}
      <AmbientBackground />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. August 23rd Countdown Ticker */}
      <div id="countdown">
        <CountdownSection />
      </div>

      {/* 3. Interactive Birthday Cake Candle Blow & Gift Box */}
      <InteractiveSurprise />

      {/* 4. Personal Message Section */}
      <PersonalMessage />

      {/* 5. Reasons We Adore You Section */}
      <ReasonsSection />

      {/* 6. Wishes Wall Section */}
      <WishesWall />

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}

