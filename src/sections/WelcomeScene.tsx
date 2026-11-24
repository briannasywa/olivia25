"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Smile } from "lucide-react";
import { BirthdayContent } from "@/data/birthday-content";
import { sfx } from "@/utils/sfx";

interface WelcomeSceneProps {
  content: BirthdayContent;
  onStart: () => void;
}

export const WelcomeScene: React.FC<WelcomeSceneProps> = ({ content, onStart }) => {
  const [poked, setPoked] = useState(false);

  const handlePoke = () => {
    sfx.playCoin();
    setPoked(true);
    setTimeout(() => setPoked(false), 600);
  };

  const handleStart = () => {
    sfx.playClick();
    onStart();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 max-w-xl mx-auto">
      {/* Codédex Quest Header Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-codedex-yellow border-2 border-brandBlack rounded shadow-neoSm text-xs font-mono font-black text-brandBlack uppercase">
        <Sparkles className="w-4 h-4 text-brandBlack fill-brandBlack animate-spin" />
        <span>{content.intro.badge}</span>
      </div>

      {/* Main Title */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-brandBlack tracking-tight font-mono uppercase">
          {content.intro.title}
        </h1>
        <p className="text-sm sm:text-base text-gray-700 font-sans max-w-md mx-auto leading-relaxed">
          {content.intro.subtitle}
        </p>
      </div>

      {/* Hero Character Card */}
      <div className="w-full bg-white border-4 border-brandBlack rounded-md p-4 sm:p-5 shadow-neoLg neo-card-hover text-left space-y-4">
        {/* Card Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-brandBlack pb-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 border border-brandBlack inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-brandBlack inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-400 border border-brandBlack inline-block" />
            <span className="font-mono text-xs font-bold text-gray-600 ml-1">
              olivia_and_cat.png
            </span>
          </div>
          <span className="font-mono text-xs font-black bg-codedex-pink px-2 py-0.5 border border-brandBlack rounded-xs">
            CAT COMPANION 🐾
          </span>
        </div>

        {/* Pixel Art Illustration Showcase */}
        <div className="relative group mx-auto">
          <div
            onClick={handlePoke}
            className={`relative aspect-[3/4] w-full max-w-xs sm:max-w-sm mx-auto overflow-hidden rounded border-3 border-brandBlack shadow-neoSm cursor-pointer transition-transform ${
              poked ? "animate-shake scale-105" : "hover:scale-[1.02]"
            }`}
            title="Klik karakternya untuk interaksi poke!"
          >
            <Image
              src="/illustrations/olivia-with-cat.jpg"
              alt="Pixel art Olivia berhijab sedang menggendong kucing"
              fill
              sizes="(max-width: 640px) 300px, 380px"
              priority
              className="object-cover"
            />
            {/* Poke tooltip prompt */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 px-3 py-1 rounded border-2 border-brandBlack font-mono text-[11px] font-bold text-brandBlack shadow-neoSm pointer-events-none">
              👆 {poked ? "Cute! +10 Mood" : "Klik untuk poke!"}
            </div>
          </div>
        </div>

        {/* Character RPG Stats Grid */}
        <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
          <div className="bg-codedex-yellowLight border-2 border-brandBlack p-2 rounded">
            <div className="text-[10px] text-gray-600 font-bold uppercase">LEVEL</div>
            <div className="font-black text-brandBlack truncate">{content.intro.stats.level}</div>
          </div>
          <div className="bg-codedex-cyanLight border-2 border-brandBlack p-2 rounded">
            <div className="text-[10px] text-gray-600 font-bold uppercase">CLASS</div>
            <div className="font-black text-brandBlack truncate">{content.intro.stats.role}</div>
          </div>
          <div className="bg-codedex-greenLight border-2 border-brandBlack p-2 rounded">
            <div className="text-[10px] text-gray-600 font-bold uppercase">PASSIVE SKILL</div>
            <div className="font-bold text-brandBlack text-[11px] leading-tight truncate">{content.intro.stats.passive}</div>
          </div>
          <div className="bg-codedex-pinkLight border-2 border-brandBlack p-2 rounded">
            <div className="text-[10px] text-gray-600 font-bold uppercase">CURRENT MOOD</div>
            <div className="font-black text-brandBlack truncate">{content.intro.stats.mood}</div>
          </div>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="pt-2">
        <button
          onClick={handleStart}
          className="flex items-center gap-3 px-8 py-4 bg-codedex-green hover:bg-codedex-greenDark hover:text-white text-brandBlack font-mono text-base sm:text-lg font-black neo-btn uppercase shadow-neoLg"
        >
          <span>{content.intro.cta}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
