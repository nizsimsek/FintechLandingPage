/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tab1' : '600px',
      // => @media (min-width: 600px) { ... }

      'tab2': '768px',
      // => @media (min-width: 768px) { ... }

      'pc1': '1280px',
      // => @media (min-width: 1280px) { ... }

      'pc2': '1366px',
      // => @media (min-width: 1366px) { ... }

      'pc3': '1440px',
      // => @media (min-width: 1440px) { ... }

      'pc4': '1600px',
      // => @media (min-width: 1600px) { ... }

      'pc5': '1920px',
      // => @media (min-width: 1920px) { ... }

      'pc6': '2000px',
      // => @media (min-width: 2000px) { ... }
    },
  },
  plugins: [],
}
