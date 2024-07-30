import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope: ['Manrope', 'sans-serif'],
      },
      colors:{
        primary: "#4B0082",
        typography: "#323337",
        typography2: "#1A1A1A",
      }
    },
  },
  plugins: [],
};
export default config;
