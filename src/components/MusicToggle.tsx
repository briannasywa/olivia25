"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { sfx } from "@/utils/sfx";

export const MusicToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sfx.setMuted(nextMuted);
    if (!nextMuted) {
      sfx.playCoin();
    }
  };

  return (
    <button
      onClick={toggleSound}
      className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all neo-btn-sm ${
        !isMuted
          ? "bg-codedex-yellow text-brandBlack border-brandBlack"
          : "bg-white text-gray-500 border-brandBlack opacity-70"
      }`}
      aria-label={!isMuted ? "Matikan Efek Suara" : "Aktifkan Efek Suara"}
      title={!isMuted ? "Suara 8-Bit Aktif" : "Suara Dibisukan"}
    >
      {!isMuted ? (
        <>
          <Volume2 className="w-4 h-4 text-brandBlack animate-bounce" />
          <span>SFX: ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-gray-500" />
          <span>SFX: MUTE</span>
        </>
      )}
    </button>
  );
};
