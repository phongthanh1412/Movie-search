/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      colors: {
        border: "var(--color-border)", /* white with opacity */
        input: "var(--color-input)", /* elevated surface */
        ring: "var(--color-ring)", /* netflix red */
        background: "var(--color-background)", /* rich black */
        foreground: "var(--color-foreground)", /* pure white */
        primary: {
          DEFAULT: "var(--color-primary)", /* netflix red */
          foreground: "var(--color-primary-foreground)", /* pure white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* clean light gray */
          foreground: "var(--color-secondary-foreground)", /* deep charcoal */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clear red */
          foreground: "var(--color-destructive-foreground)", /* pure white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* deep charcoal */
          foreground: "var(--color-muted-foreground)", /* muted gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* elevated surface */
          foreground: "var(--color-accent-foreground)", /* pure white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* elevated surface */
          foreground: "var(--color-popover-foreground)", /* pure white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* elevated surface */
          foreground: "var(--color-card-foreground)", /* pure white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* fresh green */
          foreground: "var(--color-success-foreground)", /* pure white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* warm orange */
          foreground: "var(--color-warning-foreground)", /* pure white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clear red */
          foreground: "var(--color-error-foreground)", /* pure white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in": "slide-in 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "scale-in": "scale-in 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
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
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in": {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.95)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
      },
      transitionTimingFunction: {
        'cinema': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },
      boxShadow: {
        'cinema-sm': '0 1px 3px rgba(0, 0, 0, 0.2)',
        'cinema': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'cinema-lg': '0 4px 12px rgba(0, 0, 0, 0.3)',
      },
      backdropBlur: {
        'cinema': '8px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}