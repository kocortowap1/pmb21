module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'biru' : '#0d295b'
      },

    },
  },
  plugins: [
    require('tailwindcss/colors')
  ],
}
