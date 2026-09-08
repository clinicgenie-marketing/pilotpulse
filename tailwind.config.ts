import type { Config } from "tailwindcss";

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
        background: {
          DEFAULT: "#FAFAFA",
          alt: "#F3F3F4",
        },
        ground: "#FAFAFA",
        surface: "#FFFFFF",
        neutral: {
          50: "#FAFAFA",
          100: "#F3F3F4",
          200: "#E7E6EA",
          300: "#D3D3D9",
          400: "#A2A1AF",
          500: "#7C7B8E",
          600: "#646374",
          700: "#4E4D5B",
          800: "#32313A",
          900: "#1D1C21",
          950: "#131316",
        },
        primary: {
          50: "#E5E3FE",
          100: "#D6D3FD",
          200: "#B9B3FB",
          300: "#948CF9",
          400: "#6F64F7",
          500: "#4638F5",
          600: "#1F0EF5",
          700: "#1507CC",
          800: "#0F049F",
          900: "#0A0271",
          DEFAULT: "#4638F5",
          text: "#4638F5",
          "text-dark": "#786DF8",
          hover: "#1F0EF5",
          soft: "#E5E3FE",
          dark: "#1F0EF5",
        },
        secondary: {
          DEFAULT: "#A236F2",
          text: "#A236F2",
        },
        accent: {
          DEFAULT: "#3686F2",
          hover: "#1372F1",
          on: "#1D1C21",
          text: "#0F6DEB",
          "text-dark": "#3686F2",
          soft: "#E8F3FE",
        },
        ink: {
          DEFAULT: "#1D1C21",
          muted: "#646374",
          faint: "#9A99A6",
        },
        line: "#E7E6EA",
        outline: "#B9B3FB",
        partner: {
          imda: "#6B1F7C",
          singtel: "#E01B1B",
          ey: "#D4A017",
          temasek: "#1A7A3A",
          nyp: "#0057B8",
          ite: "#8B0000",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-cal-sans)", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
      borderRadius: {
        button: "10px",
        card: "16px",
      },
      boxShadow: {
        "glow-purple":
          "0 0 0 1px rgba(70, 56, 245, 0.08), 0 12px 32px rgba(70, 56, 245, 0.12)",
        "glow-blue":
          "0 0 0 1px rgba(54, 134, 242, 0.08), 0 12px 32px rgba(54, 134, 242, 0.12)",
        "btn-primary":
          "0 0 0 1px rgba(70, 56, 245, 0.18), 0 8px 24px rgba(70, 56, 245, 0.26)",
        "btn-accent":
          "0 0 0 1px rgba(54, 134, 242, 0.18), 0 8px 24px rgba(54, 134, 242, 0.24)",
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
