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
        primary: {
          DEFAULT: "#0F4C81", // Deep Blue
          light: "#1a63a3",
          dark: "#0a365c",
        },
        accent: {
          DEFAULT: "#FF8C42", // Orange
          hover: "#e67a35",
        },
        background: "#F8F9FA", // Very Light Gray
        foreground: "#222222", // Dark Gray
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;