"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Terminal, Heart } from "lucide-react";
import { StoryScene } from "@/data/birthday-content";
import { MusicToggle } from "./MusicToggle";
import { sfx } from "@/utils/sfx";

interface SceneFrameProps {
  currentScene: StoryScene;
  scenes: StoryScene[];
  onNavigate: (scene: StoryScene) => void;
  onNext?: () => void;
  onPrev?: () => void;
  children: React.ReactNode;
}

const sceneTitles: Record<StoryScene, string> = {
  welcome: "00 // INTRO",
  gift: "01 // LOOT BOX",
  memories: "02 // ARCHIVE",
  letter: "03 // DIALOGUE",
  secret: "04 // VAULT",
  cake: "05 // BOSS FIGHT",
};

export const SceneFrame: React.FC<SceneFrameProps> = ({
  currentScene,
  scenes,
  onNavigate,
  onNext,
  onPrev,
  children,
}) => {
  const currentIndex = scenes.indexOf(currentScene);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === scenes.length - 1;

  const handleNextClick = () => {
    sfx.playClick();
    onNext?.();
  };

  const handlePrevClick = () => {
    sfx.playClick();
    onPrev?.();
  };

  const handleNavClick = (scene: StoryScene) => {
    sfx.playClick();
    onNavigate(scene);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-codedex-yellow selection:text-brandBlack">
      {/* Top Codédex Header Bar */}
      <header className="sticky top-0 z-40 w-full bg-white border-b-4 border-brandBlack px-4 py-2.5 sm:py-3 shadow-neoSm">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-codedex-pink border-2 border-brandBlack flex items-center justify-center shadow-neoSm">
              <Heart className="w-4 h-4 text-brandBlack fill-brandBlack" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs sm:text-sm font-black tracking-wider text-brandBlack uppercase">
                  OLIVIA.IO
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-codedex-green text-brandBlack text-[10px] font-mono font-bold border border-brandBlack rounded-xs">
                  QUEST MODE
                </span>
              </div>
            </div>
          </div>

          {/* XP / Scene Progress Steps */}
          <div className="hidden md:flex items-center gap-1.5 bg-canvasDark px-3 py-1.5 rounded border-2 border-brandBlack">
            <Terminal className="w-3.5 h-3.5 text-brandBlack" />
            <span className="font-mono text-xs font-bold text-brandBlack mr-1">
              PROGRESS:
            </span>
            <div className="flex items-center gap-1">
              {scenes.map((scene, idx) => {
                const isActive = scene === currentScene;
                const isCompleted = idx < currentIndex;
                return (
                  <button
                    key={scene}
                    onClick={() => handleNavClick(scene)}
                    className={`h-4 font-mono text-[10px] px-2 font-bold uppercase transition-all flex items-center justify-center border border-brandBlack ${
                      isActive
                        ? "bg-codedex-yellow text-brandBlack shadow-[1px_1px_0px_#121212] -translate-y-0.5"
                        : isCompleted
                        ? "bg-codedex-greenLight text-brandBlack hover:bg-codedex-green"
                        : "bg-white text-gray-400 hover:text-brandBlack hover:bg-gray-100"
                    }`}
                  >
                    {idx}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sound / Controls */}
          <div className="flex items-center gap-2">
            <MusicToggle />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4 py-6 sm:py-10 text-center">
        {children}
      </main>

      {/* Bottom Codédex Navigation Controller */}
      <footer className="sticky bottom-0 z-30 w-full bg-white border-t-4 border-brandBlack px-4 py-3 shadow-[0_-4px_0_0_#121212]">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <div>
            {!isFirst && onPrev ? (
              <button
                onClick={handlePrevClick}
                className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-100 text-brandBlack font-mono text-xs sm:text-sm neo-btn uppercase"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>PREV QUEST</span>
              </button>
            ) : (
              <div className="w-24" />
            )}
          </div>

          {/* Current Quest Badge */}
          <div className="font-mono text-xs sm:text-sm font-black px-3 py-1.5 bg-codedex-yellow border-2 border-brandBlack rounded shadow-neoSm">
            STAGE: {sceneTitles[currentScene]} ({currentIndex + 1}/{scenes.length})
          </div>

          <div>
            {!isLast && onNext ? (
              <button
                onClick={handleNextClick}
                className="flex items-center gap-1.5 px-4 py-2 bg-codedex-green hover:bg-codedex-greenDark hover:text-white text-brandBlack font-mono text-xs sm:text-sm neo-btn uppercase"
              >
                <span>NEXT QUEST</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="w-24" />
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};
