module.exports = {
  mode: 'jit',
  purge: [
    './public/index.html',
     './public/*.js',
     './public/.{html,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Teko', 'sans-serif'],
      },
    },
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
