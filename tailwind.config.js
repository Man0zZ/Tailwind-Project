const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./layouts/*.html"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      neutral: {
        '100': '#2A3539',
        '90': '#303B40',
        '80': '#3B484C',
        '50': '#87979D',
        '40': '#cfe3eb',
        '20': '#DDE6EA'
      },
    }
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant('active-link', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.${e(`active-link${separator}${className}`)}.active`);
      });
    })
  ],
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active-link']
    },
}
