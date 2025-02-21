/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // Enable dark mode
    theme: {
      extend: {
        colors: {
            purple: {
              300: '#d8b4fe',
              500: '#a855f7',
              600: '#9333ea',
              700: '#7e22ce',
            },
          },
      },
    },
    plugins: [],
  }
  
  