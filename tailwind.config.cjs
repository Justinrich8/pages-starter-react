module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': "var(--brand-blue)",
        'brand-blueSecondary': "var(--brand-blueSecondary)",
        'brand-green': "var(--brand-green)",
        'brand-greenSecondary': "var(--brand-greenSecondary)",
        'gray1': "var(--gray1)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      }
    },
  },
  plugins: [],
};
