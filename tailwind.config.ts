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
        "primary-900": "var(--primary-900)",
        "tertiary-600": "var(--tertiary-600)",
        "secondary-700": "var(--secondary-700)",
        "text-placeholder": "var(--text-placeholder)",
        "button-secondary-border": "var(--button-secondary-border)",
        "button-secondary-bg_hover": "var(--button-secondary-bg_hover)",
        "button-shadow-ring": "var(--button-shadow-ring)",
        "icon-border": "var(--icon-border)",
      },
      boxShadow: {
        "icon-bottom-shadow": "var(--icon-bottom-shadow)",
        "icons-rounded-shadow": "var(--icons-rounded-shadow)",
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
