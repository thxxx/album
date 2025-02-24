import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          900: "#14171A",
          800: "#18181B",
          700: "#404750",
          600: "#6C6C6C",
          500: "#858E96",
          400: "#B5B9BD",
          300: "#E2E6E9",
          250: "#E8E8E8",
          200: "#EFEFEF",
          150: "#F5F5F5",
          100: "#F8F9FA",
        },
        gb: {
          200: "#009789",
          300: "#008A7C",
        },
        blue: "0068C3",
      },
      backgroundImage: {
        "new-black": "linear-gradient(180deg, #3C3C3C 0%, #000000 100%)",
      },
      keyframes: {
        "expand-contract": {
          "0%": { width: "0%" },
          "99%": { width: "100%" },
          "99.1%": { width: "0%" },
          "100%": { width: "0%" },
        },
      },
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        "spin-slow-2": "spin 20s linear infinite",
        "expand-contract": "expand-contract 12s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
