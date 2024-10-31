/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rich-black': '#001214',
        'misty-rose': '#ECD5D8',
      },
    },
  },
  plugins: [],
}
