import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b0f19",
        slate: "#1d2433",
        mist: "#f5f7fb",
        accent: "#ff7a18",
        sky: "#4f7cff",
        lime: "#22c55e"
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(8, 20, 50, 0.65)",
        glow: "0 24px 60px -35px rgba(79, 124, 255, 0.6)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
