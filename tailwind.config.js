/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-p": "var(--pk-black)",
        "black-s": "var(--pk-black-secondary)",
        "burgundy-p": "var(--pk-burgundy)",
        "burgundy-s": "var(--pk-burgundy-secondary)",
        "white-p": "var(--pk-white)",
        "white-s": "var(--pk-white-secondary)",
        "beige-p": "var(--pk-beige)",
        "beige-s": "var(--pk-beige-secondary)",
      },
      height: {
        'slider-max-height': '53rem',
      },
      spacing: {
        '1/18': '18%',
        '1/37': '37%'
      },
      screens: {
        'footer-icon-meet': '1274px',
        'searchbar-lastpoint': '700px',
        'searchbar-midpoint': '500px'
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['light', 'dark'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
