let grid48 = {};
for (let i = 1; i < 48; i++) {
  grid48[`${i}/48`] = (100/48)*i + "%";
}

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: {
          '50':  '#fbf7f2',
          '100': '#fceee4',
          '200': '#f9dac4',
          '300': '#f7bc91',
          '400': '#f78f51',
          '500': '#ff6000',
          '600': '#ed421b',
          '700': '#cd311e',
          '800': '#a52820',
          '900': '#84211e',
        }
      },
      width: { ...grid48 },
      boxShadow: {
        search: "0 0 4px 0 rgba(0,0,0,.16)"
      },
      lineHeight: {
        'min': '1px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
