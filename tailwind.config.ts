import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0c0c',
        text: '#f2f2f0',
        muted: '#c3c3bd',
        brand: '#6ee7b7',
        accent: '#b1d5ff',
        card: '#141516',
        line: '#232425',
        btn: '#111417',
      },
      boxShadow: {
        lift: '0 10px 30px rgba(0,0,0,.3)'
      }
    },
  },
  plugins: [],
} satisfies Config
