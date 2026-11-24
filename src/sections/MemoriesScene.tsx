"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar, Heart } from "lucide-react";
import { BirthdayContent } from "@/data/birthday-content";
import { sfx } from "@/utils/sfx";

interface MemoriesSceneProps {
  content: BirthdayContent;
  onNext: () => void;
}

export const MemoriesScene: React.FC<MemoriesSceneProps> = ({ content, onNext }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stampedList, setStampedList] = useState<string[]>([]);
  const items = content.memories.items;
  const currentMemory = items[activeIndex];

  const handlePrev = () => {
    sfx.playClick();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    sfx.playClick();
    setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const handleAddSticker = (sticker: string) => {
    sfx.playCoin();
    if (!stampedList.includes(sticker)) {
      setStampedList((prev) => [...prev, sticker]);
    } else {
      setStampedList((prev) => prev.filter((s) => s !== sticker));
    }
  };

  const handleContinue = () => {
    sfx.playClick();
    onNext();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 max-w-lg mx-auto">
      {/* Stage Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-codedex-cyan border-2 border-brandBlack rounded shadow-neoSm text-xs font-mono font-black text-brandBlack uppercase">
        <Sparkles className="w-4 h-4 text-brandBlack fill-brandBlack" />
        <span>{content.memories.tag}</span>
      </div>

      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-brandBlack font-mono uppercase">
          {content.memories.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 font-sans">
          {content.memories.subtitle}
        </p>
      </div>

      {/* Polaroid Desk Photo Card */}
      <div className="w-full bg-white border-4 border-brandBlack rounded-md p-4 sm:p-5 shadow-neoLg text-left space-y-4">
        {/* Photo Container */}
        <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded border-3 border-brandBlack bg-canvasDark">
          <Image
            src={currentMemory.image}
            alt={currentMemory.alt}
            fill
            sizes="(max-width: 640px) 90vw, 420px"
            priority={activeIndex === 0}
            className="object-cover"
          />

          {/* Stamped Stickers on Photo */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
            {stampedList.map((stk) => (
              <span
                key={stk}
                className="bg-codedex-yellow text-brandBlack text-[11px] font-mono font-black px-2 py-0.5 border-2 border-brandBlack rounded-xs shadow-neoSm animate-bounce"
              >
                {stk}
              </span>
            ))}
          </div>
        </div>

        {/* Caption & Location metadata */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-xs font-mono font-black">
            <span className="flex items-center gap-1 text-gray-800 bg-gray-100 px-2 py-0.5 border border-brandBlack rounded">
              <MapPin className="w-3.5 h-3.5 text-brandBlack" />
              <span>{currentMemory.location}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-600">
              <Calendar className="w-3.5 h-3.5" />
              <span>{currentMemory.dateLabel}</span>
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-800 font-sans leading-relaxed">
            {currentMemory.caption}
          </p>
        </div>

        {/* Interactive Sticker Palette */}
        <div className="pt-2 border-t-2 border-brandBlack">
          <div className="text-[11px] font-mono font-bold text-gray-600 uppercase mb-2">
            Klik stiker untuk tempel reaksi:
          </div>
          <div className="flex flex-wrap gap-2">
            {currentMemory.stickers.map((stk) => {
              const isSelected = stampedList.includes(stk);
              return (
                <button
                  key={stk}
                  onClick={() => handleAddSticker(stk)}
                  className={`px-2.5 py-1 text-xs font-mono font-bold rounded neo-btn-sm ${
                    isSelected
                      ? "bg-codedex-green text-brandBlack border-brandBlack shadow-[2px_2px_0px_#121212]"
                      : "bg-white text-gray-700 hover:bg-codedex-yellowLight border-brandBlack"
                  }`}
                >
                  {stk}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Carousel Navigation */}
      {items.length > 1 && (
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-white text-brandBlack neo-btn-sm"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-mono text-xs font-bold">
            {activeIndex + 1} of {items.length}
          </span>
          <button
            onClick={handleNext}
            className="p-2 bg-white text-brandBlack neo-btn-sm"
            aria-label="Foto berikutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Continue Action */}
      <div className="pt-2">
        <button
          onClick={handleContinue}
          className="flex items-center gap-2 px-6 py-3 bg-codedex-green hover:bg-codedex-greenDark hover:text-white text-brandBlack font-mono font-black text-sm neo-btn uppercase"
        >
          <span>BUKA SURAT / DIALOGUE ▶</span>
        </button>
      </div>
    </div>
  );
};
