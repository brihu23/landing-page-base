const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'bgPrimary': '#000000',
        'bgSecondary': '#bcbabc',
        'primary': '#93fcec',
        'secondary':'#fcaa93',
        'ternary': '#0c3c4c',
      },



    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}