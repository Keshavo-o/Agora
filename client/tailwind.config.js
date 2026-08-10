/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agora: {
          gold: '#E5A93C',
          goldLight: '#F6D075',
          dark: '#07080B',
          card: '#10121B',
          cyan: '#38BDF8',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
