module.exports = {
  mode: 'jit',
  purge: [
    './public/index.html',
     './public/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'primary': ['Teko', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
