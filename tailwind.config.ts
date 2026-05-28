import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue Water Components - Industrial Blue & Silver Palette
        navy: {
          900: "#0A192F",   // Deep navy - primary dark
          800: "#112240",   // Dark navy
          700: "#1A365D",   // Medium navy
        },
        blue: {
          600: "#2563EB",   // Primary blue
          500: "#3B82F6",   // Accent blue
          400: "#60A5FA",   // Light blue
        },
        silver: {
          100: "#F8FAFC",   // Off-white
          200: "#E2E8F0",   // Light silver
          300: "#CBD5E1",   // Silver gray
          400: "#94A3B8",   // Medium silver
          500: "#64748B",   // Steel
        },
        accent: "#0EA5E9",  // Bright sky blue accent
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        'industrial': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
