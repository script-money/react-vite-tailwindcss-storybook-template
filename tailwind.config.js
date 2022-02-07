module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite'
      },
      boxShadow: {
        checkbox: '#2cc5d2 0 0 0 1px inset;'
      },
      colors: {
        main: '#61dafb'
      },
      borderRadius: {
        '6xl': '3rem'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
