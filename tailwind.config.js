/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'magnolia': '#FAF0FA',
        'night': '#0C1713',
        'cambridge-blue': '#97C4AF',
        'rose-taupe': '#815355',
      },
    },
  },
  plugins: [],
}
