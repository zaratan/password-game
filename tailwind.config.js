module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'last-grow': '100px 1fr',
      },
      transitionDuration: {
        5000: '5s',
      },
      width: {
        '3/2': '150%',
        130: '32.5rem',
      },
      height: {
        84: '21rem',
      },
    },
  },
  variants: {
    extend: {
      transitionDuration: ['hover'],
    },
  },
  plugins: [],
};
