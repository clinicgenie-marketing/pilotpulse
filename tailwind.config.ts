import type { Config } from "tailwindcss";

/**
 * Token values are measured directly from the design reference
 * (`landing dark.pdf`) — see docs/design-spec-pdf.md.
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
          DEFAULT: "#05002B",
          deep: "#03001D",
        },
        panel: {
          DEFAULT: "#110D3E",
          card: "#090C3F",
          why: "#27234A",
          process: "#1B163F",
          tile: "#2B2555",
          nav: "#28224B",
        },
        ink: {
          DEFAULT: "#FFFFFF",
          body: "#C6C8D3",
          faint: "#8E8AA8",
        },
        brand: {
          cyan: "#0DA4D5",
          blue: "#1F89FF",
          indigo: "#4633FF",
          accent: "#3D7DFF",
        },
        hairline: "rgba(130,140,255,0.20)",
      },
      fontFamily: {
        sans: ["var(--font-mulish)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1330px",
      },
      backgroundImage: {
        signature: "linear-gradient(90deg, #0DA4D5 0%, #1F89FF 50%, #4633FF 100%)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(70,51,255,0.55)",
        "glow-soft": "0 24px 80px -28px rgba(31,137,255,0.35)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(26px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
