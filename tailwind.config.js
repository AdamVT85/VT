/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Official Vintage Travel Brand Colors
        terracotta: {
          DEFAULT: '#C85A3C',
          light: '#D87A5C',
          dark: '#B04A2C',
        },
        clay: {
          DEFAULT: '#E6A89C',
          light: '#F0BEB2',
          dark: '#D89888',
        },
        stone: {
          DEFAULT: '#E8DDD0',
          light: '#F2EBE0',
          dark: '#DECFBC',
        },
        olive: {
          DEFAULT: '#91984B',
          light: '#A8B05F',
          dark: '#7A833D',
        },
        palm: {
          DEFAULT: '#3D4A3A',
          light: '#4E5C4B',
          dark: '#2D3829',
        },
        soleil: {
          DEFAULT: '#F5B445',
          light: '#F9C665',
          dark: '#E69F2B',
        },
      },
      fontFamily: {
        serif: ['Crimson Pro', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
