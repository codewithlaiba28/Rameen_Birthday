"use client";

import React, { useState, useEffect } from "react";
import { Send, Heart, Sparkles, MessageCircle, User, Filter, Search, Trash2, Smile, Award } from "lucide-react";
import confetti from "canvas-confetti";

export interface WishItem {
  id: string;
  name: string;
  wish: string;
  tag: string;
  timestamp: string;
  likes: number;
}

const INITIAL_WISHES: WishItem[] = [
  {
    id: "initial-1",
    name: "Ayesha & Family",
    wish: "Happy Birthday Rameen! May your day on August 23rd be filled with warm coffee, sweet smiles, and all the love in the world. Keep shining brightly!",
    tag: "🌸 Soft Wishes",
    timestamp: "August 23, 2026",
    likes: 18,
  },
  {
    id: "initial-2",
    name: "Zainab K.",
    wish: "To the sweetest soul, thank you for always bringing so much peace and light into our lives. Have the happiest August 23rd birthday, Rameen!",
    tag: "✨ Pure Light",
    timestamp: "August 23, 2026",
    likes: 14,
  },
  {
    id: "initial-3",
    name: "Hamza R.",
    wish: "Wishing Rameen Afzal a year ahead packed with success, genuine happiness, and beautiful adventures. Happy August 23rd Birthday!",
    tag: "🎂 Birthday Joy",
    timestamp: "August 23, 2026",
    likes: 12,
  },
  {
    id: "initial-4",
    name: "Sara & Bilal",
    wish: "Sending you the warmest birthday hugs on August 23rd! Stay as wonderful, kind, and loyal as you've always been.",
    tag: "☕ Warm Vibes",
    timestamp: "August 23, 2026",
    likes: 21,
  },
];

const TAG_OPTIONS = [
  "🌸 Soft Wishes",
  "✨ Pure Light",
  "🎂 Birthday Joy",
  "☕ Warm Vibes",
  "🕊️ Deep Gratitude",
];

const QUICK_WISH_TEMPLATES = [
  "Wishing you endless happiness & peace on your special day! 🌸",
  "Happy Birthday Rameen! May all your dreams come true! ✨",
  "To a wonderful soul, have the brightest August 23rd birthday! 💖",
];

