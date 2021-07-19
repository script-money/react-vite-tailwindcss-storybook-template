module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      boxShadow: {
        checkbox: "#2cc5d2 0 0 0 1px inset;"
      },
      colors: {
        main: "#61dafb"
      },
      borderRadius: {
        "6xl": "3rem"
      }
    },
  },
  variants: {},
  plugins: [],
}