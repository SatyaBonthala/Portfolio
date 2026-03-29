import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#38bdf8',
          dark: '#0ea5e9',
          light: '#7dd3fc',
        },
        dark: {
          DEFAULT: '#020617',
          light: '#0b1120',
          lighter: '#111827',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 6px rgba(56, 189, 248, 0.45), 0 0 12px rgba(56, 189, 248, 0.2)' },
          '100%': { textShadow: '0 0 10px rgba(56, 189, 248, 0.75), 0 0 22px rgba(56, 189, 248, 0.35)' }
        }
      }
    },
  },
  plugins: [],
}
export default config
