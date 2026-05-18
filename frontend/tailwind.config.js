/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Clash Display"', '"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // NexusAI brand palette
        nexus: {
          50:  '#f0f7ff',
          100: '#e0effe',
          200: '#baddfd',
          300: '#7ec0fb',
          400: '#3a9ef6',
          500: '#0f7fe8',
          600: '#0361c6',
          700: '#044da0',
          800: '#084384',
          900: '#0d3a6e',
          950: '#0a2347',
        },
        surface: {
          DEFAULT: '#0d0f14',
          1: '#13161e',
          2: '#1a1e28',
          3: '#212637',
        },
        glow: '#3a9ef6',
      },
      animation: {
        'fade-up':    'fadeUp 0.4s ease forwards',
        'fade-in':    'fadeIn 0.3s ease forwards',
        'pulse-dot':  'pulseDot 1.4s ease-in-out infinite',
        'slide-in':   'slideIn 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'shimmer':    'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to:   { opacity: 1 },
        },
        pulseDot: {
          '0%, 80%, 100%': { transform: 'scale(0)', opacity: 0.3 },
          '40%':           { transform: 'scale(1)',   opacity: 1 },
        },
        slideIn: {
          from: { opacity: 0, transform: 'translateX(-16px)' },
          to:   { opacity: 1, transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.6 },
          '50%':      { opacity: 1 },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-gradient': `
          radial-gradient(at 20% 20%, hsla(210,80%,30%,0.3) 0px, transparent 50%),
          radial-gradient(at 80% 80%, hsla(220,70%,20%,0.2) 0px, transparent 50%)
        `,
      },
      boxShadow: {
        'glow-sm': '0 0 12px rgba(58,158,246,0.25)',
        'glow-md': '0 0 28px rgba(58,158,246,0.3)',
        'glow-lg': '0 0 60px rgba(58,158,246,0.2)',
      },
    },
  },
  plugins: [],
}
