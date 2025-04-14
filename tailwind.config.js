/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A5C1A',
          light: '#1a6d2a',
          dark: '#084c15'
        },
        secondary: {
          DEFAULT: '#8BC34A',
          light: '#9ccc65',
          dark: '#7cb342'
        },
        accent: {
          DEFAULT: '#FFD700',
          light: '#ffe033',
          dark: '#ccac00'
        }
      },
      fontSize: {
        'heading-mobile': ['1.5rem', { lineHeight: '2rem' }],
        'heading-tablet': ['2rem', { lineHeight: '2.5rem' }],
        'heading-desktop': ['2.5rem', { lineHeight: '3rem' }],
      }
    },
  },
  plugins: [],
}