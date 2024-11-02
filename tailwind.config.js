/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        magnolia: '#FAF0FA',
        night: '#0C1713',
        'cambridge-blue': '#97C4AF',
        'rose-taupe': '#815355',
      },
      fontFamily: {
        sans: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
