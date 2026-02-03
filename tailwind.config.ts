import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#C45A00",
        primarySoft: "#FFE6CC",
        borderLight: "#E5E7EB",
      },

      boxShadow: {
        card: "0 12px 32px rgba(0,0,0,0.08)",
        soft: "0 6px 16px rgba(0,0,0,0.06)",
        glow: "0 0 40px rgba(99,102,241,0.35)", // subtle indigo glow
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      /* 🔥 PREMIUM ANIMATIONS */
      animation: {
        "gradient-border": "gradient 6s ease infinite",
        "soft-glow": "softGlow 4s ease-in-out infinite",
      },

      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        softGlow: {
          "0%, 100%": {
            boxShadow: "0 0 25px rgba(99,102,241,0.25)",
          },
          "50%": {
            boxShadow: "0 0 45px rgba(99,102,241,0.45)",
          },
        },
      },

      backgroundSize: {
        "200%": "200% 200%",
      },
    },
  },

  plugins: [],
};

export default config;
