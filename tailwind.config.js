// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"], // add more globs if needed
  theme: { extend: {} },
  plugins: [],
  mode: "jit",  // enable JIT
  safelist: [
    'text-[110px]',
    'text-[160px]',
    // add any other dynamic classes you’re using
  ]
};

