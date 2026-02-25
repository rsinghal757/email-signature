module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        phone: '430px',
      },
      spacing: {
        fluid: 'clamp(1rem, 4vw, 2rem)',
      },
      borderRadius: {
        'ui-md': '0.75rem',
        'ui-lg': '1rem',
      },
      minHeight: {
        touch: '44px',
      },
      colors: {
        brand: {
          100: '#fdecef',
          200: '#fac7cf',
          400: '#ee7081',
          500: '#e43349',
          600: '#ca1e34',
        },
      },
      boxShadow: {
        card: '0 8px 30px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
