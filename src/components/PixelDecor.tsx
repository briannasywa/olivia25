import React from "react";

export const PixelHeart: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 20, color = "#F4B9CC" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      className={`inline-block pixel-crisp ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 16x16 pixel heart bitmap */}
      <rect x="2" y="3" width="4" height="2" />
      <rect x="10" y="3" width="4" height="2" />
      <rect x="1" y="5" width="6" height="4" />
      <rect x="9" y="5" width="6" height="4" />
      <rect x="2" y="9" width="12" height="2" />
      <rect x="4" y="11" width="8" height="2" />
      <rect x="6" y="13" width="4" height="2" />
      <rect x="7" y="15" width="2" height="1" />
      {/* Pixel highlight */}
      <rect x="3" y="5" width="2" height="2" fill="#FFFFFF" fillOpacity="0.7" />
    </svg>
  );
};

export const PixelStar: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = "", size = 16, color = "#F6C96B" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill={color}
      className={`inline-block pixel-crisp ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="5" y="0" width="2" height="12" />
      <rect x="0" y="5" width="12" height="2" />
      <rect x="3" y="3" width="6" height="6" />
      <rect x="5" y="5" width="2" height="2" fill="#FFFFFF" />
    </svg>
  );
};

export const BackgroundPixelStars: React.FC = () => {
  // Predefined fixed positions to avoid hydration mismatch
  const stars = [
    { top: "8%", left: "12%", delay: "0s", size: 12 },
    { top: "15%", left: "85%", delay: "0.8s", size: 14 },
    { top: "28%", left: "6%", delay: "1.4s", size: 10 },
    { top: "45%", left: "92%", delay: "0.4s", size: 12 },
    { top: "60%", left: "15%", delay: "1.2s", size: 14 },
    { top: "75%", left: "80%", delay: "1.8s", size: 10 },
    { top: "88%", left: "25%", delay: "0.6s", size: 12 },
    { top: "92%", left: "70%", delay: "1.1s", size: 14 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute animate-twinkle opacity-70"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
        >
          <PixelStar size={star.size} />
        </div>
      ))}
    </div>
  );
};
