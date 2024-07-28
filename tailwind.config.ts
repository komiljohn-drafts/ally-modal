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
        "foreground-rgb": "var(--foreground-rgb)",
        "button-primary-bg": "var(--button-primary-bg)",
        "button-primary-bg_hover": "var(--button-primary-bg_hover)",
        "bg-disabled": "var(--bg-disabled)",
        "fg-disabled": "var(--fg-disabled)",
        "border-disabled_subtle": "var(--border-disabled_subtle)",
        "text-primary-900": "var(--text-primary-900)",
        "text-tertiary-600": "var(--text-primary-900)",
        "text-secondary-700": "var(--text-secondary-700)",
        "text-placeholder": "var(--text-placeholder)",
        "button-secondary-border": "var(--button-secondary-border)",
        "button-secondary-bg_hover": "var(--button-secondary-bg_hover)",
        "button-shadow-ring": "var(--button-shadow-ring)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
