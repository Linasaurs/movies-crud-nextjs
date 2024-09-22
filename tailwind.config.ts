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
        background: "#FFFFFF",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#272727",
        body: "#272727",
        primary: "#5680E9",
        secondary: "#272727",
        success: "#14A76C",
        danger: "#FF652F",
        warning: "#FFE400",
      },
      fontSize: {
        "title-lg": ["36px", "40px"],
        "title-md": ["24px", "32px"],
        "title-sm": ["18px", "28px"],
      },
    },
  },
  plugins: [],
};
export default config;
