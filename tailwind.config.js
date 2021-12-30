module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {},
  },
  plugins: [
    require('tailwindcss/colors')
  ],
}
