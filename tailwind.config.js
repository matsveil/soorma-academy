/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Default sans-serif
        serif: ['Merriweather', 'ui-serif', 'Georgia'], // Custom serif font
      },
    },
  },
  plugins: [],
};

