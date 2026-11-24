"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, FastForward, MessageSquareQuote } from "lucide-react";
import { BirthdayContent } from "@/data/birthday-content";
import { TypewriterText } from "@/components/TypewriterText";
import { sfx } from "@/utils/sfx";

interface LetterSceneProps {
  content: BirthdayContent;
  onNext: () => void;
}

export const LetterScene: React.FC<LetterSceneProps> = ({ content, onNext }) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  const handleNext = () => {
    sfx.playClick();
    onNext();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 max-w-xl mx-auto">
      {/* Stage Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-codedex-purple border-2 border-brandBlack rounded shadow-neoSm text-xs font-mono font-black text-brandBlack uppercase">
        <Sparkles className="w-4 h-4 text-brandBlack fill-brandBlack" />
        <span>{content.letter.tag}</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brandBlack font-mono uppercase">
        {content.letter.title}
      </h2>

      {/* RPG Dialogue Container (Pokemon / Stardew Valley inspired) */}
      <div className="w-full bg-white border-4 border-brandBlack rounded-md p-5 sm:p-6 shadow-neoLg text-left relative space-y-4">
        {/* Dialogue Speaker Header */}
        <div className="flex items-center justify-between border-b-3 border-brandBlack pb-3">
          <div className="flex items-center gap-3">
            {/* Pixel Avatar in Box */}
            <div className="w-12 h-12 rounded border-2 border-brandBlack overflow-hidden relative bg-codedex-yellow shrink-0 shadow-neoSm">
              <Image
                src="/illustrations/hero-couple.jpg"
                alt="Avatar"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-mono text-xs font-black bg-codedex-yellow px-2 py-0.5 border border-brandBlack rounded-xs">
                SPEAKER: BRIAN 💬
              </span>
              <p className="font-mono text-[11px] text-gray-500 font-bold mt-0.5">
                Ceremony Club • Special Quest
              </p>
            </div>
          </div>
          <span className="font-mono text-xs font-bold text-gray-400">
            TXT_LOG.03
          </span>
        </div>

        {/* Greeting */}
        <p className="font-mono text-base sm:text-lg font-black text-brandBlack border-b-2 border-dashed border-gray-300 pb-2">
          {content.letter.greeting}
        </p>

        {/* Typewriter Text with Natural Tone */}
        <TypewriterText
          paragraphs={content.letter.paragraphs}
          typingSpeed={18}
          onComplete={() => setIsTypingDone(true)}
          className="text-gray-800"
        />

        {/* Signature */}
        <div className="mt-4 pt-3 border-t-2 border-brandBlack flex items-center justify-between">
          <p className="text-xs sm:text-sm font-mono text-gray-600 font-bold italic">
            {content.letter.signature}
          </p>
          <span className="font-mono text-sm font-black text-brandBlack bg-codedex-pink px-2.5 py-0.5 border-2 border-brandBlack rounded shadow-neoSm">
            Brian 💖
          </span>
        </div>
      </div>

      {/* Continue Action Button */}
      <div className="pt-2">
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-codedex-green hover:bg-codedex-greenDark hover:text-white text-brandBlack font-mono font-black text-sm neo-btn uppercase"
        >
          <span>BUKA BONUS EASTER EGG ▶</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
