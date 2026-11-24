"use client";

import React, { useState } from "react";
import { Sparkles, RotateCcw, Flame, Trophy } from "lucide-react";
import { BirthdayContent } from "@/data/birthday-content";
import { sfx } from "@/utils/sfx";
import { triggerBirthdayConfetti } from "@/components/Confetti";

interface CakeSceneProps {
  content: BirthdayContent;
  onReplay: () => void;
}

export const CakeScene: React.FC<CakeSceneProps> = ({ content, onReplay }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlowCandles = () => {
    if (candlesBlown) return;
    setCandlesBlown(true);
    sfx.playPuff();
    setTimeout(() => {
      sfx.playLevelUp();
      triggerBirthdayConfetti();
    }, 250);
  };

  const handleReplayClick = () => {
    sfx.playClick();
    onReplay();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 max-w-lg mx-auto">
      {/* Stage Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-codedex-yellow border-2 border-brandBlack rounded shadow-neoSm text-xs font-mono font-black text-brandBlack uppercase">
        <Sparkles className="w-4 h-4 text-brandBlack fill-brandBlack" />
        <span>{content.cake.tag}</span>
      </div>

      {/* Title */}
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brandBlack font-mono uppercase">
          {candlesBlown ? content.cake.wishTitle : content.cake.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 font-sans">
          {content.cake.subtitle}
        </p>
      </div>

      {/* Boss Health Bar / Candle HP */}
      <div className="w-full bg-white border-3 border-brandBlack rounded p-2 shadow-neoSm font-mono text-xs">
        <div className="flex justify-between font-black mb-1">
          <span>CANDLE FLAME HP</span>
          <span>{candlesBlown ? "0 / 100 [EXTINGUISHED]" : "100 / 100 [BURNING]"}</span>
        </div>
        <div className="w-full h-4 bg-gray-200 border-2 border-brandBlack rounded-xs overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              candlesBlown ? "w-0 bg-gray-400" : "w-full bg-red-500 animate-pulse"
            }`}
          />
        </div>
      </div>

      {/* Interactive Birthday Cake */}
      <div className="py-2 flex flex-col items-center">
        <button
          onClick={handleBlowCandles}
          disabled={candlesBlown}
          className={`p-6 bg-white border-4 border-brandBlack rounded-lg shadow-neoLg transition-all cursor-pointer ${
            candlesBlown ? "cursor-default" : "hover:bg-codedex-pinkLight neo-card-hover"
          }`}
          aria-label={candlesBlown ? "Lilin kue telah padam" : "Klik untuk meniup lilin kue"}
        >
          {/* Candle Flames */}
          <div className="flex justify-center items-end gap-6 mb-1">
            {[1, 2, 3].map((c) => (
              <div key={c} className="flex flex-col items-center">
                {!candlesBlown ? (
                  <div className="w-4 h-6 bg-codedex-yellow border-2 border-brandBlack rounded-full animate-bounce shadow-[0_0_8px_#FACC15]" />
                ) : (
                  <div className="w-1.5 h-3 bg-gray-400 rounded-full animate-float opacity-60" />
                )}
                <div className="w-3 h-8 bg-codedex-pink border-2 border-brandBlack rounded-xs" />
              </div>
            ))}
          </div>

          {/* Tiered Cake Structure */}
          <div className="flex flex-col items-center">
            {/* Top Tier */}
            <div className="w-32 h-10 bg-codedex-cream border-3 border-brandBlack rounded-t flex items-center justify-around px-2 shadow-neoSm">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-brandBlack" />
              <span className="w-2.5 h-2.5 rounded-full bg-codedex-yellow border border-brandBlack" />
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 border border-brandBlack" />
            </div>

            {/* Frosting Dripping */}
            <div className="w-36 h-3 bg-codedex-pink border-x-3 border-brandBlack flex justify-around">
              <div className="w-3 h-3 bg-codedex-pink border-b-2 border-brandBlack rounded-b" />
              <div className="w-3 h-4 bg-codedex-pink border-b-2 border-brandBlack rounded-b" />
              <div className="w-3 h-3 bg-codedex-pink border-b-2 border-brandBlack rounded-b" />
              <div className="w-3 h-4 bg-codedex-pink border-b-2 border-brandBlack rounded-b" />
            </div>

            {/* Bottom Tier */}
            <div className="w-44 h-14 bg-codedex-yellowLight border-3 border-brandBlack rounded-b flex items-center justify-around px-3 shadow-neo">
              <span className="font-mono text-xs font-black text-brandBlack">★ OLIVIA ★</span>
            </div>

            {/* Cake Plate */}
            <div className="w-52 h-4 bg-gray-200 border-3 border-brandBlack rounded-full mt-1 shadow-neoSm" />
          </div>
        </button>

        {/* Action Prompt */}
        <p className="mt-3 font-mono text-xs sm:text-sm font-black text-brandBlack animate-pulse">
          {candlesBlown ? content.cake.blownInstruction : content.cake.instruction}
        </p>
      </div>

      {/* Achievement Unlocked Modal on Blowout */}
      {candlesBlown && (
        <div className="w-full bg-white border-4 border-brandBlack rounded-md p-6 shadow-neoLg text-center space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-codedex-green text-brandBlack px-3 py-1 font-mono text-xs font-black border-2 border-brandBlack rounded shadow-neoSm">
            <Trophy className="w-4 h-4" />
            <span>{content.cake.achievement}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-brandBlack font-mono uppercase">
            {content.cake.wishTitle}
          </h3>

          <p className="text-sm sm:text-base text-gray-800 font-sans leading-relaxed">
            {content.cake.wishMessage}
          </p>

          <div className="pt-3">
            <button
              onClick={handleReplayClick}
              className="flex items-center justify-center gap-2 w-full py-3 bg-codedex-yellow hover:bg-yellow-400 text-brandBlack font-mono font-black text-sm neo-btn uppercase"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{content.cake.replayCta}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
