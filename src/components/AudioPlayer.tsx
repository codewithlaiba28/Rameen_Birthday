"use client";

import React, { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX, Sparkles } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Royalty-free acoustic warm ambient melody
    const audio = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-ambient-music-111146.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => setAudioLoaded(true));

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio playback prevented:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleAudio}
        aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#FFFDF9]/90 text-[#4A342A] border border-[#C9A27E]/40 shadow-lg backdrop-blur-md hover:bg-[#E8D5C4] hover:border-[#B87C5D] transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-[#B87C5D] animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-[#4A342A]/60" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B87C5D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B87C5D]"></span>
            </span>
          )}
        </div>
        <span className="text-xs font-medium tracking-wide text-[#4A342A] hidden sm:inline">
          {isPlaying ? "Cozy Music Playing ♫" : "Play Warm Music ♫"}
        </span>
      </button>
    </div>
  );
}
