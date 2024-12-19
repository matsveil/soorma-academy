/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
        serif: ['Instrument Serif', 'ui-serif', 'Georgia'],
      },
      borderRadius: {
        'lg': '2rem',
        'xl': '2.5rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '5rem',
      },
      boxShadow: {
        'modern': '0 4px 20px -2px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.02)',
        'modern-lg': '0 10px 40px -3px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.25)',
      },
      colors: {
        'royal-blue': {
          50: '#f0f5ff',
          100: '#e5edff',
          500: '#1a365d',
          600: '#1e40af',
          700: '#1e3a8a',
        },
        'accent-gold': {
          400: '#fbbf24',
          500: '#f59e0b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

