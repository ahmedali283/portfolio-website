import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a1628',
        'background-dark': '#081018',
        primary: '#ffffff',
        secondary: '#a0a0a0',
        accent: '#f97316',
        'accent-teal': '#14b8a6',
        'gold-light': '#ffd700',
        'gold-dark': '#b8860b',
        divider: '#1a2942',
        success: '#10b981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['96px', { lineHeight: '1', fontWeight: '700' }],
        'section': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        '5.5xl': ['52px', { lineHeight: '1.3', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}

export default config
