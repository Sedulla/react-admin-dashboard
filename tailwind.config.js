module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        999: 999,
      },
      flex: {
        1: 1,
        2: 2,
        4: 4,
      },
      boxShadow: {
        lg: '0px 0px 15px -9px rgba(0,0,0,0.75)',
      },
    },
  },
  plugins: [],
};
