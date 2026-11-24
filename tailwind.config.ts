import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFDF5",
        canvasDark: "#F7F3E9",
        brandBlack: "#121212",
        codedex: {
          yellow: "#FACC15",
          yellowLight: "#FEF08A",
          pink: "#F472B6",
          pinkLight: "#FCE7F3",
          green: "#4ADE80",
          greenDark: "#16A34A",
          greenLight: "#DCFCE7",
          cyan: "#38BDF8",
          cyanLight: "#E0F2FE",
          purple: "#C084FC",
          purpleLight: "#F3E8FF",
          orange: "#FB923C",
          orangeLight: "#FFEDD5",
          cream: "#FFFDF5",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "'Courier New'",
          "Courier",
          "monospace",
        ],
      },
      boxShadow: {
        neo: "4px 4px 0px 0px #121212",
        neoSm: "2px 2px 0px 0px #121212",
        neoLg: "6px 6px 0px 0px #121212",
        neoXl: "8px 8px 0px 0px #121212",
      },
      animation: {
        bounceSlow: "bounceSlow 2s infinite ease-in-out",
        shake: "shake 0.5s ease-in-out",
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-4px) rotate(-2deg)" },
          "40%, 80%": { transform: "translateX(4px) rotate(2deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