export default function WishesWall() {
  const [wishes, setWishes] = useState<WishItem[]>([]);
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [selectedTag, setSelectedTag] = useState(TAG_OPTIONS[0]);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("rameen_birthday_wishes");
      if (saved) {
        setWishes(JSON.parse(saved));
      } else {
        setWishes(INITIAL_WISHES);
      }

      const savedLikes = localStorage.getItem("rameen_wishes_liked");
      if (savedLikes) {
        setLikedMap(JSON.parse(savedLikes));
      }
    } catch (e) {
      console.error("Failed to load wishes", e);
      setWishes(INITIAL_WISHES);
    }
  }, []);

  // Save to localStorage when wishes change
  const saveWishesToStorage = (newWishes: WishItem[]) => {
    setWishes(newWishes);
    try {
      localStorage.setItem("rameen_birthday_wishes", JSON.stringify(newWishes));
    } catch (e) {
      console.error("Failed to save wishes", e);
    }
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmedName = name.trim();
    const trimmedWish = wish.trim();

    if (!trimmedName || !trimmedWish) {
      setErrorMsg("Please enter both your name and a birthday wish 🤍");
      return;
    }

    if (trimmedWish.length < 3) {
      setErrorMsg("Please write a slightly longer wish!");
      return;
    }

    setIsSubmitting(true);

    const newWishItem: WishItem = {
      id: Date.now().toString(),
      name: trimmedName,
      wish: trimmedWish,
      tag: selectedTag,
      timestamp: "August 23, 2026",
      likes: 1,
    };

    const updated = [newWishItem, ...wishes];
    saveWishesToStorage(updated);

    // Trigger confetti celebrating new submission
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ["#C9A27E", "#B87C5D", "#E8D5C4", "#D48C84", "#FFFDF9"],
    });

    // Reset form
    setName("");
    setWish("");
    setSelectedTag(TAG_OPTIONS[0]);
    setIsSubmitting(false);
  };

  // Toggle Like on a wish
  const handleLike = (id: string) => {
    const isLiked = likedMap[id];
    const newLikedMap = { ...likedMap, [id]: !isLiked };
    setLikedMap(newLikedMap);
    try {
      localStorage.setItem("rameen_wishes_liked", JSON.stringify(newLikedMap));
    } catch (e) {}

    const updated = wishes.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          likes: isLiked ? item.likes - 1 : item.likes + 1,
        };
      }
      return item;
    });

    saveWishesToStorage(updated);
  };

  // Reset to default sample wishes
  const handleResetWishes = () => {
    if (confirm("Reset the wishes wall to sample messages?")) {
      saveWishesToStorage(INITIAL_WISHES);
    }
  };

  // Clear all wishes
  const handleClearAll = () => {
    if (confirm("Clear all wishes to test empty state?")) {
      saveWishesToStorage([]);
    }
  };

  // Filtered & Searched Wishes
  const filteredWishes = wishes.filter((w) => {
    const matchesFilter = activeFilter === "All" || w.tag === activeFilter;
    const matchesSearch =
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.wish.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="wishes" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8D5C4]/60 border border-[#C9A27E]/30 text-[#B87C5D] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Wall of Love</span>
          </div>
          <h2 className="font-serif italic text-3xl sm:text-5xl text-[#4A342A] mb-3">
            The Birthday Wishes Wall
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#4A342A]/80 max-w-xl mx-auto">
            Leave your warmest birthday wish for Rameen Afzal. Your love and prayers will stay here forever!
          </p>
        </div>

        {/* Submit Wish Form Card */}
        <div className="max-w-2xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-[#C9A27E]/40 shadow-2xl mb-16 relative overflow-hidden glow-card-gold">
          <div className="absolute top-0 right-0 w-36 h-36 bg-[#E8D5C4]/35 rounded-bl-full pointer-events-none" />

          <h3 className="font-serif italic text-2xl sm:text-3xl text-[#4A342A] mb-6 flex items-center gap-2.5">
            <MessageCircle className="w-6 h-6 text-[#B87C5D]" />
            Write a Birthday Wish
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input Name */}
            <div>
              <label htmlFor="wish-name-input" className="block text-xs uppercase tracking-wider text-[#4A342A]/80 font-bold mb-2">
                Your Name / Relationship
              </label>
              <div className="relative">
                <input
                  id="wish-name-input"
                  type="text"
                  placeholder="e.g. Ayesha, Best Friend..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                  className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#FFFDF9] border border-[#C9A27E]/40 text-[#4A342A] placeholder-[#4A342A]/40 focus:outline-none focus:ring-2 focus:ring-[#B87C5D]/50 focus:border-[#B87C5D] transition-all text-sm font-medium"
                />
                <User className="w-4 h-4 text-[#C9A27E] absolute left-4 top-4" />
              </div>
            </div>

            {/* Select Tag */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#4A342A]/80 font-bold mb-2">
                Select Vibe / Tag
              </label>
              <div className="flex flex-wrap gap-2">
                {TAG_OPTIONS.map((tagOption) => (
                  <button
                    key={tagOption}
                    type="button"
                    onClick={() => setSelectedTag(tagOption)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      selectedTag === tagOption
                        ? "bg-[#B87C5D] text-[#FFFDF9] shadow-md scale-105"
                        : "bg-[#E8D5C4]/40 text-[#4A342A] hover:bg-[#E8D5C4]"
                    }`}
                  >
                    {tagOption}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Templates */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#4A342A]/60 font-semibold mb-1.5">
                Quick Template Suggestion:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_WISH_TEMPLATES.map((tmpl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setWish(tmpl)}
                    className="text-[11px] px-2.5 py-1 rounded-xl bg-[#FFFDF9] border border-[#C9A27E]/30 text-[#4A342A]/70 hover:text-[#B87C5D] hover:border-[#B87C5D] transition-all"
                  >
                    "{tmpl.slice(0, 32)}..."
                  </button>
                ))}
              </div>
            </div>

            {/* Input Wish Message */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="wish-message-textarea" className="block text-xs uppercase tracking-wider text-[#4A342A]/80 font-bold">
                  Your Birthday Message
                </label>
                <span className="text-xs text-[#4A342A]/50">
                  {wish.length}/300
                </span>
              </div>
              <textarea
                id="wish-message-textarea"
                rows={4}
                placeholder="Write your heartfelt note for Rameen Afzal's August 23rd birthday..."
                value={wish}
                onChange={(e) => setWish(e.target.value)}
                maxLength={300}
                className="w-full px-4 py-3 rounded-2xl bg-[#FFFDF9] border border-[#C9A27E]/40 text-[#4A342A] placeholder-[#4A342A]/40 focus:outline-none focus:ring-2 focus:ring-[#B87C5D]/50 focus:border-[#B87C5D] transition-all text-sm leading-relaxed font-medium"
              />
            </div>

            {/* Validation Error */}
            {errorMsg && (
              <p className="text-xs text-[#B87C5D] bg-[#B87C5D]/10 px-3 py-2 rounded-xl border border-[#B87C5D]/20">
                {errorMsg}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl bg-[#B87C5D] text-[#FFFDF9] font-medium text-base shadow-lg hover:bg-[#A36B4E] hover:shadow-xl transition-all duration-300 transform active:scale-[0.99] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Post Wish on Rameen's Wall 🤍</span>
            </button>
          </form>
        </div>

        {/* Filter and Search Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-[#4A342A]/60 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {["All", ...TAG_OPTIONS].map((t) => (
              <button
                key={t}
                onClick={() => setActiveFilter(t)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === t
                    ? "bg-[#4A342A] text-[#FFFDF9]"
                    : "bg-[#FFFDF9]/90 text-[#4A342A]/70 hover:bg-[#E8D5C4]/50 border border-[#C9A27E]/30"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search box & reset control */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <input
                type="text"
                placeholder="Search wishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-48 px-3 py-1.5 pl-8 rounded-full bg-[#FFFDF9]/90 border border-[#C9A27E]/30 text-xs text-[#4A342A] focus:outline-none focus:ring-1 focus:ring-[#B87C5D]"
              />
              <Search className="w-3.5 h-3.5 text-[#C9A27E] absolute left-2.5 top-2" />
            </div>

            <button
              onClick={handleResetWishes}
              title="Reset sample wishes"
              className="text-xs text-[#4A342A]/60 hover:text-[#B87C5D] underline px-2 py-1 font-medium"
            >
              Reset Samples
            </button>
            <button
              onClick={handleClearAll}
              title="Clear all (test empty state)"
              className="text-xs text-[#4A342A]/40 hover:text-red-500 p-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Wishes Grid Wall */}
        {filteredWishes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredWishes.map((item) => {
              const isLiked = likedMap[item.id];
              return (
                <div
                  key={item.id}
                  className="glass-card-interactive rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden group border border-[#C9A27E]/30 shadow-md"
                >
                  <div className="absolute top-4 right-4 font-handwritten text-lg text-[#B87C5D] opacity-80">
                    ✨ Wish Card
                  </div>

                  <div>
                    {/* Tag badge & Date */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 rounded-full bg-[#E8D5C4]/60 text-[#4A342A] text-xs font-semibold border border-[#C9A27E]/30">
                        {item.tag}
                      </span>
                      <span className="text-[11px] text-[#4A342A]/60 font-semibold">
                        {item.timestamp}
                      </span>
                    </div>

                    {/* Wish Message */}
                    <p className="text-[#4A342A]/90 text-base leading-relaxed font-sans mb-6 italic">
                      "{item.wish}"
                    </p>
                  </div>

                  {/* Card Bottom: Author Name & Heart Reaction */}
                  <div className="pt-4 border-t border-[#E8D5C4]/40 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif italic font-semibold text-lg sm:text-xl text-[#4A342A]">
                        {item.name}
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-[#B87C5D] font-bold">
                        Wisher for Rameen
                      </p>
                    </div>

                    {/* Like Reaction Button */}
                    <button
                      onClick={() => handleLike(item.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        isLiked
                          ? "bg-[#B87C5D] text-[#FFFDF9] shadow-sm scale-105"
                          : "bg-[#FFFDF9] text-[#4A342A]/70 border border-[#C9A27E]/40 hover:border-[#B87C5D]"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isLiked ? "fill-current" : "text-[#B87C5D]"
                        }`}
                      />
                      <span>{item.likes}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-6 glass-card rounded-3xl border border-dashed border-[#C9A27E]/40 max-w-md mx-auto">
            <div className="w-14 h-14 rounded-full bg-[#E8D5C4]/50 flex items-center justify-center text-[#B87C5D] mx-auto mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif italic text-2xl text-[#4A342A] mb-2">
              Be the first to leave a wish 🤍
            </h3>
            <p className="text-sm text-[#4A342A]/70 mb-6">
              There are no wishes matching your filter yet. Fill in the form above to share your birthday love with Rameen Afzal for August 23rd!
            </p>
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearchQuery("");
                saveWishesToStorage(INITIAL_WISHES);
              }}
              className="px-6 py-2.5 rounded-full bg-[#B87C5D] text-[#FFFDF9] text-xs font-semibold shadow-md hover:bg-[#A36B4E] transition-all"
            >
              Restore Sample Wishes 🌸
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

