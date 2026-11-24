import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Heart } from "lucide-react";
import { Memory } from "@/data/birthday-content";

interface MemoryCardProps {
  memory: Memory;
  priority?: boolean;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ memory, priority = false }) => {
  return (
    <article className="bg-[#FFF8F0] text-midnight rounded-md p-3 sm:p-4 pixel-box transition-transform hover:-translate-y-1">
      {/* Photo frame */}
      <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded bg-nightBlue/10 border-2 border-[#D9CDBF]">
        <Image
          src={memory.image}
          alt={memory.alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 400px"
          priority={priority}
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Subtle decorative heart badge */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs p-1 rounded-full shadow-sm">
          <Heart className="w-3.5 h-3.5 text-rose fill-rose" />
        </div>
      </div>

      {/* Caption & Metadata */}
      <div className="mt-3 space-y-1.5 text-left">
        <div className="flex items-center justify-between text-xs text-rose-deep font-semibold">
          {memory.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-rose" />
              <span>{memory.location}</span>
            </span>
          )}
          {memory.dateLabel && (
            <span className="flex items-center gap-1 text-[#8C7A6B]">
              <Calendar className="w-3 h-3" />
              <span>{memory.dateLabel}</span>
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-[#3E3832] font-sans leading-relaxed pt-1">
          {memory.caption}
        </p>
      </div>
    </article>
  );
};
