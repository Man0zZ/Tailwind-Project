const plugin = require('tailwindcss/plugin');
module.exports = {
  content: ["./layouts/*.html"],
  theme: {
    extend: {},
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
