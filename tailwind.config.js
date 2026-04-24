/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        primary: {
          500: '#FF263C',
          700: '#E40037',
        },
        shades: {
          black: '#000',
          white: '#fff',
          yellow: '#F2C94C',
          grey: '#2F2F2F',
          secondary: '#1E0000',
          terciary: '#8A0021',
          fourth: '#1C0003',
        }
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        accent: ['Comfortaa', 'cursive'],
        retro: ['"Press Start 2P"', 'monospace'],
      }
    },
  },
  plugins: [],
}
