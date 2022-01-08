module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'biru' : '#0d295b',
        'kuning' : '#ffcd57'
      },

    },
  },
  plugins: [
    require('tailwindcss/colors')
  ],
}
