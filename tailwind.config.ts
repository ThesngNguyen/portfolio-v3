import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    backgroundImage: {
      explosion: 'url("bg-explosion.png")',
      circles: 'url("bg-circles.png")',
      circleStar: 'url("/circle-star.svg")',
      site: 'url("/site-bg.svg")',
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite'
    },
    fontFamily: {
      sora: [`var(--font-sora)`, 'sans-serif']
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    boxShadow: {
      'outer': '0 0 10px 5px rgba(255, 255, 255, 0.3)',
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    }
  },
  plugins: [],
} satisfies Config;
