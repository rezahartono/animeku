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
        main: {
          primary: "#1f1d60",
          secondary: "#181818",
          dark: "#040414",
          light: "#f0f0f0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
