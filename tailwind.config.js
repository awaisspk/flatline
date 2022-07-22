/* eslint-disable */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        'flat-blue': '#007bff',
        'flat-indigo': '#6610f2',
        'flat-purple': '#5533ff',
        'flat-pink': '#e83e8c',
        'flat-red': '#dc3545',
        'flat-orange': '#fd7e14',
        'flat-yellow': '#ffc107',
        'flat-green': '#28a745',
        'flat-teal': '#20c997',
        'flat-cyan': '#17a2b8',
        'flat-white': '#fff',
        'flat-gray': '#6c757d',
        'flat-gray-dark': '#343a40',
        primary: '#5533ff',
        body: '#f4f4f4',
        secondary: '#6c757d',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#343a40',
      },
      fontFamily: {
        grotesk: ['SctoGroteskA'],
      },
      maxWidth: {
        flat: 1276,
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-radix')(),
    require('@tailwindcss/typography'),
  ],
};
