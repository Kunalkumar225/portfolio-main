/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0B",
        "glass-tint": "rgba(255, 255, 255, 0.04)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "glass-light": "rgba(255, 255, 255, 0.15)",
        surface: "#0F1115",
        elevated: "#12151C",
        border: "rgba(255, 255, 255, 0.08)",
        accent: "#5B5CFF",
        "accent-soft": "rgba(91, 92, 255, 0.12)",
        "accent-border": "rgba(91, 92, 255, 0.25)",
        "hairline": "rgba(255, 255, 255, 0.08)",
        "text-primary": "#F5F7FA",
        "text-secondary": "#9CA3AF",
        "text-muted": "#6B7280",

        // Aliases to avoid violently breaking the whole app before refactor
        "neon-cyan": "#5B5CFF",
        "vivid-purple": "#5B5CFF",
        "brand-violet": "#5B5CFF",
        "neon-blue": "#5B5CFF"
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"],
        display: ["-apple-system", "BlinkMacSystemFont", "Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(11, 15, 25, 0.8)",
        "glass-glow": "0 0 40px rgba(91, 92, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.05)",
        accent: "0 0 10px rgba(91, 92, 255, 0.5)",
        "glass-inner": "inset 0 1px 1px rgba(255, 255, 255, 0.1)",
      },
      screens: {
        xs: "450px",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        "glass-shine": "glass-shine 3s ease-in-out infinite",
      },
      keyframes: {
        "glass-shine": {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" }
        }
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '350ms',
        'slow': '500ms',
      }
    },
  },
  plugins: [],
};