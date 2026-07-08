/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        foreground: '#f0ede8',
        accent: '#3d8c8c',
      },
    },
  },
  plugins: [],
}
