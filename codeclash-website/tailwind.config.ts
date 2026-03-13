import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FDE047", // Yellow from play button and some accents
        accent: "#F472B6", // Pink/Coral from gradients
        secondary: "#38BDF8", // Cyan/light blue
        background: "#1a1625", // Deep purple/blue background
        surface: "#2d283e", // Slightly lighter for cards
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-jetbrains)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "card-gradient": "linear-gradient(135deg, rgba(244,114,182,0.15) 0%, rgba(56,189,248,0.15) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
