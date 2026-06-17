import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        royal: "#0D5BFF",
        coal: "#141414",
        graphite: "#1C1C1F",
      },
      boxShadow: {
        glow: "0 0 40px rgba(13, 91, 255, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
