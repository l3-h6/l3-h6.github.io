import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Stitch Dark Mode Color Tokens
        "dark-bg": "#131315",
        "dark-surface": "#131315",
        "dark-surface-lowest": "#0e0e10",
        "dark-surface-low": "#1c1b1d",
        "dark-surface-container": "#201f22",
        "dark-surface-high": "#2a2a2c",
        "dark-surface-highest": "#353437",
        "dark-outline": "#8d90a0",
        "dark-outline-variant": "#434655",
        "dark-on-surface": "#e5e1e4",
        "dark-on-surface-variant": "#c3c6d7",
        "dark-primary": "#b4c5ff",
        "dark-primary-container": "#2563eb",
        "dark-on-primary-container": "#eeefff",
        "dark-secondary": "#d2bbff",
        "dark-tertiary": "#ffb596",
        // Existing / Light Mode tokens
        primaryDark: "#0a0a0a",
        primaryLight: "#ffffff",
        "stroke-black": "#0e0e10",
        "accent-cobalt": "#1d4ed8",
        "accent-electric": "#2563eb",
        "surface-container": "#f4f4f5",
        "surface-container-low": "#f6f3f5",
        "surface-container-lowest": "#ffffff",
        "text-muted": "#52525b",
        "canvas-base": "#f8f9fa",
        "on-surface": "#0e0e10",
        "on-surface-variant": "#3f3f46",
      },
      fontFamily: {
        headline: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Geist'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
