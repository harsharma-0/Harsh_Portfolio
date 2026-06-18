import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a0f1e",
        cyan: "#00d4ff",
        electric: "#2f80ff",
        ink: "#d8e7ff",
        muted: "#8aa0bd"
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 45px rgba(0, 212, 255, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
