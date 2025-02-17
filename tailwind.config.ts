import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "surface-x-high": "var(--color-surface-x-high)",
        "surface-x-low": "var(--color-surface-x-low)",
        "surface-brand": "var(--color-surface-brand)",
        "surface-danger": "var(--color-surface-danger)",
        "surface-danger-variant": "var(--color-surface-danger-variant)",
        "surface-warning": "var(--color-surface-warning)",
        "surface-warning-variant": "var(--color-surface-warning-variant)",
        "content-xx-high": "var(--color-content-xx-high)",
        "content-medium": "var(--color-content-medium)",
        "content-low": "var(--color-content-low)",
        "content-danger": "var(--color-content-danger)",
        "content-warning": "var(--color-content-warning)",
        "state-hover": "var(--color-state-hover)",
        "state-focus": "var(--color-state-focus)",
      },
    },
  },
  plugins: [],
} satisfies Config;
