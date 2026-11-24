"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StoryScene, birthdayData } from "@/data/birthday-content";
import { SceneFrame } from "./SceneFrame";
import { WelcomeScene } from "@/sections/WelcomeScene";
import { GiftScene } from "@/sections/GiftScene";
import { MemoriesScene } from "@/sections/MemoriesScene";
import { LetterScene } from "@/sections/LetterScene";
import { SecretScene } from "@/sections/SecretScene";
import { CakeScene } from "@/sections/CakeScene";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const scenes: StoryScene[] = ["welcome", "gift", "memories", "letter", "secret", "cake"];

export const StoryExperience: React.FC = () => {
  const [currentScene, setCurrentScene] = useState<StoryScene>("welcome");
  const prefersReducedMotion = useReducedMotion();

  const currentIndex = scenes.indexOf(currentScene);

  const handleNext = useCallback(() => {
    if (currentIndex < scenes.length - 1) {
      setCurrentScene(scenes[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentScene(scenes[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentIndex]);

  const handleNavigate = (scene: StoryScene) => {
    setCurrentScene(scene);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReplay = () => {
    setCurrentScene("welcome");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Keyboard navigation support (ArrowRight, ArrowLeft)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid interfering if focus is in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Motion variants
  const sceneVariants = {
    initial: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 12,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.35,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : -12,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.2,
      },
    },
  };

  return (
    <SceneFrame
      currentScene={currentScene}
      scenes={scenes}
      onNavigate={handleNavigate}
      onNext={currentIndex < scenes.length - 1 ? handleNext : undefined}
      onPrev={currentIndex > 0 ? handlePrev : undefined}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScene}
          variants={sceneVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full flex justify-center"
        >
          {currentScene === "welcome" && (
            <WelcomeScene content={birthdayData} onStart={handleNext} />
          )}
          {currentScene === "gift" && (
            <GiftScene content={birthdayData} onNext={handleNext} />
          )}
          {currentScene === "memories" && (
            <MemoriesScene content={birthdayData} onNext={handleNext} />
          )}
          {currentScene === "letter" && (
            <LetterScene content={birthdayData} onNext={handleNext} />
          )}
          {currentScene === "secret" && (
            <SecretScene content={birthdayData} onNext={handleNext} />
          )}
          {currentScene === "cake" && (
            <CakeScene content={birthdayData} onReplay={handleReplay} />
          )}
        </motion.div>
      </AnimatePresence>
    </SceneFrame>
  );
};
