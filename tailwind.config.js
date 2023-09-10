/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    // colors: {
    //   'grent': '#39edb8"',
    // },
    screens: {
      xs: "480px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage:{
        'fi2-image':'url("./components/images/feat-img2.jpg")',
      },
      fontFace: {
        'fontawesome': {
          'fontFamily': 'Font Awesome',
          'src': 'url(/fonts/font-awesome/fonts/fontawesome-webfont.woff) format("woff")',
          'fontStyle': 'normal',
          'fontWeight': 'normal',
          'fontDisplay': 'auto',
        }
      },
      
    },
  },
  plugins: [],
}

