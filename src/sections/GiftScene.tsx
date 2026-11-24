"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Gift as GiftIcon, Award } from "lucide-react";
import { BirthdayContent } from "@/data/birthday-content";
import { sfx } from "@/utils/sfx";
import { triggerBirthdayConfetti } from "@/components/Confetti";

interface GiftSceneProps {
  content: BirthdayContent;
  onNext: () => void;
}

export const GiftScene: React.FC<GiftSceneProps> = ({ content, onNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleOpenChest = () => {
    if (isOpen) return;
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);
      sfx.playChestOpen();
      triggerBirthdayConfetti();
    }, 400);
  };

  const handleNext = () => {
    sfx.playClick();
    onNext();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 max-w-lg mx-auto">
      {/* Stage Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-codedex-pink border-2 border-brandBlack rounded shadow-neoSm text-xs font-mono font-black text-brandBlack uppercase">
        <Sparkles className="w-4 h-4 text-brandBlack fill-brandBlack" />
        <span>{content.gift.tag}</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brandBlack font-mono uppercase">
        {isOpen ? content.gift.openedTitle : content.gift.title}
      </h2>

      {/* Mystery Chest Container */}
      <div className="py-2">
        <button
          onClick={handleOpenChest}
          disabled={isOpen}
          className={`relative p-8 bg-white border-4 border-brandBlack rounded-lg shadow-neoLg transition-all cursor-pointer ${
            isShaking ? "animate-shake" : ""
          } ${isOpen ? "bg-codedex-yellowLight cursor-default" : "hover:bg-codedex-pinkLight neo-card-hover"}`}
          aria-label={isOpen ? "Loot box telah dibuka" : "Buka mystery loot box"}
        >
          {!isOpen ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 bg-codedex-pink border-3 border-brandBlack rounded flex items-center justify-center shadow-neo relative animate-bounceSlow">
                {/* Ribbon cross */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-4 bg-codedex-yellow border-y-2 border-brandBlack" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-codedex-yellow border-x-2 border-brandBlack" />
                <GiftIcon className="w-10 h-10 text-brandBlack relative z-10" />
              </div>
              <span className="font-mono text-xs font-black bg-brandBlack text-white px-2.5 py-1 rounded">
                KLIK UNTUK BUKA
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-2 animate-fade-in">
              <div className="w-20 h-20 bg-codedex-yellow border-3 border-brandBlack rounded-full flex items-center justify-center shadow-neo animate-bounce">
                <Award className="w-10 h-10 text-brandBlack" />
              </div>
              <span className="font-mono text-xs font-black text-green-700 bg-green-100 px-3 py-1 border border-brandBlack rounded">
                UNBOXED! ✨
              </span>
            </div>
          )}
        </button>

        {!isOpen && (
          <p className="mt-4 text-xs sm:text-sm font-mono text-gray-600">
            {content.gift.hint}
          </p>
        )}
      </div>

      {/* Unlocked Loot Card */}
      {isOpen && (
        <div className="w-full bg-white border-3 border-brandBlack rounded-md p-5 sm:p-6 shadow-neo text-left space-y-3 animate-fade-in">
          <div className="flex items-center justify-between border-b-2 border-brandBlack pb-2">
            <span className="font-mono text-xs font-black text-brandBlack uppercase bg-codedex-yellow px-2 py-0.5 border border-brandBlack">
              LOOT REWARD
            </span>
            <span className="font-mono text-xs font-bold text-gray-500">
              {content.gift.openedSubtitle}
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-800 font-sans leading-relaxed">
            {content.gift.message}
          </p>

          <div className="pt-2 flex justify-end">
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-5 py-2.5 bg-codedex-green hover:bg-codedex-greenDark hover:text-white text-brandBlack font-mono font-black text-sm neo-btn uppercase"
            >
              <span>{content.gift.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
