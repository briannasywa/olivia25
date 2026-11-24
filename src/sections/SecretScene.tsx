"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Lock, Unlock, Key, Heart } from "lucide-react";
import { BirthdayContent } from "@/data/birthday-content";
import { sfx } from "@/utils/sfx";
import { triggerBirthdayConfetti } from "@/components/Confetti";

interface SecretSceneProps {
  content: BirthdayContent;
  onNext: () => void;
}

export const SecretScene: React.FC<SecretSceneProps> = ({ content, onNext }) => {
  const [keysActive, setKeysActive] = useState<number[]>([]);
  const isUnlocked = keysActive.length >= 3;

  const handleKeyClick = (keyId: number) => {
    if (isUnlocked) return;
    if (!keysActive.includes(keyId)) {
      sfx.playCoin();
      const updated = [...keysActive, keyId];
      setKeysActive(updated);
      if (updated.length >= 3) {
        setTimeout(() => {
          sfx.playChestOpen();
          triggerBirthdayConfetti();
        }, 300);
      }
    }
  };

  const handleNext = () => {
    sfx.playClick();
    onNext();
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6 max-w-lg mx-auto">
      {/* Stage Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-codedex-orange border-2 border-brandBlack rounded shadow-neoSm text-xs font-mono font-black text-brandBlack uppercase">
        <Sparkles className="w-4 h-4 text-brandBlack fill-brandBlack" />
        <span>{content.secret.tag}</span>
      </div>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brandBlack font-mono uppercase">
        {content.secret.title}
      </h2>

      {/* Secret Vault Card */}
      <div className="w-full bg-white border-4 border-brandBlack rounded-md p-5 sm:p-7 shadow-neoLg text-center space-y-5">
        <div className="flex justify-center">
          <div
            className={`w-16 h-16 rounded-full border-3 border-brandBlack flex items-center justify-center transition-transform ${
              isUnlocked
                ? "bg-codedex-yellow rotate-12 scale-110 shadow-neo"
                : "bg-gray-100 shadow-neoSm"
            }`}
          >
            {isUnlocked ? (
              <Unlock className="w-8 h-8 text-brandBlack" />
            ) : (
              <Lock className="w-8 h-8 text-brandBlack" />
            )}
          </div>
        </div>

        {!isUnlocked ? (
          <div className="space-y-4">
            <p className="text-sm font-mono text-gray-700">
              {content.secret.prompt}
            </p>

            {/* 3 Interactive Key Buttons */}
            <div className="flex justify-center gap-3 pt-2">
              {[1, 2, 3].map((keyId) => {
                const isActive = keysActive.includes(keyId);
                return (
                  <button
                    key={keyId}
                    onClick={() => handleKeyClick(keyId)}
                    className={`p-3 rounded border-3 border-brandBlack font-mono text-sm font-black flex items-center gap-1.5 transition-all neo-btn-sm ${
                      isActive
                        ? "bg-codedex-pink text-brandBlack translate-y-1 shadow-none"
                        : "bg-white hover:bg-codedex-yellowLight text-gray-600"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isActive ? "fill-brandBlack text-brandBlack" : ""}`} />
                    <span>KEY {keyId}</span>
                  </button>
                );
              })}
            </div>
            <div className="font-mono text-xs text-gray-500">
              Kunci aktif: {keysActive.length} / 3
            </div>
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in text-left">
            <div className="flex items-center gap-2 bg-codedex-yellowLight border-2 border-brandBlack px-3 py-1.5 rounded">
              <Sparkles className="w-4 h-4 text-brandBlack" />
              <span className="font-mono text-xs font-black uppercase text-brandBlack">
                {content.secret.unlockedTitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-gray-800 font-sans leading-relaxed bg-canvasDark p-4 rounded border-2 border-brandBlack shadow-neoSm">
              {content.secret.message}
            </p>
          </div>
        )}
      </div>

      {/* Continue Action */}
      <div className="pt-2">
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 bg-codedex-green hover:bg-codedex-greenDark hover:text-white text-brandBlack font-mono font-black text-sm neo-btn uppercase"
        >
          <span>FINAL STAGE: TIUP LILIN ▶</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
