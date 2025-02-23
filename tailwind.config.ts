import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-on-air-var)"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "550",
        bold: "700",
      },
      lineHeight: {
        "label-s": "17px",
        normal: "1.375",
      },
      letterSpacing: {
        tight: "0.01px",
        normal: "0.16px",
      },
      spacing: {
        xxs: "6px",
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "5xl": "48px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
