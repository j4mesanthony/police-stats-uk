/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      '100': '100px',
      '120': '120px',
      '140': '140px',
      '160': '160px',
    }
  },
  plugins: [],
}

