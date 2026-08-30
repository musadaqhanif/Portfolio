/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: { xs: '480px' },
      colors: {
        // Tokens are stored as RGB channels in globals.css, so `<alpha-value>`
        // lets every one of these work with an opacity modifier: bg-accent/10,
        // border-accent/40, text-ink/70 and so on.
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--surface-2) / <alpha-value>)',
        line: 'rgb(var(--border) / <alpha-value>)',
        ink: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        faint: 'rgb(var(--faint) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',
        'accent-hover': 'rgb(var(--accent-hover) / <alpha-value>)',
        'accent-text': 'rgb(var(--accent-text) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        'gradient-one': 'rgb(var(--gradient-one) / <alpha-value>)',
        'gradient-two': 'rgb(var(--gradient-two) / <alpha-value>)',
        'line-subtle': 'rgb(var(--border-subtle) / <alpha-value>)',

        // Legacy aliases, kept so any markup not yet migrated still resolves.
        background: 'rgb(var(--bg) / <alpha-value>)',
        container: 'rgb(var(--surface) / <alpha-value>)',
        stroke: 'rgb(var(--border) / <alpha-value>)',
        primary: 'rgb(var(--accent) / <alpha-value>)',
        title: 'rgb(var(--text) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        subtext: 'rgb(var(--muted) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Fluid display sizes: scale with viewport, clamped at both ends.
        display: ['clamp(2.6rem, 7vw, 5.25rem)', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        headline: ['clamp(2rem, 4.4vw, 3.25rem)', { lineHeight: '1.06', letterSpacing: '-0.028em' }],
        title: ['clamp(1.4rem, 2.4vw, 1.9rem)', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
      },
      maxWidth: { content: '1180px', prose: '68ch' },
      borderRadius: { xl: '0.875rem', '2xl': '1.25rem', '3xl': '1.75rem' },
      boxShadow: {
        // Resolved from CSS variables so each theme gets its own opacity.
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
      },
      transitionTimingFunction: { out: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      animation: {
        marquee: 'marquee var(--time, 40s) linear infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
