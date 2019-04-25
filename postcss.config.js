module.exports = {
  plugins: {
    'postcss-easy-import': {},
    'postcss-custom-properties': {},
    // 'postcss-color-function': {},
    'postcss-color-mod-function': {},
    autoprefixer: {
      browsers: ['> 1%', 'last 2 versions'],
    },
    'postcss-nested': {},
    cssnano: {},
  },
  // plugins: {
  //   // Illustrational
  //   // 'postcss-css-variables': {
  //   //   preserve: true,
  //   // },
  //   autoprefixer: {
  //     browsers: ['> 1%', 'last 2 versions'],
  //   },
  //   'postcss-custom-properties': {},
  //   'postcss-color-function': {},
  // },
};
