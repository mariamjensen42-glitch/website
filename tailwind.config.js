/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Space Mono"', 'monospace'],
      },
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        dark: '#0A0A0A',
        light: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
