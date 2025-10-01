/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors:{
            lightHover:'#fcf4ff',
            drakHover: '#2a004a',
            drakTheme: '#11001f',
        },
        fontFamily:{
          sans: ['Outfit', 'sans-serif'],
            outfit: ['Outfit', 'sans-serif'],
            ovo: ['Ovo', 'serif'],
        }
    },
  },
  plugins: [],
};