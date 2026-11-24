"use client";

import React, { useEffect, useState, useRef } from "react";
import { FastForward } from "lucide-react";
import { sfx } from "@/utils/sfx";

interface TypewriterTextProps {
  paragraphs: string[];
  typingSpeed?: number;
  onComplete?: () => void;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  paragraphs,
  typingSpeed = 20,
  onComplete,
  className = "",
}) => {
  const fullText = paragraphs.join("\n\n");
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isSkipped) {
      setDisplayedLength(fullText.length);
      onComplete?.();
      return;
    }

    if (displayedLength < fullText.length) {
      timerRef.current = setTimeout(() => {
        setDisplayedLength((prev) => prev + 1);
        // Soft audio blip every 4 characters
        if (displayedLength % 5 === 0) {
          sfx.playClick();
        }
      }, typingSpeed);
    } else {
      onComplete?.();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayedLength, fullText, isSkipped, typingSpeed, onComplete]);

  const handleSkip = () => {
    sfx.playCoin();
    setIsSkipped(true);
    setDisplayedLength(fullText.length);
    onComplete?.();
  };

  const renderedText = fullText.slice(0, displayedLength);
  const renderedParagraphs = renderedText.split("\n\n");
  const isDone = displayedLength >= fullText.length;

  return (
    <div className={`relative ${className}`}>
      <div className="space-y-3 text-left leading-relaxed text-sm sm:text-base font-sans text-gray-800">
        {renderedParagraphs.map((para, i) => (
          <p key={i} className="min-h-[1.4em]">
            {para}
            {i === renderedParagraphs.length - 1 && !isDone && (
              <span className="inline-block w-2.5 h-4 bg-brandBlack ml-1 animate-pulse align-middle" />
            )}
          </p>
        ))}
      </div>

      {!isDone && (
        <div className="mt-4 pt-2 flex justify-end">
          <button
            onClick={handleSkip}
            className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-gray-100 text-brandBlack font-mono text-xs font-bold border-2 border-brandBlack rounded-xs shadow-neoSm neo-btn-sm"
            aria-label="Tampilkan seluruh teks dialog sekarang"
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>TAMPILKAN SEMUA TEKS</span>
          </button>
        </div>
      )}
    </div>
  );
};
