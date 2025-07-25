import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        light: "200",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          light: "hsl(var(--secondary-light))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--background))",
          bright: "hsl(var(--surface-bright))",
          container: "hsl(var(--surface-container))",
          "container-lowest": "hsl(var(--surface-container-lowest))",
        },
        text: {
          primary: "hsl(var(--foreground))",
          secondary: "hsl(var(--muted-foreground))",
        },
        hover: {
          background: "hsl(var(--hover-background))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // MatDash color palette
        matdash: {
          primary: "rgb(99, 91, 255)",
          "primary-light": "rgba(99, 91, 255, 0.15)",
          secondary: "rgb(22, 205, 199)",
          "secondary-light": "rgba(22, 205, 199, 0.15)",
          background: "#fff",
          "surface-bright": "#f2f6fa",
          "surface-container": "#fff",
          "surface-container-lowest": "#f6f7f9",
          "text-primary": "#29343d",
          "text-secondary": "rgba(41, 52, 61, 0.7)",
          border: "#e0e6eb",
          "hover-background": "#f6f9fc",
        },
        // Extended color palettes
        blue: {
          50: "#eff6ff",
          100: "#dbeafe", 
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "rgb(99, 91, 255)",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af", 
          900: "#1e3a8a",
          950: "#172554",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "rgb(22, 205, 199)",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb", 
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac", 
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        violet: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "flip-words": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.8)",
          },
          "10%": { 
            opacity: "1",
            transform: "scale(1)",
          },
          "45%": { 
            opacity: "1",
            transform: "scale(1)",
          },
          "55%": { 
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": { 
            opacity: "0",
            transform: "scale(0.8)",
          },
        },
        "flip-words-alt": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.8)",
          },
          "45%": { 
            opacity: "0",
            transform: "scale(0.8)",
          },
          "55%": { 
            opacity: "1",
            transform: "scale(1)",
          },
          "90%": { 
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": { 
            opacity: "0",
            transform: "scale(0.8)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "flip-words": "flip-words 8s ease-out infinite",
        "flip-words-alt": "flip-words-alt 8s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;