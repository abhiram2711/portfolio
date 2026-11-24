/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#0B0F14',
        navy: {
          950: '#060B12',
          900: '#0A1628',
          800: '#112240',
          700: '#1D3357',
        },
        electric: {
          blue: '#2F80FF',
          deep: '#1E64D4',
        },
        cyan: {
          accent: '#22D3EE',
          glow: '#06B6D4',
        },
        surface: {
          DEFAULT: '#0E1726',
          subtle: '#142036',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(47, 128, 255, 0.35)',
        },
        text: {
          primary: '#E6EDF3',
          muted: '#8B98A8',
          subtle: '#64748B',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Sora', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(47, 128, 255, 0.25)',
        'glow-md': '0 0 25px -5px rgba(34, 211, 238, 0.25)',
        'glow-card': '0 8px 32px -4px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.07)',
      }
    },
  },
  plugins: [],
}