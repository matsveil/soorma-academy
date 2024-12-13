/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"], // Update if paths change
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Default sans-serif
        serif: ['Merriweather', 'ui-serif', 'Georgia'], // Custom serif font
      },
      colors: {
        primary: '#1E3A8A', // Deep blue
        secondary: '#FFC857', // Yellow accent
        accent: '#14B8A6', // Teal accent
        lightGray: '#F9FAFB', // Background gray
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Optional for rich text formatting
    require('@tailwindcss/forms'), // Optional for improved form styling
  ],
};

