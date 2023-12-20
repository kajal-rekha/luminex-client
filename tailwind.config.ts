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
        dark: "#19191B",
        light: "#FFFCFA",
        gray: "#E2E0DF",
        red: "#C3315D",
        pink: "#ED7DC0",
        orange: "#FF7D5B",
        green: "#2C614C",
        blue: "#32B8CB",
        violet: "#7A60B3",
      },
    },
  },
  plugins: [],
};
export default config;
