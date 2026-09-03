import type { Config } from "tailwindcss";

/**
 * Light-theme token values — cool enterprise palette with brand cyan/blue accents.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#F4F7FC",
          deep: "#E6ECF6",
        },
        panel: {
          DEFAULT: "#EEF2FA",
          card: "#FFFFFF",
          why: "#E8EEF8",
          process: "#F0F4FB",
          tile: "#E4EAF5",
          nav: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#0B1220",
          body: "#4A5568",
          faint: "#7A8499",
        },
        brand: {
          cyan: "#0891B2",
          blue: "#1F6FE5",
          indigo: "#4633FF",
          accent: "#2563EB",
        },
        hairline: "rgba(30, 50, 100, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1330px",
      },
      backgroundImage: {
        signature: "linear-gradient(90deg, #1DBBEB 0%, #4DA3FF 45%, #8B7BFF 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(70,51,255,0.22)",
        "glow-soft": "0 24px 80px -28px rgba(31,137,255,0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heroFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%, 100%": {
            opacity: "0.85",
            filter: "drop-shadow(0 0 8px rgba(70,51,255,0.18))",
          },
          "50%": {
            opacity: "1",
            filter: "drop-shadow(0 0 20px rgba(70,51,255,0.32))",
          },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards",
        "hero-float": "heroFloat 9s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
